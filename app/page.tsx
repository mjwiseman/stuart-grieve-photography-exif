import LandingPage from '@/landing/LandingPage';
import type { Metadata } from 'next';
import { ABSOLUTE_PATH_HOME_IMAGE } from '@/app/path';

export const maxDuration = 60;

const title = 'Tikus Photography | Scottish Landscape Photography';
const description = [
  'Scottish landscape photography shaped by weather, place, and',
  'atmosphere, with a quieter view of Scotland beyond the obvious',
  'locations.',
].join(' ');

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
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
