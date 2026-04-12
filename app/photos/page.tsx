import PhotoGalleryHomePage, {
  generatePhotoGalleryHomeMetadata,
} from '@/photo/PhotoGalleryHomePage';

export const dynamic = 'force-static';
export const maxDuration = 60;

export const generateMetadata = generatePhotoGalleryHomeMetadata;

export default PhotoGalleryHomePage;
