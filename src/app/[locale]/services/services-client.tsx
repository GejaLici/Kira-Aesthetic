
'use client';

import { useState, useEffect, useTransition } from 'react';
import { useSearchParams } from 'next/navigation';
import { Locale } from '@/i18n-config';
import type { ServiceCategory, Service } from '@/lib/services';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImagesDict } from '@/lib/placeholder-images';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

const ServiceCard = ({
  service,
  locale,
  categoryId,
  dictionary,
  index
}: {
  service: Service;
  locale: Locale;
  categoryId: string;
  dictionary: any;
  index: number;
}) => {
    const serviceImage = PlaceHolderImagesDict[service.image];
    const serviceName = dictionary.services?.[service.nameKey as keyof typeof dictionary.services] || service.id;
  return (
    <Card 
        className="group flex animate-fade-in-up flex-col overflow-hidden rounded-none border border-neutral-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none"
        style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'backwards' }}
    >
        {serviceImage && (
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={serviceImage.imageUrl}
                    alt={serviceName}
                    data-ai-hint={serviceName}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
            </div>
        )}
      <CardHeader className="flex-1 p-8">
        <CardTitle className="text-lg font-medium tracking-tight text-neutral-900">{serviceName}</CardTitle>
      </CardHeader>
      <CardContent className="p-8 pt-0">
        <Link
          href={`/${locale}/services/${categoryId}/${service.id}`}
          prefetch={false}
          className="group/link inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-primary transition-all duration-300 hover:text-neutral-900"
        >
          {dictionary.blogPage?.readMore || 'Read More'} 
          <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default function ServicesPageClient({
  locale,
  dictionary,
  services,
}: {
  locale: Locale;
  dictionary: any;
  services: ServiceCategory[];
}) {
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [isClient, setIsClient] = useState(false);

  const getCategoryFromUrl = () => {
    const categoryFromUrl = searchParams.get('category');
    return services.find(c => c.id === categoryFromUrl) || services[0];
  }
  
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>(services[0]);

  useEffect(() => {
    setIsClient(true);
    const categoryInUrl = getCategoryFromUrl();
    if (categoryInUrl.id !== activeCategory.id) {
        setActiveCategory(categoryInUrl);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  useEffect(() => {
      if (isClient) {
          const categoryInUrl = getCategoryFromUrl();
            if (categoryInUrl.id !== activeCategory.id) {
                setActiveCategory(categoryInUrl);
            }
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, isClient]);

  const handleCategoryChange = (categoryId: string) => {
    const newCategory = services.find((c) => c.id === categoryId);
    if (newCategory) {
        startTransition(() => {
            setActiveCategory(newCategory);
        });
    }
  };
  
  if (!isClient) {
    return null;
  }

  const categoryName = dictionary.serviceCategories?.[activeCategory.nameKey as keyof typeof dictionary.serviceCategories] || activeCategory.id;
  const categoryImage = PlaceHolderImagesDict[`service-${activeCategory.id}`];

  return (
    <div className="bg-neutral-50/30 min-h-screen">
      <div className="container mx-auto max-w-7xl px-4 pt-32 pb-24 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
            <h1 className="font-headline text-3xl font-light uppercase tracking-[0.25em] text-neutral-900 sm:text-5xl">
                {dictionary.servicesPage?.title || 'Services'}
            </h1>
            <div className="mx-auto mt-6 h-px w-24 bg-primary/20" />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Navigation Sidebar */}
          <aside className="lg:col-span-3">
            <div className="sticky top-32 space-y-2 hidden lg:block">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400 mb-6 pl-4">Categories</h3>
              {services.map((navCategory) => {
                const navCategoryName = dictionary.serviceCategories?.[navCategory.nameKey as keyof typeof dictionary.serviceCategories] || navCategory.id;
                const isActive = activeCategory.id === navCategory.id;
                
                return (
                    <button
                        key={navCategory.id}
                        onClick={() => handleCategoryChange(navCategory.id)}
                        className={cn(
                            "w-full text-left px-4 py-3 text-[12px] font-bold uppercase tracking-[0.15em] transition-all duration-300",
                            isActive 
                            ? "bg-primary text-white shadow-md" 
                            : "text-neutral-500 hover:text-primary hover:bg-white"
                        )}
                    >
                        {navCategoryName}
                    </button>
                )
              })}
            </div>

            {/* Mobile Select */}
            <div className="lg:hidden mb-8">
              <Select onValueChange={handleCategoryChange} defaultValue={activeCategory.id}>
                <SelectTrigger className="w-full h-14 rounded-none border-neutral-200 bg-white text-[11px] font-bold uppercase tracking-[0.15em]">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((navCategory) => (
                    <SelectItem key={navCategory.id} value={navCategory.id} className="text-[11px] font-bold uppercase tracking-[0.15em]">
                       {dictionary.serviceCategories?.[navCategory.nameKey as keyof typeof dictionary.serviceCategories] || navCategory.id}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-9">
            <div 
              key={activeCategory.id}
              className={cn(
                "transition-all duration-500",
                isPending ? "opacity-50" : "opacity-100"
              )}
            >
              {/* Category Hero */}
              <div className="relative mb-0 h-64 w-full overflow-hidden shadow-sm">
                {categoryImage && (
                  <Image
                    src={categoryImage.imageUrl}
                    alt={categoryName}
                    data-ai-hint={categoryName}
                    fill
                    className="object-cover"
                    priority
                  />
                )}
                <div className="absolute inset-0 bg-neutral-900/40" />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <h2 className="font-headline text-4xl font-light uppercase tracking-[0.3em] text-white text-center sm:text-6xl">
                    {categoryName}
                  </h2>
                </div>
              </div>

              {/* Sub-categories */}
              <div className="space-y-2 mt-4">
                {activeCategory.subCategories.map((subCategory) => {
                  const subCategoryName = dictionary.services?.[subCategory.nameKey as keyof typeof dictionary.services] || subCategory.id;
                  return (
                    <div key={subCategory.id}>
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="font-headline text-xl font-medium uppercase tracking-[0.2em] text-primary">
                            {subCategoryName}
                        </h3>
                        <div className="h-px flex-1 bg-neutral-200" />
                      </div>
                      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
                        {subCategory.services.map((service, index) => (
                          <ServiceCard
                            key={service.id}
                            service={service}
                            locale={locale}
                            categoryId={activeCategory.id}
                            dictionary={dictionary}
                            index={index}
                          />
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
