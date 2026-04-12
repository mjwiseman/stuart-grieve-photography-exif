import LandingPage from '@/landing/LandingPage';
import type { Metadata } from 'next';
import { ABSOLUTE_PATH_HOME_IMAGE } from '@/app/path';

export const maxDuration = 60;

const title = 'Tikus Photography | Stuart Grieve Photography';
const description = [
  'Scottish landscape photography by Stuart Grieve, presented as Tikus',
  'Photography: quiet views of Scotland, commissions, guided tours, and photo',
  'archive.',
].join(' ');

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title,
    description,
    type: 'website',
    url: '/',
    images: ABSOLUTE_PATH_HOME_IMAGE,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    images: ABSOLUTE_PATH_HOME_IMAGE,
  },
};

export default async function HomePage() {
  return <LandingPage />;
}
