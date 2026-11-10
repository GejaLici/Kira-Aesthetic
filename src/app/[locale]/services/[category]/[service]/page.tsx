import { notFound } from 'next/navigation';
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n-config';
import { services, type ServiceContent } from '@/lib/services';
import Link from 'next/link';
import { ChevronRight, Clock, ShieldCheck, Heart, Zap, ChevronsRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImagesDict } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ResultsCarousel from '@/components/shared/ResultsCarousel';

async function getServiceContent(serviceId: string, locale: Locale): Promise<ServiceContent | null> {
  // Use a more predictable sequential fallback strategy
  const attempts = [
    // 1. Current locale
    `@/content/services/${locale}/${serviceId}.ts`,
    // 2. English fallback for specific service
    `@/content/services/en/${serviceId}.ts`,
    // 3. Absolute generic fallback
    `@/content/services/en/default-content.ts`
  ];

  for (const path of attempts) {
    try {
      // Dynamic imports with template literals in Next.js/Webpack/Turbopack 
      // can be slow if the path is too generic. We've limited the depth here.
      let module;
      if (path.includes(`/${locale}/`)) {
        module = await import(`@/content/services/${locale}/${serviceId}.ts`);
      } else if (path.includes('/en/default')) {
        module = await import(`@/content/services/en/default-content.ts`);
      } else {
        module = await import(`@/content/services/en/${serviceId}.ts`);
      }
      
      if (module && module.default) return module.default;
    } catch (e) {
      // Silently fail to next attempt
    }
  }
  return null;
}

export default async function ServicePage({ params }: { params: Promise<{ locale: Locale, category: string, service: string }> }) {
  const awaitedParams = await params;
  const { locale, category: categoryId, service: serviceId } = awaitedParams;
  
  // Parallel fetch for better performance
  const [dictionary, content] = await Promise.all([
    getDictionary(locale),
    getServiceContent(serviceId, locale)
  ]);

  const category = services.find((c) => c.id === categoryId);
  const service = category?.subCategories.flatMap(sc => sc.services).find(s => s.id === serviceId);

  if (!category || !service || !content || !dictionary) {
    notFound();
  }

  const { description = [], benefits = [], quickFacts } = content;
  const serviceName = dictionary.services?.[service.nameKey as keyof typeof dictionary.services] || service.id;
  const serviceImage = PlaceHolderImagesDict[service.image];
  
  const defaultPageHeadings = [
      { id: 'about-procedure', title: dictionary.servicePage?.aboutTheProcedure || 'About' },
      { id: 'benefits-results', title: dictionary.servicePage?.benefitsResults || 'Benefits' },
      { id: 'consultation-recovery', title: dictionary.servicePage?.consultationRecovery || 'Recovery' }
  ];

  const pageHeadings = content.sections ? content.sections.map(s => ({id: s.id, title: s.title})) : defaultPageHeadings;

  return (
    <>
      <div className="relative h-96 w-full overflow-hidden">
        {serviceImage && (
            <Image
                src={serviceImage.imageUrl}
                alt={serviceName}
                data-ai-hint={serviceImage.imageHint}
                fill
                className="object-cover"
                priority
            />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
                    {serviceName}
                </h1>
            </div>
        </div>
      </div>

      <div className="bg-muted">
        <div className="container mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center text-sm text-muted-foreground">
            <Link href={`/${locale}/services`} className="transition-colors hover:text-primary" prefetch={false}>
              {dictionary.header?.services || 'Services'}
            </Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <span className="font-medium text-foreground">{serviceName}</span>
          </div>

          <Card className="mb-12 bg-primary/10">
            <CardContent className="grid grid-cols-2 gap-6 p-6 sm:grid-cols-4">
              <div className="flex items-center gap-3">
                <Clock className="h-8 w-8 flex-shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-sm">{dictionary.servicePage?.procedureTime || 'Time'}</h4>
                  <p className="text-xs text-muted-foreground">{quickFacts.procedureTime}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-8 w-8 flex-shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-sm">{dictionary.servicePage?.anesthesia || 'Anesthesia'}</h4>
                  <p className="text-xs text-muted-foreground">{quickFacts.anesthesia}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="h-8 w-8 flex-shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-sm">{dictionary.servicePage?.recoveryTime || 'Recovery'}</h4>
                  <p className="text-xs text-muted-foreground">{quickFacts.recoveryTime}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="h-8 w-8 flex-shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-sm">{dictionary.servicePage?.results || 'Results'}</h4>
                  <p className="text-xs text-muted-foreground">{quickFacts.results}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <main className="lg:col-span-2 space-y-8">
              {content.sections ? (
                 content.sections.map(section => (
                    <Card key={section.id} id={section.id} className="scroll-mt-24">
                        <CardHeader>
                            <CardTitle className="font-headline text-3xl text-primary">{section.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-lg max-w-none dark:prose-invert"
                            dangerouslySetInnerHTML={{ __html: section.content }}
                        />
                    </Card>
                 ))
              ) : (
                <>
                    <Card id="about-procedure" className="scroll-mt-24">
                        <CardHeader>
                        <CardTitle className="font-headline text-3xl text-primary">{dictionary.servicePage?.aboutTheProcedure || 'About the Procedure'}</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-lg max-w-none dark:prose-invert">
                        {description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                        </CardContent>
                    </Card>

                    <Card id="benefits-results" className="scroll-mt-24">
                        <CardHeader>
                        <CardTitle className="font-headline text-3xl text-primary">{dictionary.servicePage?.benefitsResults || 'Benefits'}</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-lg max-w-none dark:prose-invert">
                            <p>{dictionary.servicePage?.benefitsDescription || ''}</p>
                            <ul>
                                {benefits.map((benefit, index) => (
                                    <li key={index}>{benefit}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <Card id="consultation-recovery" className="scroll-mt-24">
                        <CardHeader>
                        <CardTitle className="font-headline text-3xl text-primary">{dictionary.servicePage?.consultationRecovery || 'Consultation and Recovery'}</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-lg max-w-none dark:prose-invert">
                            <p>{dictionary.servicePage?.consultationRecoveryDescription || ''}</p>
                        </CardContent>
                    </Card>
                </>
              )}
            </main>

            <aside className="lg:col-span-1 lg:sticky top-24 self-start space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-lg">{dictionary.servicePage?.onThisPage || 'On this page'}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pageHeadings.map((heading) => (
                        <li key={heading.id}>
                            <Link 
                                href={`#${heading.id}`}
                                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group"
                            >
                                <ChevronsRight className="h-4 w-4 mr-2 text-primary/50 transition-transform group-hover:text-primary group-hover:translate-x-1"/>
                                {heading.title}
                            </Link>
                        </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardTitle className="font-headline text-xl">{dictionary.servicePage?.readyToLearnMore || 'Ready to learn more?'}</CardTitle>
                <p className="text-muted-foreground text-sm my-4">{dictionary.servicePage?.scheduleConsultation || ''}</p>
                <Button asChild className="w-full rounded-none border border-primary bg-white py-6 text-[12px] font-bold uppercase tracking-[0.1em] text-primary transition-all duration-500 hover:bg-primary/5 shadow-sm">
                    <Link href={`/${locale}/contact`} prefetch={false}>{dictionary.header?.bookConsultation || 'Book a Consultation'}</Link>
                </Button>
              </Card>
              {service.resultImageIds && service.resultImageIds.length > 0 && (
                <ResultsCarousel
                  title={dictionary.resultsCarousel?.title || 'Results'}
                  imageIds={service.resultImageIds}
                />
              )}
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
