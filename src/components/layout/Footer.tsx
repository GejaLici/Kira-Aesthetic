import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n-config';
import { Logo } from '@/components/Logo';
import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export default async function Footer({ locale }: { locale: Locale }) {
  const dictionary = await getDictionary(locale);
  const navLinks = [
    { href: '/', label: dictionary.header.home },
    { href: '/services', label: dictionary.header.services },
    { href: '/about', label: dictionary.header.about },
    { href: '/gallery', label: dictionary.header.gallery },
    { href: '/blog', label: dictionary.header.blog },
    { href: '/faq', label: dictionary.header.faq },
    { href: '/contact', label: dictionary.header.contact },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 py-20 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          
          {/* Brand Identity */}
          <div className="lg:col-span-5 space-y-8 animate-fade-in-up">
            <Link href={`/${locale}`} className="flex items-center gap-4 group" prefetch={false}>
                <Logo locale={locale} />
                <span className="text-lg font-light tracking-[0.25em] uppercase text-white transition-colors group-hover:text-white/80">
                  Kira Aesthetic
                </span>
            </Link>
            <p className="max-w-md text-[13px] font-light leading-relaxed tracking-wide text-secondary-foreground/60">
              {dictionary.footer.description}
            </p>
            <div className="flex gap-6 pt-4">
                <a href="#" className="p-3 border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all rounded-none"><Instagram className="h-4 w-4" /></a>
                <a href="#" className="p-3 border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all rounded-none"><Facebook className="h-4 w-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 animate-fade-in-up [animation-delay:200ms]">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white mb-8">{dictionary.footer.quickLinks}</h3>
            <ul className="grid grid-cols-1 gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={`/${locale}${link.href}`} 
                    prefetch={false}
                    className="text-[12px] font-light tracking-wide text-secondary-foreground/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="lg:col-span-4 animate-fade-in-up [animation-delay:400ms]">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white mb-8">{dictionary.footer.contactUs}</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-1" />
                <span className="text-[12px] font-light leading-relaxed tracking-wide text-secondary-foreground/60">{dictionary.footer.address}</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-4 w-4 text-primary" />
                <a href={`tel:${dictionary.footer.phone}`} className="text-[12px] font-light tracking-wide text-secondary-foreground/60 hover:text-white transition-colors">
                  {dictionary.footer.phone}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-4 w-4 text-primary" />
                <a href={`mailto:${dictionary.footer.email}`} className="text-[12px] font-light tracking-wide text-secondary-foreground/60 hover:text-white transition-colors">
                  {dictionary.footer.email}
                </a>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6 animate-fade-in-up [animation-delay:600ms]">
          <p className="text-[10px] uppercase tracking-[0.2em] text-secondary-foreground/40">&copy; {new Date().getFullYear()} Kira Aesthetic. Luxury Care Everywhere.</p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.15em] font-bold text-secondary-foreground/40">
            <Link href={`/${locale}/privacy`} className="hover:text-white transition-colors">
              {dictionary.footer.privacyPolicy}
            </Link>
            <Link href={`/${locale}/terms-of-service`} className="hover:text-white transition-colors">
              {dictionary.footer.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
