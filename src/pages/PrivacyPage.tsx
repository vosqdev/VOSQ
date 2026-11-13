import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/i18n';

export function PrivacyPage() {
  const { isEn } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = isEn ? 'Privacy Policy | VOSQ' : 'Privacyverklaring | VOSQ';
  }, [isEn]);

  const formattedDate = new Date().toLocaleDateString(isEn ? 'en-US' : 'nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="pt-28 pb-20">
      <section className="px-4 max-w-4xl mx-auto">
        <div className="liquid-glass rounded-3xl p-8 sm:p-14 border border-white/10 space-y-8">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-3">
              {isEn ? 'Privacy Policy' : 'Privacyverklaring'}
            </h1>
            <p className="text-muted-foreground text-sm">
              {isEn ? 'Last updated:' : 'Laatst bijgewerkt:'} {formattedDate}
            </p>
          </div>

          <div className="space-y-6 text-sm text-foreground/90 leading-relaxed font-normal">
            <p className="text-base text-white/90">
              {isEn
                ? 'We attach great importance to protecting personal data and safeguarding the confidentiality of our business users’ real estate and energy data. In this policy, we concisely and transparently explain what data is processed and for what purpose.'
                : 'Wij hechten grote waarde aan de bescherming van persoonsgegevens en de vertrouwelijkheid van vastgoed- en energiedata van onze zakelijke gebruikers. In deze verklaring lichten we kort en transparant toe welke gegevens worden verwerkt en met welk doel.'}
            </p>

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-white pt-3 border-t border-white/10">
                {isEn ? '1. What data is processed?' : '1. Welke gegevens worden verwerkt?'}
              </h2>
              <p className="text-muted-foreground">
                {isEn
                  ? 'Only data strictly necessary for operating the platform and responding to demo or contact inquiries:'
                  : 'Uitsluitend noodzakelijke gegevens voor het functioneren van het platform en het beantwoorden van demo- of contactverzoeken:'}
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
                <li>
                  {isEn
                    ? 'Business contact details: name, business email address, phone number, and organization name;'
                    : 'Zakelijke contactgegevens: naam, zakelijk e-mailadres, telefoonnummer en organisatienaam;'}
                </li>
                <li>
                  {isEn
                    ? 'Account and login credentials of authorized platform users;'
                    : 'Account- en inloggegevens van geautoriseerde platformgebruikers;'}
                </li>
                <li>
                  {isEn
                    ? 'Submitted real estate and energy parameters (such as contract volumes, EAN codes, or connection capacities);'
                    : 'Ingevoerde vastgoed- en energieparameters (zoals contractvolumes, EAN-codes of aansluitcapaciteiten);'}
                </li>
                <li>
                  {isEn
                    ? 'Anonymized technical data to ensure application security and optimal operation.'
                    : 'Geanonimiseerde technische data voor de beveiliging en optimale werking van de applicatie.'}
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-white pt-3 border-t border-white/10">
                {isEn ? '2. Purposes of processing' : '2. Doeleinden van de verwerking'}
              </h2>
              <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
                <li>
                  {isEn
                    ? 'Arranging and conducting product demonstrations or introductory calls;'
                    : 'Het organiseren en uitvoeren van demonstraties of kennismakingsgesprekken;'}
                </li>
                <li>
                  {isEn
                    ? 'Delivering, securing, and maintaining the cloud software;'
                    : 'Het leveren, beveiligen en onderhouden van de cloud-software;'}
                </li>
                <li>
                  {isEn
                    ? 'Reliably running scenario analyses on behalf of the user.'
                    : 'Het betrouwbaar uitvoeren van scenario-analyses in opdracht van de gebruiker.'}
                </li>
              </ul>
              <p className="text-muted-foreground pt-1">
                {isEn
                  ? 'Data is never sold or provided to third parties for commercial purposes.'
                  : 'Gegevens worden nooit doorverkocht of aan derden verstrekt voor commerciële doeleinden.'}
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-white pt-3 border-t border-white/10">
                {isEn ? '3. Security and storage' : '3. Beveiliging en opslag'}
              </h2>
              <p className="text-muted-foreground">
                {isEn
                  ? 'All data is processed and securely stored within the European Economic Area (EEA) in certified data centers using modern encryption standards (TLS and AES-256).'
                  : 'Alle data wordt verwerkt en veilig opgeslagen binnen de Europese Economische Ruimte (EER) in gecertificeerde datacenters met moderne encryptiestandaarden (TLS en AES-256).'}
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-white pt-3 border-t border-white/10">
                {isEn ? '4. Your rights' : '4. Uw rechten'}
              </h2>
              <p className="text-muted-foreground">
                {isEn ? (
                  <>
                    Under the General Data Protection Regulation (GDPR), you have the right to access, rectify, or delete your personal data. Simply reach out via the{' '}
                    <Link to="/demo-aanvragen" className="text-primary hover:underline font-medium">
                      request and contact form
                    </Link>.
                  </>
                ) : (
                  <>
                    Conform de Algemene Verordening Gegevensbescherming (AVG/GDPR) hebt u recht op inzage, correctie of verwijdering van uw persoonsgegevens. Neem hiervoor eenvoudig contact met ons op via het{' '}
                    <Link to="/demo-aanvragen" className="text-primary hover:underline font-medium">
                      aanvraag- en contactformulier
                    </Link>.
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex items-center justify-between">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>{isEn ? 'Back to Home' : 'Terug naar Home'}</span>
            </Link>
            <span className="text-xs text-muted-foreground font-mono">
              {isEn ? 'GDPR Compliant' : 'AVG / GDPR Compliant'}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
