import { getPhotosCached } from '@/photo/cache';
import NavClient from './NavClient';
import { NAV_CAPTION, NAV_TITLE } from './config';
import { LANDING_BRAND } from '@/landing/brand';

export default async function Nav() {
  const photos = await getPhotosCached({ limit: 1 }).catch(() => []);
  const navTitle = /\./.test(NAV_TITLE)
    ? LANDING_BRAND.name
    : NAV_TITLE;
  const navCaption = NAV_CAPTION === 'ToDoDescription'
    ? undefined
    : NAV_CAPTION;

  return <NavClient
    navTitle={navTitle}
    navCaption={navCaption}
    animate={photos.length > 0}
  />; 
}
