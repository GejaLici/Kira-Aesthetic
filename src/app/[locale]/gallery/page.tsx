
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n-config';
import { Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const awaitedParams = await params;
  const dictionary = await getDictionary(awaitedParams.locale);
  return {
    title: dictionary.galleryPage.title,
    description: dictionary.galleryPage.subtitle,
  };
}

export default async function GalleryPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto max-w-6xl px-4 pt-40 pb-16 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in-up">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {dictionary.galleryPage.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {dictionary.galleryPage.subtitle}
          </p>
        </div>

        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4 [&>div:not(:first-child)]:mt-5 animate-fade-in-up [animation-delay:200ms]">
            {galleryImages.map((image) => (
                <div key={image.id} className="break-inside-avoid">
                    <Card className="overflow-hidden rounded-none border-none shadow-lg transition-shadow hover:shadow-2xl">
                        <Image
                            src={image.imageUrl}
                            alt={image.description}
                            data-ai-hint={image.imageHint}
                            width={600}
                            height={400}
                            className="h-auto w-full transition-transform duration-1000 hover:scale-105"
                        />
                    </Card>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
}
