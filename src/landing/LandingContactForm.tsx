'use client';

import { FormEvent, useState } from 'react';
import { toast } from 'sonner';
import { clsx } from 'clsx/lite';

const landingFontSans = '[font-family:var(--font-landing-sans)]';

const fieldClassName = clsx(
  landingFontSans,
  [
    'w-full rounded-[4px] border border-[#ddd2c5]',
    'bg-[#faf8f4] px-4 py-3 text-[0.98rem] text-[#26303a]',
    'outline-none transition focus:border-[#bda891]',
  ].join(' '),
);

type ContactFormResponse = {
  error?: string
};

export default function LandingContactForm() {
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setSending(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
          website: formData.get('website'),
          pageUrl: window.location.href,
        }),
      });
      const result = await response
        .json()
        .catch(() => ({})) as ContactFormResponse;

      if (!response.ok) {
        throw new Error(
          result.error || 'We could not send your message. Please try again.',
        );
      }

      toast.success('Message sent! We\'ll be in touch soon.');
      form.reset();
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Website
          <input
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>
      <div>
        <label className={clsx(
          landingFontSans,
          'mb-2 block text-sm normal-case tracking-normal text-[#1f2930]',
        )}>
          Name
        </label>
        <input
          name="name"
          required
          autoComplete="name"
          maxLength={120}
          className={fieldClassName}
        />
      </div>
      <div>
        <label className={clsx(
          landingFontSans,
          'mb-2 block text-sm normal-case tracking-normal text-[#1f2930]',
        )}>
          Email
        </label>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          maxLength={254}
          className={fieldClassName}
        />
      </div>
      <div>
        <label className={clsx(
          landingFontSans,
          'mb-2 block text-sm normal-case tracking-normal text-[#1f2930]',
        )}>
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          minLength={10}
          maxLength={5000}
          className={clsx(fieldClassName, 'resize-y')}
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className={clsx(
          landingFontSans,
          [
            'w-full rounded-[4px] border border-transparent bg-[#222c33]',
            'px-5 py-3 text-[0.98rem] font-semibold text-white shadow-none',
            'transition hover:bg-[#2a3640]',
            'disabled:cursor-not-allowed disabled:opacity-70',
          ].join(' '),
        )}
      >
        {sending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
