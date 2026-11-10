import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;

export const PlaceHolderImagesDict: Record<string, ImagePlaceholder> = 
  data.placeholderImages.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {} as Record<string, ImagePlaceholder>);
