
import { Locale } from '@/i18n-config';
import Hero from '@/components/home/Hero';
import ServiceHighlights from '@/components/home/ServiceHighlights';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import ContactSection from '@/components/home/ContactSection';
import { getDictionary } from '@/lib/dictionary';
import GalleryTeaser from '@/components/home/GalleryTeaser';

export default async function HomePage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  
  return (
    <>
      <Hero locale={locale} />
      <ServiceHighlights locale={locale} />
      <WhyChooseUs locale={locale} />
      <Testimonials locale={locale} />
      <GalleryTeaser locale={locale} />
      <ContactSection dictionary={dictionary} source="Homepage" />
    </>
  );
}
