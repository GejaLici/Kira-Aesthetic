
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n-config';
import { Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImagesDict } from '@/lib/placeholder-images';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const awaitedParams = await params;
  const dictionary = await getDictionary(awaitedParams.locale);
  return {
    title: dictionary.aboutPage.title,
  };
}

export default async function AboutPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  const teamImage = PlaceHolderImagesDict['about-us-main'];
  const clinicImage = PlaceHolderImagesDict['about-us-clinic'];

  const values = [
    { title: dictionary.aboutPage.valuesExcellenceTitle, text: dictionary.aboutPage.valuesExcellenceText },
    { title: dictionary.aboutPage.valuesCareTitle, text: dictionary.aboutPage.valuesCareText },
    { title: dictionary.aboutPage.valuesInnovationTitle, text: dictionary.aboutPage.valuesInnovationText },
    { title: dictionary.aboutPage.valuesTransparencyTitle, text: dictionary.aboutPage.valuesTransparencyText },
    { title: dictionary.aboutPage.valuesSocialTitle, text: dictionary.aboutPage.valuesSocialText },
  ];

  const reasons = [
    { title: dictionary.aboutPage.whyTeamTitle, text: dictionary.aboutPage.whyTeamText },
    { title: dictionary.aboutPage.whySafeTitle, text: dictionary.aboutPage.whySafeText },
    { title: dictionary.aboutPage.whyPersonalTitle, text: dictionary.aboutPage.whyPersonalText },
    { title: dictionary.aboutPage.whyValueTitle, text: dictionary.aboutPage.whyValueText },
    { title: dictionary.aboutPage.whyExpTitle, text: dictionary.aboutPage.whyExpText },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="container mx-auto max-w-6xl px-4 pt-32 pb-16 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in-up">
          <h1 className="font-headline text-3xl font-light uppercase tracking-[0.25em] text-neutral-900 sm:text-5xl">
            {dictionary.aboutPage.title}
          </h1>
          <div className="mx-auto mt-6 h-px w-24 bg-primary/20" />
        </div>

        {/* Our Story */}
        <div className="mt-24 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="animate-fade-in-up [animation-delay:200ms]">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#C2A58F] mb-6">
               {dictionary.aboutPage.storyTitle}
            </h2>
            <p className="text-xl font-light leading-relaxed text-neutral-600 italic border-l-2 border-primary/20 pl-8">
              {dictionary.aboutPage.storyText}
            </p>
          </div>
          <div className="relative h-[500px] w-full overflow-hidden rounded-none shadow-2xl animate-fade-in-up [animation-delay:400ms]">
             <Image
              src={teamImage.imageUrl}
              alt={teamImage.description}
              data-ai-hint={teamImage.imageHint}
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-32 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="bg-neutral-50 p-12 animate-fade-in-up">
                <h3 className="font-headline text-2xl font-light uppercase tracking-widest text-primary mb-6">{dictionary.aboutPage.missionTitle}</h3>
                <p className="text-lg font-light leading-relaxed text-neutral-500">{dictionary.aboutPage.missionText}</p>
            </div>
            <div className="bg-neutral-950 p-12 text-white animate-fade-in-up [animation-delay:200ms]">
                <h3 className="font-headline text-2xl font-light uppercase tracking-widest text-[#C2A58F] mb-6">{dictionary.aboutPage.visionTitle}</h3>
                <p className="text-lg font-light leading-relaxed opacity-80">{dictionary.aboutPage.visionText}</p>
            </div>
        </div>

        {/* Values Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-sm font-light uppercase tracking-[0.3em] text-neutral-400">{dictionary.aboutPage.valuesTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, idx) => (
                <div key={idx} className="p-8 border border-neutral-100 hover:border-primary/20 transition-all duration-500 group">
                    <div className="h-8 w-8 rounded-full bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                        <Check className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className="font-headline text-lg font-medium uppercase tracking-wider text-neutral-900 mb-4">{val.title}</h4>
                    <p className="text-sm font-light leading-relaxed text-neutral-500">{val.text}</p>
                </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-32 bg-[#FAF9F6] p-12 lg:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
                <h2 className="font-headline text-3xl font-light uppercase tracking-[0.15em] text-neutral-900 leading-tight">
                    {dictionary.aboutPage.whyTitle}
                </h2>
                <div className="mt-8 h-px w-24 bg-primary/20" />
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                {reasons.map((reason, idx) => (
                    <div key={idx}>
                        <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C2A58F] mb-3">{reason.title}</h4>
                        <p className="text-sm font-light leading-relaxed text-neutral-500">{reason.text}</p>
                    </div>
                ))}
            </div>
          </div>
        </div>

        {/* Commitment */}
        <div className="mt-32 text-center max-w-3xl mx-auto">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary mb-8">{dictionary.aboutPage.commitmentTitle}</h2>
            <p className="text-2xl sm:text-3xl font-light text-neutral-900 tracking-tight leading-snug">
                {dictionary.aboutPage.commitmentText}
            </p>
        </div>

        {/* Call to Action */}
        <div className="mt-24 border-t border-neutral-100 pt-24 text-center">
            <h3 className="font-headline text-2xl font-light uppercase tracking-widest text-neutral-900 mb-6">{dictionary.aboutPage.contactTitle}</h3>
            <p className="max-w-2xl mx-auto text-lg font-light text-neutral-500 mb-12">
                {dictionary.aboutPage.contactText}
            </p>
            <Button 
                asChild 
                className="rounded-none border border-primary bg-white px-12 py-8 text-[12px] font-bold uppercase tracking-[0.15em] text-primary transition-all duration-500 hover:bg-primary/5 hover:scale-[1.03] active:scale-95 shadow-md hover:shadow-xl"
            >
                <Link href={`/${locale}/contact`}>
                    Schedule a Consultation
                </Link>
            </Button>
        </div>

      </div>
    </div>
  );
}
