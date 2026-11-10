import { Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/dictionary';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const dictionary = await getDictionary((await params).locale);
  return {
    title: `${dictionary.footer.privacyPolicy} | KIRA AESTHETIC`,
  };
}

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-headline text-3xl font-light uppercase tracking-[0.25em] text-neutral-900 sm:text-5xl">
            {dictionary.footer.privacyPolicy}
          </h1>
          <div className="mx-auto mt-6 h-px w-24 bg-primary/20" />
        </div>
        
        <div className="prose prose-neutral max-w-none dark:prose-invert">
          <p className="text-lg text-neutral-600 mb-12 font-light leading-relaxed">
            At KIRA AESTHETIC, we prioritize your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect your personal data when you visit and use our website.
          </p>

          <section className="mb-12 group">
            <h2 className="font-headline text-xl font-bold uppercase tracking-wider text-primary mb-6 flex items-center gap-4">
              <span className="text-neutral-300 font-light">01</span>
              <span>Information We Collect</span>
            </h2>
            <div className="space-y-6 text-neutral-500 pl-10 border-l border-neutral-100 ml-3">
              <div>
                <h3 className="text-base font-bold uppercase tracking-wide text-neutral-800 mb-3">Personal Information</h3>
                <p className="font-light leading-relaxed">We may collect personal information such as your name, email address, phone number, and other relevant details when you voluntarily provide them through contact forms, information requests, booking requests, or other interactions with our website.</p>
              </div>
              <div>
                <h3 className="text-base font-bold uppercase tracking-wide text-neutral-800 mb-3">Technical Information</h3>
                <p className="font-light leading-relaxed">We may also collect technical and non-personal information, such as your browser type, device type, operating system, IP address, and other technical information related to your use of our website.</p>
              </div>
            </div>
          </section>

          <section className="mb-12 group">
            <h2 className="font-headline text-xl font-bold uppercase tracking-wider text-primary mb-6 flex items-center gap-4">
              <span className="text-neutral-300 font-light">02</span>
              <span>How We Use Your Information</span>
            </h2>
            <div className="pl-10 border-l border-neutral-100 ml-3">
              <p className="text-neutral-500 mb-6 font-light leading-relaxed">The information we collect may be used to:</p>
              <ul className="space-y-4 text-neutral-500 list-none p-0">
                {[
                  "Provide, operate, and maintain our website and services;",
                  "Respond to your questions, requests, and messages;",
                  "Manage contact requests and booking inquiries;",
                  "Improve the user experience and functionality of our website;",
                  "Analyze how our website is used;",
                  "Send you communications, updates, or information about our services where permitted and where you have provided the necessary consent."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-light">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary/40 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mb-12 group">
            <h2 className="font-headline text-xl font-bold uppercase tracking-wider text-primary mb-6 flex items-center gap-4">
              <span className="text-neutral-300 font-light">03</span>
              <span>Cookies and Tracking Technologies</span>
            </h2>
            <div className="pl-10 border-l border-neutral-100 ml-3 text-neutral-500 space-y-4 font-light leading-relaxed">
              <p>Our website may use cookies and similar technologies to improve the user experience, understand how the website is used, and improve its functionality.</p>
              <p>You can configure your browser to refuse cookies or notify you when cookies are being used. However, disabling certain cookies may affect the functionality of some parts of the website.</p>
              <p>If analytics tools or third-party services such as Google Analytics, Microsoft Clarity, or similar tools are used, they may collect information about website traffic and usage in accordance with their respective privacy policies.</p>
            </div>
          </section>

          <section className="mb-12 group">
            <h2 className="font-headline text-xl font-bold uppercase tracking-wider text-primary mb-6 flex items-center gap-4">
              <span className="text-neutral-300 font-light">04</span>
              <span>Sharing Your Information</span>
            </h2>
            <div className="pl-10 border-l border-neutral-100 ml-3 text-neutral-500 space-y-4 font-light leading-relaxed">
              <p>KIRA AESTHETIC does not sell, trade, or rent users' personal identification information.</p>
              <p>We may share information with trusted third-party service providers who assist us in operating and maintaining our website or providing our services. These providers are required to handle your information confidentially and only for the purposes for which it was provided.</p>
              <p>We may disclose personal information when required by law or when necessary to protect the rights, safety, and legitimate interests of KIRA AESTHETIC, our users, or other parties.</p>
            </div>
          </section>

          <section className="mb-12 group">
            <h2 className="font-headline text-xl font-bold uppercase tracking-wider text-primary mb-6 flex items-center gap-4">
              <span className="text-neutral-300 font-light">05</span>
              <span>Data Security</span>
            </h2>
            <div className="pl-10 border-l border-neutral-100 ml-3 text-neutral-500 space-y-4 font-light leading-relaxed">
              <p>We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.</p>
              <p>However, no method of transmission over the Internet or electronic storage is completely secure. While we strive to use appropriate tools and practices to protect your data, we cannot guarantee the absolute security of information transmitted or stored electronically.</p>
            </div>
          </section>

          <section className="mb-12 group">
            <h2 className="font-headline text-xl font-bold uppercase tracking-wider text-primary mb-6 flex items-center gap-4">
              <span className="text-neutral-300 font-light">06</span>
              <span>Your Data Protection Rights</span>
            </h2>
            <div className="pl-10 border-l border-neutral-100 ml-3 text-neutral-500 font-light leading-relaxed">
              <p className="mb-6">Depending on applicable law, you may have the right to:</p>
              <ul className="space-y-4 list-none p-0 mb-6">
                {[
                  "Request access to your personal data;",
                  "Request correction of inaccurate data;",
                  "Request deletion of your personal data where permitted by law;",
                  "Request restriction of the processing of your data;",
                  "Object to the processing of your data in certain circumstances."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary/40 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">If you are located in the European Economic Area, you may also have additional rights under applicable data protection legislation, including the GDPR.</p>
              <p className="mt-4">To exercise your rights or ask questions about your personal data, please contact KIRA AESTHETIC using our official contact email address.</p>
            </div>
          </section>

          <section className="mb-12 group">
            <h2 className="font-headline text-xl font-bold uppercase tracking-wider text-primary mb-6 flex items-center gap-4">
              <span className="text-neutral-300 font-light">07</span>
              <span>Changes to This Privacy Policy</span>
            </h2>
            <div className="pl-10 border-l border-neutral-100 ml-3 text-neutral-500 space-y-4 font-light leading-relaxed">
              <p>KIRA AESTHETIC reserves the right to update or modify this Privacy Policy at any time.</p>
              <p>When changes are made, the updated version will be published on this page and, where appropriate, the last updated date will also be changed.</p>
              <p>We encourage you to review this page periodically to stay informed about how we protect your personal information.</p>
            </div>
          </section>

          <section className="mb-12 group">
            <h2 className="font-headline text-xl font-bold uppercase tracking-wider text-primary mb-6 flex items-center gap-4">
              <span className="text-neutral-300 font-light">08</span>
              <span>Contact Us</span>
            </h2>
            <div className="pl-10 border-l border-neutral-100 ml-3 text-neutral-500 space-y-6 font-light leading-relaxed">
              <p>If you have any questions about this Privacy Policy or how KIRA AESTHETIC collects and uses personal data, please contact us through the official KIRA AESTHETIC contact email address.</p>
              <div className="inline-block px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-none">
                <span className="block text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-1">Official Enquiry Channel</span>
                <a href="mailto:contact@kiraaesthetic.com" className="text-primary font-bold tracking-wide hover:underline">contact@kiraaesthetic.com</a>
              </div>
            </div>
          </section>

          <div className="mt-24 pt-8 border-t border-neutral-100 text-[10px] uppercase tracking-widest text-neutral-400">
            Last updated: {new Date().toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
      </div>
    </div>
  );
}
