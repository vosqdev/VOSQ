import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Privacyverklaring | VOSQ';
  }, []);

  return (
    <div className="pt-28 pb-20">
      <section className="px-4 max-w-4xl mx-auto">
        <div className="liquid-glass rounded-3xl p-8 sm:p-14 border border-white/10 space-y-8">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-3">
              Privacyverklaring
            </h1>
            <p className="text-muted-foreground text-sm">
              Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="space-y-6 text-sm text-foreground/90 leading-relaxed font-normal">
            <p className="text-base text-white/90">
              Wij hechten grote waarde aan de bescherming van persoonsgegevens en de vertrouwelijkheid van vastgoed- en energiedata van onze zakelijke gebruikers. In deze verklaring lichten we kort en transparant toe welke gegevens worden verwerkt en met welk doel.
            </p>

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-white pt-3 border-t border-white/10">
                1. Welke gegevens worden verwerkt?
              </h2>
              <p className="text-muted-foreground">
                Uitsluitend noodzakelijke gegevens voor het functioneren van het platform en het beantwoorden van demo- of contactverzoeken:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
                <li>Zakelijke contactgegevens: naam, zakelijk e-mailadres, telefoonnummer en organisatienaam;</li>
                <li>Account- en inloggegevens van geautoriseerde platformgebruikers;</li>
                <li>Ingevoerde vastgoed- en energieparameters (zoals contractvolumes, EAN-codes of aansluitcapaciteiten);</li>
                <li>Geanonimiseerde technische data voor de beveiliging en optimale werking van de applicatie.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-white pt-3 border-t border-white/10">
                2. Doeleinden van de verwerking
              </h2>
              <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
                <li>Het organiseren en uitvoeren van demonstraties of kennismakingsgesprekken;</li>
                <li>Het leveren, beveiligen en onderhouden van de cloud-software;</li>
                <li>Het betrouwbaar uitvoeren van scenario-analyses in opdracht van de gebruiker.</li>
              </ul>
              <p className="text-muted-foreground pt-1">
                Gegevens worden nooit doorverkocht of aan derden verstrekt voor commerciële doeleinden.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-white pt-3 border-t border-white/10">
                3. Beveiliging en opslag
              </h2>
              <p className="text-muted-foreground">
                Alle data wordt verwerkt en veilig opgeslagen binnen de Europese Economische Ruimte (EER) in gecertificeerde datacenters met moderne encryptiestandaarden (TLS en AES-256).
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-white pt-3 border-t border-white/10">
                4. Uw rechten
              </h2>
              <p className="text-muted-foreground">
                Conform de Algemene Verordening Gegevensbescherming (AVG/GDPR) hebt u recht op inzage, correctie of verwijdering van uw persoonsgegevens. Neem hiervoor eenvoudig contact met ons op via het{' '}
                <Link to="/demo-aanvragen" className="text-primary hover:underline font-medium">
                  aanvraag- en contactformulier
                </Link>.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex items-center justify-between">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Terug naar Home</span>
            </Link>
            <span className="text-xs text-muted-foreground font-mono">AVG / GDPR Compliant</span>
          </div>
        </div>
      </section>
    </div>
  );
}
