
import type { Metadata } from 'next';
import { i18n, type Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/dictionary';
import { Toaster } from "@/components/ui/toaster"
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Chatbot } from '@/components/chatbot/Chatbot';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import '@/app/globals.css';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const awaitedParams = await params;
  const dictionary = await getDictionary(awaitedParams.locale);
  return {
    title: {
      default: 'Kira Aesthetic',
      template: '%s | Kira Aesthetic',
    },
    description: 'Premier clinic for aesthetic, dental, and medical treatments.',
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  
  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <FirebaseClientProvider>
          <div className="flex min-h-screen flex-col">
            <Header locale={locale} dictionary={dictionary} />
            <main className="flex-grow">{children}</main>
            <Footer locale={locale} />
          </div>
          <Chatbot dictionary={dictionary} />
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
