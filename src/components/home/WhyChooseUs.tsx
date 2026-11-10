
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n-config';
import { FlipCard } from '@/components/FlipCard';
import { Heart, BrainCircuit, Syringe, ShieldCheck, Gem } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImagesDict } from '@/lib/placeholder-images';

export default async function WhyChooseUs({ locale }: { locale: Locale }) {
  const dictionary = await getDictionary(locale);
  const reasons = [
    {
      id: 'expertise',
      icon: <BrainCircuit className="h-10 w-10 text-white" strokeWidth={1} />,
      title: dictionary.whyChooseUs.expertise.title,
      description: dictionary.whyChooseUs.expertise.description,
    },
    {
      id: 'technology',
      icon: <Syringe className="h-10 w-10 text-white" strokeWidth={1} />,
      title: dictionary.whyChooseUs.technology.title,
      description: dictionary.whyChooseUs.technology.description,
    },
    {
      id: 'care',
      icon: <Heart className="h-10 w-10 text-white" strokeWidth={1} />,
      title: dictionary.whyChooseUs.care.title,
      description: dictionary.whyChooseUs.care.description,
    },
    {
      id: 'safety',
      icon: <ShieldCheck className="h-10 w-10 text-white" strokeWidth={1} />,
      title: dictionary.whyChooseUs.safety.title,
      description: dictionary.whyChooseUs.safety.description,
    },
    {
      id: 'results',
      icon: <Gem className="h-10 w-10 text-white" strokeWidth={1} />,
      title: dictionary.whyChooseUs.results.title,
      description: dictionary.whyChooseUs.results.description,
    },
  ];

  const firstRowReasons = reasons.slice(0, 3);
  const secondRowReasons = reasons.slice(3);

  return (
    <section className="bg-muted py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-sm font-light uppercase tracking-[0.25em] text-neutral-500 mb-4">
            {dictionary.whyChooseUs.title}
          </h2>
          <p className="mx-auto max-w-2xl text-3xl sm:text-4xl font-light text-neutral-900 tracking-tight">
            {dictionary.whyChooseUs.subtitle}
          </p>
        </div>
        
        <div className="mt-12 space-y-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {firstRowReasons.map((reason, idx) => {
                const reasonImage = PlaceHolderImagesDict[`why-choose-us-${reason.id}`];

                return (
                    <div key={reason.id} className="animate-fade-in-up" style={{ animationDelay: `${idx * 150}ms` }}>
                        <FlipCard
                            className="h-80"
                            frontContent={
                                <div className="relative h-full w-full overflow-hidden group">
                                    {reasonImage && (
                                        <Image
                                            src={reasonImage.imageUrl}
                                            alt={reason.title}
                                            data-ai-hint={reasonImage.imageHint}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-neutral-950/40 transition-opacity duration-500 group-hover:bg-neutral-950/20" />
                                    <div className="relative z-10 flex h-full flex-col justify-end p-8 text-white">
                                        <h3 className="text-sm font-bold uppercase tracking-[0.2em]">{reason.title}</h3>
                                        <div className="mt-4 h-[1px] w-12 bg-white/50" />
                                    </div>
                                </div>
                            }
                            backContent={
                                <div className="flex flex-col items-center justify-center p-10 text-center bg-primary h-full">
                                    <div className="mb-6 opacity-80">{reason.icon}</div>
                                    <p className="text-sm font-light leading-relaxed tracking-wide text-white/90">{reason.description}</p>
                                </div>
                            }
                        />
                    </div>
                )
            })}
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {secondRowReasons.map((reason, idx) => {
                const reasonImage = PlaceHolderImagesDict[`why-choose-us-${reason.id}`];

                return (
                    <div key={reason.id} className="animate-fade-in-up" style={{ animationDelay: `${(idx + 3) * 150}ms` }}>
                        <FlipCard
                            className="h-80"
                            frontContent={
                                <div className="relative h-full w-full overflow-hidden group">
                                    {reasonImage && (
                                        <Image
                                            src={reasonImage.imageUrl}
                                            alt={reason.title}
                                            data-ai-hint={reasonImage.imageHint}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-neutral-950/40 transition-opacity duration-500 group-hover:bg-neutral-950/20" />
                                    <div className="relative z-10 flex h-full flex-col justify-end p-8 text-white">
                                        <h3 className="text-sm font-bold uppercase tracking-[0.2em]">{reason.title}</h3>
                                        <div className="mt-4 h-[1px] w-12 bg-white/50" />
                                    </div>
                                </div>
                            }
                            backContent={
                                <div className="flex flex-col items-center justify-center p-10 text-center bg-primary h-full">
                                    <div className="mb-6 opacity-80">{reason.icon}</div>
                                    <p className="text-sm font-light leading-relaxed tracking-wide text-white/90">{reason.description}</p>
                                </div>
                            }
                        />
                    </div>
                )
            })}
            </div>
        </div>
      </div>
    </section>
  );
}
