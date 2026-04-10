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

export default function LandingContactForm() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success('Message sent! We\'ll be in touch soon.');
      e.currentTarget.reset();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className={clsx(
          landingFontSans,
          'mb-2 block text-sm normal-case tracking-normal text-[#1f2930]',
        )}>
          Name
        </label>
        <input required className={fieldClassName} />
      </div>
      <div>
        <label className={clsx(
          landingFontSans,
          'mb-2 block text-sm normal-case tracking-normal text-[#1f2930]',
        )}>
          Email
        </label>
        <input type="email" required className={fieldClassName} />
      </div>
      <div>
        <label className={clsx(
          landingFontSans,
          'mb-2 block text-sm normal-case tracking-normal text-[#1f2930]',
        )}>
          Message
        </label>
        <textarea
          required
          rows={5}
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
