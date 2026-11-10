import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n-config';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default async function GalleryTeaser({ locale }: { locale: Locale }) {
  const dictionary = await getDictionary(locale);
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-')).slice(0, 5);

  return (
    <section className="bg-background py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-sm font-light uppercase tracking-[0.25em] text-neutral-500 mb-4">
                {dictionary.galleryPage.title}
            </h2>
            <p className="mx-auto max-w-2xl text-3xl sm:text-4xl font-light text-neutral-900 tracking-tight">
                {dictionary.galleryPage.subtitle}
            </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[900px]">
            {/* Main feature image */}
            {galleryImages[4] && (
              <div className="md:col-span-7 h-[500px] md:h-full animate-fade-in-up">
                   <Card className="h-full overflow-hidden rounded-none border-none shadow-none group">
                      <div className="relative h-full">
                          <Image 
                              className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                              src={galleryImages[4].imageUrl} 
                              alt={galleryImages[4].description} 
                              data-ai-hint={galleryImages[4].imageHint} 
                              fill 
                          />
                          <div className="absolute inset-0 bg-neutral-950/10 transition-opacity duration-500 group-hover:bg-transparent" />
                      </div>
                  </Card>
              </div>
            )}

            {/* Side column */}
            <div className="md:col-span-5 grid grid-cols-2 md:grid-cols-1 gap-6">
                {galleryImages[0] && (
                  <div className="h-[300px] md:h-[45%] animate-fade-in-up [animation-delay:200ms]">
                      <Card className="h-full overflow-hidden rounded-none border-none shadow-none group">
                          <div className="relative h-full">
                              <Image className="object-cover transition-transform duration-1000 group-hover:scale-110" src={galleryImages[0].imageUrl} alt={galleryImages[0].description} data-ai-hint={galleryImages[0].imageHint} fill />
                          </div>
                      </Card>
                  </div>
                )}
                {galleryImages[1] && (
                  <div className="h-[300px] md:h-[55%] animate-fade-in-up [animation-delay:400ms]">
                      <Card className="h-full overflow-hidden rounded-none border-none shadow-none group">
                          <div className="relative h-full">
                              <Image className="object-cover transition-transform duration-1000 group-hover:scale-110" src={galleryImages[1].imageUrl} alt={galleryImages[1].description} data-ai-hint={galleryImages[1].imageHint} fill />
                          </div>
                      </Card>
                  </div>
                )}
            </div>
        </div>

        <div className="mt-20 text-center animate-fade-in-up [animation-delay:600ms]">
            <Button 
                asChild 
                className="rounded-none border border-primary bg-white px-12 py-7 text-[12px] font-bold uppercase tracking-[0.15em] text-primary transition-all duration-500 hover:bg-primary/5 hover:scale-[1.03] active:scale-95 shadow-md hover:shadow-xl group"
            >
                <Link href={`/${locale}/gallery`} prefetch={false}>
                    View Collection
                    <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}