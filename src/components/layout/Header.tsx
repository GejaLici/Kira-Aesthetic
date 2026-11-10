
'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import type { Dictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n-config';
import { Logo } from '@/components/Logo';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { MobileNav } from './MobileNav';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Header({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: dictionary.header.home },
    { href: '/services', label: dictionary.header.services },
    { href: '/about', label: dictionary.header.about },
    { href: '/gallery', label: dictionary.header.gallery },
    { href: '/blog', label: dictionary.header.blog },
    { href: '/faq', label: dictionary.header.faq },
    { href: '/contact', label: dictionary.header.contact },
  ];

  const isHomePage = pathname === `/${locale}`;
  const shouldBeTransparent = isHomePage && !isScrolled;

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out h-20 flex items-center",
        shouldBeTransparent 
          ? "bg-transparent border-transparent" 
          : "bg-white border-b border-neutral-100 shadow-sm"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link 
          href={`/${locale}`} 
          className="flex items-center gap-2 group transition-all duration-500 hover:scale-[1.02]" 
          prefetch={false}
        >
          <Logo locale={locale} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = link.href === '/' 
              ? pathname === `/${locale}` 
              : pathname === `/${locale}${link.href}` || pathname?.startsWith(`/${locale}${link.href}/`);

            return (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                prefetch={false}
                className={cn(
                  "text-[11px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 relative py-2 group",
                  shouldBeTransparent
                    ? "text-white/80 hover:text-white"
                    : isActive ? "text-neutral-900" : "text-neutral-500 hover:text-primary"
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute bottom-0 left-0 h-[1px] transition-all duration-300 ease-out",
                  shouldBeTransparent ? "bg-white" : "bg-primary",
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            );
          })}
        </nav>
        
        <div className="hidden items-center gap-6 lg:flex">
          <div className={cn("transition-colors", shouldBeTransparent ? "invert brightness-0" : "")}>
            <LanguageSwitcher />
          </div>
          <Button 
            asChild 
            className={cn(
              "rounded-none border px-8 py-6 text-[12px] font-bold uppercase tracking-[0.1em] transition-all duration-500 shadow-sm",
              shouldBeTransparent
                ? "border-white bg-white text-primary hover:bg-transparent hover:text-white"
                : "border-primary bg-white text-primary hover:bg-primary/5"
            )}
          >
            <Link href={`/${locale}/contact`} prefetch={false}>
              {dictionary.header.bookConsultation}
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-3 lg:hidden">
          <div className={cn("transition-colors", shouldBeTransparent ? "invert brightness-0" : "")}>
            <LanguageSwitcher />
          </div>
          <div className={cn(shouldBeTransparent ? "text-white" : "text-neutral-900")}>
            <MobileNav 
              locale={locale} 
              navLinks={navLinks} 
              bookConsultationText={dictionary.header.bookConsultation} 
            />
          </div>
        </div>
      </div>
    </header>
  );
}
