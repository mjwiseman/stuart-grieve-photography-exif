import { GRID_HOMEPAGE_ENABLED, USER_DEFAULT_SORT_OPTIONS } from '@/app/config';
import { NULL_CATEGORY_DATA } from '@/category/data';
import { getDataForCategoriesCached } from '@/category/cache';
import { FEED_META_QUERY_OPTIONS, getFeedQueryOptions } from '@/feed';
import { generateOgImageMetaForPhotos } from '@/photo';
import { getPhotosMetaCached } from '@/photo/cache';
import { getPhotos } from '@/photo/db/query';
import PhotoFullPage from '@/photo/PhotoFullPage';
import PhotoGridPage from '@/photo/PhotoGridPage';
import PhotosEmptyState from '@/photo/PhotosEmptyState';
import { cache } from 'react';
import { Metadata } from 'next/types';
import { PATH_GALLERY_HOME } from '@/app/path';

const getGalleryHomePhotosCached = cache(() => getPhotos(getFeedQueryOptions({
  isGrid: GRID_HOMEPAGE_ENABLED,
})));

export async function generatePhotoGalleryHomeMetadata(): Promise<Metadata> {
  const photos = await getGalleryHomePhotosCached()
    .catch(() => []);
  const title = 'Photos | Tikus Photography by Stuart Grieve';
  const description = [
    'Browse the Tikus Photography archive by Stuart Grieve, featuring',
    'Scottish landscape photographs, camera details, locations, and tagged',
    'photo sets.',
  ].join(' ');
  const photoMeta = generateOgImageMetaForPhotos(photos);
  return {
    title,
    description,
    alternates: {
      canonical: PATH_GALLERY_HOME,
    },
    openGraph: {
      ...(photoMeta.openGraph ?? {}),
      title,
      description,
      type: 'website',
      url: PATH_GALLERY_HOME,
    },
    twitter: {
      ...(photoMeta.twitter ?? {}),
      title,
      description,
    },
  };
}

export default async function PhotoGalleryHomePage() {
  const [
    photos,
    photosCount,
    photosCountWithExcludes,
    categories,
  ] = await Promise.all([
    getGalleryHomePhotosCached()
      .catch(() => []),
    getPhotosMetaCached(FEED_META_QUERY_OPTIONS)
      .then(({ count }) => count)
      .catch(() => 0),
    getPhotosMetaCached()
      .then(({ count }) => count)
      .catch(() => 0),
    GRID_HOMEPAGE_ENABLED
      ? getDataForCategoriesCached()
      : NULL_CATEGORY_DATA,
  ]);

  return (
    photos.length > 0
      ? GRID_HOMEPAGE_ENABLED
        ? <PhotoGridPage
          {...{
            photos,
            photosCount,
            photosCountWithExcludes,
            ...USER_DEFAULT_SORT_OPTIONS,
            ...categories,
          }}
        />
        : <PhotoFullPage {...{
          photos,
          photosCount,
          ...USER_DEFAULT_SORT_OPTIONS,
        }} />
      : <PhotosEmptyState />
  );
}
