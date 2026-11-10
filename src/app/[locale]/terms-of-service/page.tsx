import { Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/dictionary';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const dictionary = await getDictionary((await params).locale);
  return {
    title: `${dictionary.footer.termsOfService} | KIRA AESTHETIC`,
  };
}

export default async function TermsOfServicePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-headline text-3xl font-light uppercase tracking-[0.25em] text-neutral-900 sm:text-5xl">
            {dictionary.footer.termsOfService}
          </h1>
          <div className="mx-auto mt-6 h-px w-24 bg-primary/20" />
        </div>

        <div className="prose prose-neutral max-w-none dark:prose-invert">
          <p className="text-lg text-neutral-600 mb-12 font-light leading-relaxed">
            Welcome to KIRA AESTHETIC. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions. These terms govern the relationship between KIRA AESTHETIC and you as a visitor or patient.
          </p>

          <section className="mb-12 group">
            <h2 className="font-headline text-xl font-bold uppercase tracking-wider text-primary mb-6 flex items-center gap-4">
              <span className="text-neutral-300 font-light">01</span>
              <span>Medical Disclaimer</span>
            </h2>
            <div className="pl-10 border-l border-neutral-100 ml-3 text-neutral-500 space-y-4 font-light leading-relaxed">
              <p>The content provided on this website is for general informational purposes only and does not constitute medical advice, diagnosis, or treatment.</p>
              <p>A formal consultation with one of our qualified medical professionals is mandatory before making any decisions regarding aesthetic, dental, or medical treatments. Never disregard professional medical advice or delay seeking it because of something you have read on this website.</p>
            </div>
          </section>

          <section className="mb-12 group">
            <h2 className="font-headline text-xl font-bold uppercase tracking-wider text-primary mb-6 flex items-center gap-4">
              <span className="text-neutral-300 font-light">02</span>
              <span>Appointments & Cancellations</span>
            </h2>
            <div className="pl-10 border-l border-neutral-100 ml-3 text-neutral-500 space-y-4 font-light leading-relaxed">
              <p>Appointments are subject to availability and clinical confirmation. We value our specialists' time and our patients' journeys.</p>
              <p>We require a minimum of 48 hours' notice for any appointment cancellations or rescheduling. Failure to provide adequate notice may result in a cancellation fee or the forfeiture of your deposit, where applicable.</p>
            </div>
          </section>

          <section className="mb-12 group">
            <h2 className="font-headline text-xl font-bold uppercase tracking-wider text-primary mb-6 flex items-center gap-4">
              <span className="text-neutral-300 font-light">03</span>
              <span>Professional Fees & Payments</span>
            </h2>
            <div className="pl-10 border-l border-neutral-100 ml-3 text-neutral-500 space-y-4 font-light leading-relaxed">
              <p>Treatment costs are individualized and will be finalized during your personal consultation. All fees must be settled according to the payment schedule provided by our administrative team.</p>
              <p>Prices listed on the website (if any) are indicative and subject to change based on the clinical complexity of the case.</p>
            </div>
          </section>

          <section className="mb-12 group">
            <h2 className="font-headline text-xl font-bold uppercase tracking-wider text-primary mb-6 flex items-center gap-4">
              <span className="text-neutral-300 font-light">04</span>
              <span>Intellectual Property</span>
            </h2>
            <div className="pl-10 border-l border-neutral-100 ml-3 text-neutral-500 space-y-4 font-light leading-relaxed">
              <p>All content, including text, original photography, logo designs, and clinical protocols presented on this website, are the exclusive property of KIRA AESTHETIC and are protected by international copyright laws.</p>
              <p>Unauthorized reproduction or distribution of any materials from this site is strictly prohibited.</p>
            </div>
          </section>

          <section className="mb-12 group">
            <h2 className="font-headline text-xl font-bold uppercase tracking-wider text-primary mb-6 flex items-center gap-4">
              <span className="text-neutral-300 font-light">05</span>
              <span>Limitation of Liability</span>
            </h2>
            <div className="pl-10 border-l border-neutral-100 ml-3 text-neutral-500 space-y-4 font-light leading-relaxed">
              <p>KIRA AESTHETIC shall not be held liable for any direct, indirect, or consequential damages resulting from the use of this website or the information contained herein.</p>
              <p>While we strive for absolute clinical accuracy, we do not guarantee that the website is free from technical errors or omissions.</p>
            </div>
          </section>

          <div className="mt-24 pt-8 border-t border-neutral-100 text-[10px] uppercase tracking-widest text-neutral-400">
            Terms effective as of: {new Date().toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
      </div>
    </div>
  );
}
