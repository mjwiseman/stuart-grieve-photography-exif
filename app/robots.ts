import type { MetadataRoute } from 'next';
import { BASE_URL } from '@/app/config';
import { PATH_SITEMAP } from '@/app/path';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    ...BASE_URL && {
      sitemap: `${BASE_URL}${PATH_SITEMAP}`,
    },
  };
}
