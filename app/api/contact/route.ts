import { NextResponse } from 'next/server';

const AIRTABLE_API_URL = 'https://api.airtable.com/v0';

const getFieldKey = (envName: string, fallback: string) =>
  process.env[envName] || fallback;

const CONTACT_FIELDS = {
  name: getFieldKey('AIRTABLE_CONTACT_FIELD_NAME', 'Name'),
  email: getFieldKey('AIRTABLE_CONTACT_FIELD_EMAIL', 'Email'),
  message: getFieldKey('AIRTABLE_CONTACT_FIELD_MESSAGE', 'Message'),
  source: getFieldKey('AIRTABLE_CONTACT_FIELD_SOURCE', 'Source'),
  status: getFieldKey('AIRTABLE_CONTACT_FIELD_STATUS', 'Status'),
  submittedAt: getFieldKey(
    'AIRTABLE_CONTACT_FIELD_SUBMITTED_AT',
    'Submitted At',
  ),
  pageUrl: getFieldKey('AIRTABLE_CONTACT_FIELD_PAGE_URL', 'Page URL'),
  userAgent: getFieldKey('AIRTABLE_CONTACT_FIELD_USER_AGENT', 'User Agent'),
};

type ContactPayload = {
  name?: unknown
  email?: unknown
  message?: unknown
  pageUrl?: unknown
  website?: unknown
};

const getTrimmedString = (value: unknown, maxLength: number) =>
  typeof value === 'string'
    ? value.trim().slice(0, maxLength)
    : '';

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const getAirtableFields = ({
  name,
  email,
  message,
  pageUrl,
  userAgent,
}: {
  name: string
  email: string
  message: string
  pageUrl: string
  userAgent: string
}) => ({
  [CONTACT_FIELDS.name]: name,
  [CONTACT_FIELDS.email]: email,
  [CONTACT_FIELDS.message]: message,
  [CONTACT_FIELDS.source]: 'Website',
  [CONTACT_FIELDS.status]: 'New',
  [CONTACT_FIELDS.submittedAt]: new Date().toISOString(),
  ...pageUrl && { [CONTACT_FIELDS.pageUrl]: pageUrl },
  ...userAgent && { [CONTACT_FIELDS.userAgent]: userAgent },
});

export async function POST(request: Request): Promise<NextResponse> {
  const payload = await request.json().catch(() => undefined) as
    ContactPayload | undefined;

  if (!payload) {
    return NextResponse.json({ error: 'Invalid contact form submission.' }, {
      status: 400,
    });
  }

  const honeypot = getTrimmedString(payload.website, 250);
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  const name = getTrimmedString(payload.name, 120);
  const email = getTrimmedString(payload.email, 254);
  const message = getTrimmedString(payload.message, 5000);
  const pageUrl =
    getTrimmedString(payload.pageUrl, 500) ||
    getTrimmedString(request.headers.get('referer'), 500);
  const userAgent = getTrimmedString(request.headers.get('user-agent'), 1000);

  if (name.length < 2) {
    return NextResponse.json({ error: 'Please enter your name.' }, {
      status: 400,
    });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, {
      status: 400,
    });
  }

  if (message.length < 10) {
    return NextResponse.json({ error: 'Please enter a message.' }, {
      status: 400,
    });
  }

  const token = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableId = process.env.AIRTABLE_CONTACT_TABLE_ID;

  if (!token || !baseId || !tableId) {
    console.error('Airtable contact form env vars are not configured');
    return NextResponse.json({
      error: 'The contact form is not configured yet.',
    }, { status: 503 });
  }

  const response = await fetch(
    `${AIRTABLE_API_URL}/${baseId}/${encodeURIComponent(tableId)}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        records: [{
          fields: getAirtableFields({
            name,
            email,
            message,
            pageUrl,
            userAgent,
          }),
        }],
        typecast: false,
      }),
    },
  );

  if (!response.ok) {
    console.error('Airtable contact form submission failed', {
      status: response.status,
      body: await response.text().catch(() => undefined),
    });
    return NextResponse.json({
      error: 'We could not send your message. Please try again later.',
    }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
