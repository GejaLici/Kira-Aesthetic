
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n-config';
import { Metadata } from 'next';
import ContactSection from '@/components/home/ContactSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, MapPin } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const awaitedParams = await params;
  const dictionary = await getDictionary(awaitedParams.locale);
  return {
    title: dictionary.contactPage.title,
    description: dictionary.contactPage.subtitle,
  };
}

export default async function ContactPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return (
    <div className="bg-muted">
        <div className="container mx-auto max-w-6xl px-4 pt-32 pb-16 sm:px-6 lg:px-8">
            <div className="text-center">
                <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    {dictionary.contactPage.title}
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                    {dictionary.contactPage.subtitle}
                </p>
            </div>
        </div>
      
        <div className="pb-16 sm:pb-24">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <ContactSection dictionary={dictionary} source="Contact Page" />
                    <div className="space-y-8">
                        <Card className="shadow-xl">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                                    <Clock className="h-6 w-6 text-primary"/>
                                    {dictionary.contactPage.officeHours}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-muted-foreground">
                                <p>{dictionary.contactPage.mondayFriday}</p>
                                <p>{dictionary.contactPage.saturday}</p>
                                <p>{dictionary.contactPage.sunday}</p>
                            </CardContent>
                        </Card>
                         <Card className="shadow-xl">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                    {dictionary.contactPage.location}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="aspect-video w-full">
                                <iframe
                                    className="h-full w-full rounded-md border-0"
                                    loading="lazy"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.610234241999!2d-73.987849684594!3d40.74844097932832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e192a40e3a02!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1684325725515!5m2!1sen!2sus"
                                ></iframe>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
