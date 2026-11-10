import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n-config';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';
import { PlaceHolderImagesDict } from '@/lib/placeholder-images';

export default async function Testimonials({ locale }: { locale: Locale }) {
  const dictionary = await getDictionary(locale);

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-sm font-light uppercase tracking-[0.25em] text-neutral-500 mb-4">
                {dictionary.testimonials.title}
            </h2>
            <p className="mx-auto max-w-2xl text-3xl sm:text-4xl font-light text-neutral-900 tracking-tight">
                {dictionary.testimonials.subtitle}
            </p>
        </div>
        
        <Carousel
          opts={{ align: 'start', loop: true }}
          className="mx-auto mt-16 w-full"
        >
          <CarouselContent className="-ml-4 sm:-ml-8">
            {testimonials.map((testimonial, idx) => {
               const avatarImage = PlaceHolderImagesDict[testimonial.avatar];
               return (
                <CarouselItem key={testimonial.id} className="pl-4 sm:pl-8 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full animate-fade-in-up" style={{ animationDelay: `${idx * 150}ms` }}>
                    <Card className="flex flex-col h-full rounded-none border-none bg-neutral-50 shadow-none transition-all duration-500 hover:bg-neutral-100">
                      <CardContent className="flex flex-1 flex-col p-10">
                         <div className="mb-8">
                            <Quote className="h-8 w-8 text-primary/20" />
                         </div>
                        <blockquote className="flex-grow text-[15px] font-light leading-relaxed tracking-wide text-neutral-700 italic">
                          "{testimonial.comment}"
                        </blockquote>
                        <div className="mt-12 flex items-center gap-5 border-t border-neutral-200 pt-8">
                            <Avatar className="h-12 w-12 rounded-none">
                                {avatarImage && (
                                  <AvatarImage src={avatarImage.imageUrl} alt={testimonial.name} data-ai-hint={avatarImage.imageHint} className="object-cover" />
                                )}
                                <AvatarFallback className="rounded-none bg-primary/10 text-primary text-xs">{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-900">{testimonial.name}</p>
                                <p className="text-[10px] uppercase tracking-widest text-neutral-400 mt-1">{testimonial.location}</p>
                            </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
            )})}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-12">
             <CarouselPrevious className="static translate-y-0 rounded-none border border-primary bg-white text-primary hover:bg-primary/5 transition-all h-12 w-12" />
             <CarouselNext className="static translate-y-0 rounded-none border border-primary bg-white text-primary hover:bg-primary/5 transition-all h-12 w-12" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}