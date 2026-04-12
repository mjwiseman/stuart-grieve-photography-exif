import { Playfair_Display, Source_Sans_3 } from 'next/font/google';

export const landingSerif = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-landing-serif',
  display: 'swap',
});

export const landingSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-landing-sans',
  display: 'swap',
});
