
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n-config';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function Hero({ locale }: { locale: Locale }) {
  const dictionary = await getDictionary(locale);

  return (
    <section className="relative h-screen w-full overflow-hidden text-white">
      <video
        className="absolute left-0 top-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        key="/videos/hero-background.mp4"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 flex h-full flex-col items-center justify-center bg-black/40 text-center px-4">
        <div className="container mx-auto max-w-7xl">
            <h1 className="font-headline text-3xl font-light tracking-[0.25em] text-white sm:text-5xl md:text-6xl lg:text-7xl uppercase animate-fade-in-up">
                {dictionary.hero.title}
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-neutral-100 sm:text-xl font-light tracking-wide animate-fade-in-up [animation-delay:200ms]">
                {dictionary.hero.subtitle}
            </p>
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up [animation-delay:400ms]">
              <Button asChild size="lg" className="rounded-none border border-white bg-white text-primary px-12 py-8 text-[12px] font-bold uppercase tracking-[0.2em] transition-all hover:bg-transparent hover:text-white hover:scale-105 active:scale-95 shadow-xl">
                  <Link href={`/${locale}/services`} prefetch={false}>{dictionary.hero.ourServices}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none border-white bg-transparent text-white px-12 py-8 text-[12px] font-bold uppercase tracking-[0.2em] transition-all hover:bg-white hover:text-primary hover:scale-105 active:scale-95">
                  <Link href={`/${locale}/contact`} prefetch={false}>{dictionary.hero.bookNow}</Link>
              </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
