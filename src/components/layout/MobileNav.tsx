'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Locale } from '@/i18n-config';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

type NavLink = {
    href: string;
    label: string;
}

export function MobileNav({
  locale,
  navLinks,
  bookConsultationText
}: {
  locale: Locale;
  navLinks: NavLink[];
  bookConsultationText: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Close menu on route change
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="lg:hidden">
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="h-10 w-10 text-neutral-900 hover:bg-neutral-50">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] border-l-neutral-100 bg-white p-0">
          <SheetHeader className="p-6 border-b border-neutral-100">
            <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
            <Link href={`/${locale}`} onClick={handleLinkClick} className="flex items-center gap-3" prefetch={false}>
              <Logo locale={locale} />
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-900">Kira Aesthetic</span>
            </Link>
          </SheetHeader>
          <div className="flex flex-col h-full py-10 px-6">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={`/${locale}${link.href}`}
                  onClick={handleLinkClick}
                  prefetch={false}
                  className={cn(
                    "text-sm font-semibold uppercase tracking-[0.15em] transition-colors",
                    pathname === `/${locale}${link.href}` || (link.href === '/' && pathname === `/${locale}`)
                      ? "text-neutral-900"
                      : "text-neutral-400 hover:text-neutral-900"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pb-10">
              <Button asChild className="w-full rounded-none border border-primary bg-white py-6 text-[11px] font-bold uppercase tracking-[0.1em] text-primary transition-all duration-500 hover:bg-primary/5 active:scale-[0.98] shadow-sm">
                <Link href={`/${locale}/contact`} onClick={handleLinkClick} prefetch={false}>
                  {bookConsultationText}
                </Link>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
