/* eslint-disable max-len */

import Image from 'next/image';
import { clsx } from 'clsx/lite';
import { FiCamera, FiMapPin, FiMessageCircle } from 'react-icons/fi';
import LandingContactForm from './LandingContactForm';
import LandingReveal from './LandingReveal';
import { LANDING_CONTENT } from './content';

const landingFontSans = '[font-family:var(--font-landing-sans)]';
const landingFontSerif = '[font-family:var(--font-landing-serif)]';

const sectionClassName = 'px-6 py-24 md:py-32';
const containerClassName = 'mx-auto max-w-6xl';
const eyebrowClassName = clsx(
  landingFontSans,
  'mb-3 text-xs uppercase tracking-[0.25em] text-[#717274]',
);
const headingClassName = clsx(
  landingFontSerif,
  'text-3xl font-medium leading-snug text-[#22282e] md:text-4xl lg:text-5xl',
);
const bodyClassName = clsx(
  landingFontSans,
  'text-base leading-relaxed text-[#717274] md:text-lg',
);

function ScrollCue() {
  return (
    <div className="absolute bottom-10">
      <div className="flex h-10 w-6 animate-bounce items-start justify-center rounded-full border-2 border-white/50 pt-2">
        <div className="h-2 w-1 rounded-full bg-white/70" />
      </div>
    </div>
  );
}

function ServiceIcon({ type }: { type: string }) {
  const Icon = type === 'map' ? FiMapPin : FiCamera;

  return (
    <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#e7d8c5]">
      <Icon className="h-6 w-6 text-[#22282e]" />
    </div>
  );
}

export default function LandingPage() {
  const {
    hero,
    about,
    services,
    gallery,
    testimonial,
    contact,
  } = LANDING_CONTENT;

  return (
    <div className={clsx(
      landingFontSans,
      '-mx-3 overflow-hidden bg-[#fbfaf7] text-[#22282e] lg:-mx-6',
    )}>
      <section id="home" className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 scale-105 animate-[landing-hero-scale_1.8s_ease-out_forwards]">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#22282e]/30 via-[#22282e]/10 to-[#22282e]/60" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <div className={clsx(
            landingFontSans,
            'mb-4 animate-[landing-fade-up_0.8s_ease-out_0.6s_both]',
            'text-sm uppercase tracking-[0.3em] text-white/80',
          )}>
            {hero.eyebrow}
          </div>
          <h1 className={clsx(
            landingFontSerif,
            'animate-[landing-fade-up_0.8s_ease-out_0.8s_both]',
            'text-5xl font-medium leading-tight text-white md:text-7xl lg:text-8xl',
          )}>
            {hero.title}
          </h1>
          <p className={clsx(
            landingFontSans,
            'mt-6 max-w-lg animate-[landing-fade-up_0.8s_ease-out_1.1s_both]',
            'text-lg font-light text-white/90 md:text-xl',
          )}>
            {hero.subtitle}
          </p>
          <div className="animate-[landing-fade-in_1s_ease-out_1.6s_both]">
            <ScrollCue />
          </div>
        </div>
      </section>

      <section id="about" className={sectionClassName}>
        <div className={containerClassName}>
          <div className="grid items-center gap-16 md:grid-cols-2">
            <LandingReveal>
              <p className={eyebrowClassName}>{about.eyebrow}</p>
              <h2 className={headingClassName}>{about.title}</h2>
              <div className={clsx(bodyClassName, 'mt-8 space-y-5')}>
                {about.paragraphs.map(paragraph =>
                  <p key={paragraph}>{paragraph}</p>)}
                <p>
                  {about.guidePrefix}{' '}
                  <a
                    href="https://www.efvga.org.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#22282e] underline underline-offset-4 transition-opacity hover:opacity-70"
                  >
                    Edinburgh Festival Voluntary Guides Association
                  </a>
                  {about.guideSuffix}
                </p>
              </div>
            </LandingReveal>

            <LandingReveal delay={0.2}>
              <div className="overflow-hidden">
                <Image
                  src={about.image.src}
                  alt={about.image.alt}
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </LandingReveal>
          </div>
        </div>
      </section>

      <section id="services" className={clsx(sectionClassName, 'bg-[#f0ebe5]')}>
        <div className={containerClassName}>
          <LandingReveal className="text-center">
            <p className={eyebrowClassName}>{services.eyebrow}</p>
            <h2 className={headingClassName}>{services.title}</h2>
            <p className={clsx(
              bodyClassName,
              'mx-auto mt-6 max-w-2xl',
            )}>
              {services.description}
            </p>
          </LandingReveal>

          <div className="mx-auto mt-16 max-w-2xl space-y-16">
            {services.items.map((service, index) =>
              <LandingReveal
                key={service.title}
                delay={index * 0.15}
                className="text-center"
              >
                <ServiceIcon type={service.type} />
                <h3 className={clsx(
                  landingFontSerif,
                  'text-xl font-medium text-[#22282e] md:text-2xl',
                )}>
                  {service.title}
                </h3>
                <p className={clsx(
                  landingFontSans,
                  'mt-4 text-base leading-relaxed text-[#717274]',
                )}>
                  {service.description}
                </p>
                {'link' in service && service.link &&
                  <a
                    href={service.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={clsx(
                      landingFontSans,
                      [
                        'mt-4 inline-block text-sm text-[#22282e]',
                        'underline underline-offset-4 transition-opacity',
                        'hover:opacity-70',
                      ].join(' '),
                    )}
                  >
                    {service.link.label} →
                  </a>}
              </LandingReveal>)}
          </div>
        </div>
      </section>

      <section id="gallery" className={sectionClassName}>
        <div className={containerClassName}>
          <LandingReveal className="mb-16 text-center">
            <p className={eyebrowClassName}>{gallery.eyebrow}</p>
            <h2 className={headingClassName}>{gallery.title}</h2>
            <p className={clsx(
              bodyClassName,
              'mx-auto mt-6 max-w-2xl',
            )}>
              {gallery.description}
            </p>
          </LandingReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {gallery.images.map((image, index) =>
              <LandingReveal key={image.title} delay={index * 0.15}>
                <div className="group cursor-pointer overflow-hidden transition duration-400 ease-out hover:-translate-y-2">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                  <p className={clsx(
                    landingFontSerif,
                    'mt-4 text-lg text-[#22282e]',
                  )}>
                    {image.title}
                  </p>
                </div>
              </LandingReveal>)}
          </div>
        </div>
      </section>

      <section className={clsx(sectionClassName, 'bg-[#f0ebe5]')}>
        <div className="mx-auto max-w-3xl text-center">
          <LandingReveal>
            <FiMessageCircle className="mx-auto mb-8 h-10 w-10 text-[#717274]/40" />
            <blockquote className={clsx(
              landingFontSerif,
              [
                'text-xl leading-relaxed text-[#22282e] italic',
                'md:text-2xl lg:text-3xl',
              ].join(' '),
            )}>
              {testimonial.text}
            </blockquote>
            <p className={clsx(
              landingFontSans,
              'mt-8 text-sm uppercase tracking-[0.2em] text-[#717274]',
            )}>
              {testimonial.credit}
            </p>
          </LandingReveal>
        </div>
      </section>

      <section id="contact" className={sectionClassName}>
        <div className="mx-auto max-w-xl">
          <LandingReveal className="text-center">
            <p className={eyebrowClassName}>{contact.eyebrow}</p>
            <h2 className={headingClassName}>{contact.title}</h2>
            <p className={clsx(
              landingFontSans,
              'mt-4 text-[#717274]',
            )}>
              {contact.description}
            </p>
          </LandingReveal>

          <LandingReveal delay={0.2} className="mt-12">
            <LandingContactForm />
          </LandingReveal>
        </div>
      </section>
    </div>
  );
}
