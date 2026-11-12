import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DisclaimerPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Disclaimer | VOSQ';
  }, []);

  return (
    <div className="pt-28 pb-20">
      <section className="px-4 max-w-4xl mx-auto">
        <div className="liquid-glass rounded-3xl p-8 sm:p-14 border border-white/10 space-y-8">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-3">
              Disclaimer
            </h1>
            <p className="text-muted-foreground text-sm">
              Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="space-y-6 text-sm text-foreground/90 leading-relaxed font-normal">
            <p className="text-base text-white/90">
              Deze disclaimer is van toepassing op het gebruik van deze website en het online platform. Door de website of applicatie te bezoeken en te gebruiken, ga je akkoord met onderstaande bepalingen.
            </p>

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-white pt-3 border-t border-white/10">
                1. Informatieve doeleinden & geen advies
              </h2>
              <p className="text-muted-foreground">
                Alle informatie, visualisaties, dashboards en scenario-berekeningen op dit platform worden met zorg samengesteld. De inhoud is uitsluitend bedoeld voor informatieve en operationele doeleinden. De getoonde data en uitkomsten vormen geen juridisch, fiscaal, financieel of bindend technisch advies.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-white pt-3 border-t border-white/10">
                2. Externe gegevensbronnen
              </h2>
              <p className="text-muted-foreground">
                Het platform koppelt data uit diverse externe bronnen, zoals netbeheerders, energiemarkten, kadastrale registers en gebruikersinput. Hoewel continue nauwkeurigheid wordt nagestreefd, kan geen garantie worden gegeven voor de volledige foutloosheid of ononderbroken beschikbaarheid van externe datastromen.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-white pt-3 border-t border-white/10">
                3. Aansprakelijkheid
              </h2>
              <p className="text-muted-foreground">
                Aan de getoonde berekeningen, grafieken of analyses kunnen geen rechten worden ontleend. Wij aanvaarden geen aansprakelijkheid voor eventuele directe of indirecte schade als gevolg van het gebruik van de website, het platform of beslissingen die daarop zijn gebaseerd.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-white pt-3 border-t border-white/10">
                4. Intellectueel eigendom
              </h2>
              <p className="text-muted-foreground">
                Alle rechten van intellectueel eigendom met betrekking tot de programmatuur, algoritmes, vormgeving, teksten en merken berusten bij de rechtmatige eigenaar. Zonder voorafgaande schriftelijke toestemming is verveelvoudiging of hergebruik niet toegestaan.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-white pt-3 border-t border-white/10">
                5. Vragen & Contact
              </h2>
              <p className="text-muted-foreground">
                Heb je vragen over deze disclaimer of het platform? Neem dan eenvoudig contact met ons op via het{' '}
                <Link to="/demo-aanvragen" className="text-primary hover:underline font-medium">
                  demo- en kennismakingsformulier
                </Link>.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex items-center justify-between">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Terug naar Home</span>
            </Link>
            <span className="text-xs text-muted-foreground font-mono">Real Estate & Energy Intelligence</span>
          </div>
        </div>
      </section>
    </div>
  );
}
