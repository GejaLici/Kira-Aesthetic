
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { PlaceHolderImagesDict, type ImagePlaceholder } from '@/lib/placeholder-images';

interface ResultsCarouselProps {
  title: string;
  imageIds?: string[];
  imageUrls?: string[];
}

export default function ResultsCarousel({ title, imageIds, imageUrls }: ResultsCarouselProps) {
  let images: (ImagePlaceholder | { id: string, imageUrl: string, description: string, imageHint?: string })[] = [];

  if (imageUrls && imageUrls.length > 0) {
    images = imageUrls.map((url, index) => ({
      id: `url-${index}`,
      imageUrl: url,
      description: `Carousel image ${index + 1}`,
      imageHint: "carousel image"
    }));
  } else if (imageIds && imageIds.length > 0) {
    images = imageIds.map(id => PlaceHolderImagesDict[id]).filter(Boolean);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Carousel opts={{ loop: true }} className="w-full">
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem key={image.id}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    data-ai-hint={image.imageHint}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
        </Carousel>
      </CardContent>
    </Card>
  );
}
