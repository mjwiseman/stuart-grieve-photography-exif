/* eslint-disable max-len */

import { PATH_GALLERY_HOME, pathForPhoto } from '@/app/path';
import type { Photo } from '@/photo';
import Image from 'next/image';
import Link from 'next/link';
import { clsx } from 'clsx/lite';

const landingFontSans = '[font-family:var(--font-landing-sans)]';
const landingFontSerif = '[font-family:var(--font-landing-serif)]';

export default function LandingPhotoPreview({
  photos,
  count,
}: {
  photos: Photo[]
  count: number
}) {
  const featuredPhotos = photos.slice(0, 3);

  if (featuredPhotos.length === 0) {
    return null;
  }

  return (
    <section className="-mx-3 bg-[#f2ebe2] px-5 py-20 sm:px-6 sm:py-24 lg:-mx-6 lg:px-6 lg:py-28">
      <div className="mx-auto max-w-[1180px]">
        <div className="mx-auto max-w-3xl text-center">
          <div className={clsx(
            landingFontSans,
            'text-[0.74rem] uppercase tracking-[0.26em] text-[#776c5f]',
          )}>
            From the archive
          </div>
          <h2 className={clsx(
            landingFontSerif,
            'mt-4 text-[2.3rem] leading-[1.02] text-[#18120f]',
            'sm:text-[3rem] lg:text-[3.3rem]',
          )}>
            A wider body of work across Scotland.
          </h2>
          <p className={clsx(
            landingFontSans,
            'mx-auto mt-5 max-w-2xl text-[1.02rem] leading-8 text-[#554b42]',
          )}>
            The archive moves from storm-bound harbours to winter hills, quiet lochs, and smaller studies made over repeated visits. Browse the full edit for the broader sequence.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {featuredPhotos.map(photo =>
            <Link
              key={photo.id}
              href={pathForPhoto({ photo })}
              className="group block"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#d8cebf] shadow-[0_22px_54px_rgba(34,24,16,0.08)]">
                <Image
                  src={photo.url}
                  alt={photo.title || 'Landscape photograph by Stuart Grieve'}
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                  sizes="(min-width: 768px) 30vw, 100vw"
                  {...photo.blurData && {
                    placeholder: 'blur',
                    blurDataURL: photo.blurData,
                  }}
                />
              </div>
              <div className="pt-4">
                <div className={clsx(
                  landingFontSerif,
                  'text-[1.45rem] leading-tight text-[#1a1410]',
                )}>
                  {photo.title || 'Untitled landscape'}
                </div>
                <div className={clsx(
                  landingFontSans,
                  'pt-2 text-[0.76rem] uppercase tracking-[0.2em] text-[#7f7367]',
                )}>
                  View photograph
                </div>
              </div>
            </Link>)}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={PATH_GALLERY_HOME}
            className={clsx(
              landingFontSans,
              'inline-flex items-center justify-center rounded-full',
              'bg-[#1e262b] px-6 py-3 text-[0.92rem] font-semibold text-white',
              'transition hover:bg-[#29353c]',
            )}
          >
            Browse all {count.toLocaleString()} photographs
          </Link>
        </div>
      </div>
    </section>
  );
}
