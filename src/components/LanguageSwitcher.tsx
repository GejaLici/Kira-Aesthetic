'use client';

import { usePathname, useRouter } from 'next/navigation';
import { i18n, type Locale } from '@/i18n-config';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const pathName = usePathname();
  const router = useRouter();

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const getCurrentLocale = () => {
    if (!pathName) return i18n.defaultLocale;
    const segments = pathName.split('/');
    return (segments[1] as Locale) || i18n.defaultLocale;
  }

  const handleValueChange = (locale: string) => {
    router.push(redirectedPathName(locale as Locale));
  };

  return (
    <Select onValueChange={handleValueChange} defaultValue={getCurrentLocale()}>
      <SelectTrigger className="h-9 w-auto gap-2 border-none bg-transparent px-1 text-[11px] font-bold uppercase tracking-[0.1em] text-neutral-900 shadow-none focus:ring-0 transition-all duration-300 hover:text-neutral-500 group">
        <Globe className="h-3.5 w-3.5 transition-transform duration-500 group-hover:rotate-12" />
        <SelectValue placeholder="EN" />
      </SelectTrigger>
      <SelectContent align="end" className="min-w-[80px] rounded-none border-neutral-100 bg-white shadow-xl animate-in fade-in-0 zoom-in-95">
        {i18n.locales.map((locale) => (
          <SelectItem 
            key={locale} 
            value={locale}
            className="text-[11px] font-semibold tracking-wider focus:bg-neutral-50 focus:text-neutral-900 cursor-pointer transition-colors"
          >
            {locale.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
