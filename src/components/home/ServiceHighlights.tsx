
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n-config';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { services } from '@/lib/services';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImagesDict } from '@/lib/placeholder-images';

export default async function ServiceHighlights({ locale }: { locale: Locale }) {
  const dictionary = await getDictionary(locale);
  
  const categories = services;
  const faceCategory = categories.find(c => c.id === 'face');
  const otherCategories = categories.filter(c => c.id !== 'face');

  return (
    <section className="bg-background py-16 sm:py-32">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-sm font-light uppercase tracking-[0.25em] text-primary mb-4 animate-fade-in-up">
            {dictionary.serviceHighlights.title}
          </h2>
          <p className="mx-auto max-w-2xl text-2xl sm:text-3xl font-light text-neutral-900 tracking-tight animate-fade-in-up [animation-delay:200ms]">
            {dictionary.serviceHighlights.subtitle}
          </p>
        </div>

        <div className="mt-12">
             {/* Desktop layout */}
             <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
                {categories.slice(0, 3).map((category, idx) => {
                    const categoryImage = PlaceHolderImagesDict[`service-${category.id}`];
                    const categoryName = dictionary.serviceCategories[category.nameKey as keyof typeof dictionary.serviceCategories];
                    if (!categoryImage) return null;
                    return (
                        <div key={category.id} className="animate-fade-in-up" style={{ animationDelay: `${idx * 150 + 400}ms` }}>
                             <Card className="group relative flex h-[550px] flex-col justify-end overflow-hidden rounded-none border-none shadow-none transition-all duration-700">
                                <Image
                                  src={categoryImage.imageUrl}
                                  alt={categoryName}
                                  data-ai-hint={categoryImage.imageHint}
                                  fill
                                  className="object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110"
                                />
                                {/* Sophisticated Overlays */}
                                <div className="absolute inset-0 bg-neutral-900/20 transition-colors duration-700 group-hover:bg-neutral-900/40" />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent opacity-80" />
                                
                                <CardContent className="relative z-10 p-10 text-white transition-all duration-700 ease-out group-hover:translate-y-[-10px]">
                                  <h3 className="text-xl font-medium uppercase tracking-[0.15em] mb-6 transition-all duration-700 group-hover:tracking-[0.25em]">
                                      {categoryName}
                                  </h3>
                                  <Link 
                                      href={`/${locale}/services?category=${category.id}`} 
                                      prefetch={false}
                                      className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 transition-all duration-500 hover:text-white group/link"
                                  >
                                      <span className="relative">
                                          {dictionary.serviceHighlights.explore}
                                          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
                                      </span>
                                      <ArrowRight className="ml-3 h-3.5 w-3.5 transition-transform duration-500 group-hover/link:translate-x-2" />
                                  </Link>
                                </CardContent>
                            </Card>
                        </div>
                    )
                })}
                 <div className="lg:col-span-3 grid lg:grid-cols-2 gap-8 mt-8">
                    {categories.slice(3).map((category, idx) => {
                        const categoryImage = PlaceHolderImagesDict[`service-${category.id}`];
                        const categoryName = dictionary.serviceCategories[category.nameKey as keyof typeof dictionary.serviceCategories];
                        if (!categoryImage) return null;
                        return (
                            <div key={category.id} className="animate-fade-in-up" style={{ animationDelay: `${idx * 150 + 800}ms` }}>
                                <Card className="group relative flex h-[450px] flex-col justify-end overflow-hidden rounded-none border-none shadow-none transition-all duration-700">
                                    <Image
                                      src={categoryImage.imageUrl}
                                      alt={categoryName}
                                      data-ai-hint={categoryImage.imageHint}
                                      fill
                                      className="object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110"
                                    />
                                    {/* Sophisticated Overlays */}
                                    <div className="absolute inset-0 bg-neutral-900/20 transition-colors duration-700 group-hover:bg-neutral-900/40" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent opacity-80" />
                                    
                                    <CardContent className="relative z-10 p-10 text-white transition-all duration-700 ease-out group-hover:translate-y-[-10px]">
                                      <h3 className="text-xl font-medium uppercase tracking-[0.15em] mb-6 transition-all duration-700 group-hover:tracking-[0.25em]">
                                          {categoryName}
                                      </h3>
                                      <Link 
                                          href={`/${locale}/services?category=${category.id}`} 
                                          prefetch={false}
                                          className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 transition-all duration-500 hover:text-white group/link"
                                      >
                                          <span className="relative">
                                              {dictionary.serviceHighlights.explore}
                                              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
                                          </span>
                                          <ArrowRight className="ml-3 h-3.5 w-3.5 transition-transform duration-500 group-hover/link:translate-x-2" />
                                      </Link>
                                    </CardContent>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </div>
            
            {/* Mobile Layout */}
            <div className="space-y-6 lg:hidden">
                {faceCategory && (
                     <div className="grid grid-cols-1">
                        {PlaceHolderImagesDict[`service-${faceCategory.id}`] && (
                          <Card className="group relative flex h-[400px] flex-col justify-end overflow-hidden rounded-none border-none shadow-none">
                              <Image
                                  src={PlaceHolderImagesDict[`service-${faceCategory.id}`].imageUrl}
                                  alt={dictionary.serviceCategories[faceCategory.nameKey as keyof typeof dictionary.serviceCategories]}
                                  data-ai-hint={PlaceHolderImagesDict[`service-${faceCategory.id}`].imageHint}
                                  fill
                                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
                              <CardContent className="relative z-10 p-8 text-white">
                                  <h3 className="text-lg font-medium uppercase tracking-[0.15em] mb-4">{dictionary.serviceCategories[faceCategory.nameKey as keyof typeof dictionary.serviceCategories]}</h3>
                                  <Link 
                                      href={`/${locale}/services?category=${faceCategory.id}`} 
                                      prefetch={false}
                                      className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/80"
                                  >
                                      {dictionary.serviceHighlights.explore} <ArrowRight className="ml-2 h-3.5 w-3.5" />
                                  </Link>
                              </CardContent>
                          </Card>
                        )}
                    </div>
                )}
                <div className="grid grid-cols-1 gap-6">
                    {otherCategories.map(category => {
                        const categoryImage = PlaceHolderImagesDict[`service-${category.id}`];
                        const categoryName = dictionary.serviceCategories[category.nameKey as keyof typeof dictionary.serviceCategories];
                        if (!categoryImage) return null;
                        return (
                            <Card key={category.id} className="group relative flex h-[350px] flex-col justify-end overflow-hidden rounded-none border-none shadow-none">
                                <Image
                                  src={categoryImage.imageUrl}
                                  alt={categoryName}
                                  data-ai-hint={categoryImage.imageHint}
                                  fill
                                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
                                <CardContent className="relative z-10 p-8 text-white">
                                <h3 className="text-lg font-medium uppercase tracking-[0.15em] mb-4">
                                    {categoryName}
                                </h3>
                                <Link 
                                    href={`/${locale}/services?category=${category.id}`} 
                                    prefetch={false}
                                    className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/80"
                                >
                                    {dictionary.serviceHighlights.explore} <ArrowRight className="ml-2 h-3.5 w-3.5" />
                                </Link>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </div>
        <div className="mt-20 text-center animate-fade-in-up [animation-delay:1200ms]">
            <Button 
                asChild 
                className="rounded-none border border-primary bg-white px-12 py-8 text-[12px] font-bold uppercase tracking-[0.15em] text-primary transition-all duration-500 hover:bg-primary hover:text-white hover:scale-[1.03] active:scale-95 shadow-md hover:shadow-xl group"
            >
                <Link href={`/${locale}/services`} prefetch={false}>
                    {dictionary.hero.ourServices}
                    <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
