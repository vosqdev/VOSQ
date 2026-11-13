import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/i18n';

export function DisclaimerPage() {
  const { isEn } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Disclaimer | VOSQ';
  }, []);

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
              Disclaimer
            </h1>
            <p className="text-muted-foreground text-sm">
              {isEn ? 'Last updated:' : 'Laatst bijgewerkt:'} {formattedDate}
            </p>
          </div>

          <div className="space-y-6 text-sm text-foreground/90 leading-relaxed font-normal">
            <p className="text-base text-white/90">
              {isEn
                ? 'This disclaimer applies to the use of this website and the online platform. By accessing and using the website or application, you agree to the provisions below.'
                : 'Deze disclaimer is van toepassing op het gebruik van deze website en het online platform. Door de website of applicatie te bezoeken en te gebruiken, gaat u akkoord met onderstaande bepalingen.'}
            </p>

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-white pt-3 border-t border-white/10">
                {isEn
                  ? '1. Informational purposes & no binding advice'
                  : '1. Informatieve doeleinden & geen bindend advies'}
              </h2>
              <p className="text-muted-foreground">
                {isEn
                  ? 'The information on this website is intended solely to gauge interest and to give interested parties the opportunity to explore the platform. The information provided on this website is general in nature. All information, visualizations, indicative quickscans, data-driven analyses, and scenario explorations on this platform and website are compiled with care. The content is intended as support, but does not replace professional evaluation or formal legal, tax, financial, or technical advice.'
                  : 'De informatie op deze website is uitsluitend bedoeld om de belangstelling te peilen en om geïnteresseerden de gelegenheid te geven zich hierop te oriënteren. De op deze website opgenomen informatie is algemeen van aard. Alle informatie, visualisaties, indicatieve quickscans, datagedreven analyses en scenarioverkenningen op dit platform en website worden met zorg samengesteld. De inhoud is bedoeld ter ondersteuning, maar vervangt geen professionele beoordeling of definitief juridisch, fiscaal, financieel of technisch advies.'}
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-white pt-3 border-t border-white/10">
                {isEn ? '2. External data sources' : '2. Externe gegevensbronnen'}
              </h2>
              <p className="text-muted-foreground">
                {isEn
                  ? 'The platform connects data from various information sources, such as distribution system operators, energy markets, owner registries, and user input. While continuous accuracy is pursued, no guarantee can be provided as to the complete absence of errors or uninterrupted availability of internal or external data streams.'
                  : 'Het platform koppelt data uit diverse informatie bronnen, zoals netbeheerders, energiemarkten, eigenaren registers en gebruikersinput. Hoewel continue nauwkeurigheid wordt nagestreefd, kan geen garantie worden gegeven voor de volledige foutloosheid of ononderbroken beschikbaarheid van interne of externe datastromen.'}
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-white pt-3 border-t border-white/10">
                {isEn ? '3. Liability' : '3. Aansprakelijkheid'}
              </h2>
              <p className="text-muted-foreground">
                {isEn
                  ? 'No rights can be derived from the displayed information, calculations, charts, or analyses. We accept no liability for any direct or indirect damage resulting from the use of the website, the platform, or decisions based thereon.'
                  : 'Aan de getoonde informatie, berekeningen, grafieken of analyses kunnen geen rechten worden ontleend. Wij aanvaarden geen aansprakelijkheid voor eventuele directe of indirecte schade als gevolg van het gebruik van de website, het platform of beslissingen die daarop zijn gebaseerd.'}
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-white pt-3 border-t border-white/10">
                {isEn ? '4. Intellectual property' : '4. Intellectueel eigendom'}
              </h2>
              <p className="text-muted-foreground">
                {isEn
                  ? 'All intellectual property rights relating to the software, algorithms, design, copy, and trademarks belong to the rightful owner. Reproduction or reuse without prior written consent is prohibited.'
                  : 'Alle rechten van intellectueel eigendom met betrekking tot de programmatuur, algoritmes, vormgeving, teksten en merken berusten bij de rechtmatige eigenaar. Zonder voorafgaande schriftelijke toestemming is verveelvoudiging of hergebruik niet toegestaan.'}
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-white pt-3 border-t border-white/10">
                {isEn ? '5. Questions & Contact' : '5. Vragen & Contact'}
              </h2>
              <p className="text-muted-foreground">
                {isEn ? (
                  <>
                    Do you have questions about this disclaimer or the platform? Easily reach out via the{' '}
                    <Link to="/demo-aanvragen" className="text-primary hover:underline font-medium">
                      demo and introduction form
                    </Link>.
                  </>
                ) : (
                  <>
                    Hebt u vragen over deze disclaimer of het platform? Neem dan eenvoudig contact met ons op via het{' '}
                    <Link to="/demo-aanvragen" className="text-primary hover:underline font-medium">
                      demo- en kennismakingsformulier
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
            <span className="text-xs text-muted-foreground font-mono">Real Estate & Energy Intelligence</span>
          </div>
        </div>
      </section>
    </div>
  );
}
