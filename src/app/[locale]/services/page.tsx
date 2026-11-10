import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n-config';
import { services } from '@/lib/services';
import ServicesPageClient from './services-client';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  return {
    title: dictionary.servicesPage.title,
    description: dictionary.servicesPage.subtitle,
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return (
    <Suspense fallback={
        <div className="container mx-auto max-w-7xl px-4 py-32 text-center">
            <Skeleton className="h-12 w-64 mx-auto mb-8 bg-neutral-200" />
            <Skeleton className="h-6 w-96 mx-auto mb-16 bg-neutral-100" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-3 space-y-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Skeleton key={i} className="h-12 w-full bg-neutral-100" />
                    ))}
                </div>
                <div className="lg:col-span-9 space-y-8">
                    <Skeleton className="h-[400px] w-full bg-neutral-200" />
                    <div className="grid grid-cols-3 gap-8">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <Skeleton key={i} className="h-64 w-full bg-neutral-100" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    }>
      <ServicesPageClient
        locale={locale}
        dictionary={dictionary}
        services={services}
      />
    </Suspense>
  );
}
