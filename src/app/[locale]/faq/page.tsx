
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n-config';
import { Metadata } from 'next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ContactSection from '@/components/home/ContactSection';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const awaitedParams = await params;
  const dictionary = await getDictionary(awaitedParams.locale);
  return {
    title: dictionary.faqPage.title,
    description: dictionary.faqPage.subtitle,
  };
}

export default async function FaqPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  const faqs = dictionary.faqPage.faqs || [];

  const contactDictionary = {
    ...dictionary,
    contactForm: {
      ...dictionary.contactForm,
      title: dictionary.faqPage.contactTitle,
      subtitle: dictionary.faqPage.contactSubtitle,
    }
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto max-w-4xl px-4 pt-40 pb-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {dictionary.faqPage.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {dictionary.faqPage.subtitle}
          </p>
        </div>

        <div className="mt-16">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq: { id: string; question: string; answer: string; }) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-neutral-100">
                <AccordionTrigger className="text-left text-lg font-semibold text-neutral-900 hover:text-neutral-700 transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-neutral-600 font-light leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <ContactSection dictionary={contactDictionary} source="FAQ Page"/>
    </div>
  );
}
