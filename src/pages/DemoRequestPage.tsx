import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Send, 
  Building2, 
  Zap, 
  Layers,
  ShieldCheck, 
  Lock,
  Clock,
  Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function DemoRequestPage() {
  const [requestType, setRequestType] = useState<'meeting' | 'demo'>('meeting');
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interestArea, setInterestArea] = useState('Vastgoedobjecten & Portefeuille');
  const [sector, setSector] = useState('Commercieel vastgoed & investeringen');
  const [message, setMessage] = useState('');
  const [botField, setBotField] = useState(''); // Honeypot field
  const [consent, setConsent] = useState(false);

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Plan een Vrijblijvende Kennismaking | VOSQ Platform';
  }, []);

  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Spambot check
    if (botField) {
      return;
    }

    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = 'Naam is verplicht.';
    }
    if (!organization.trim()) {
      newErrors.organization = 'Organisatie is verplicht.';
    }
    if (!email.trim()) {
      newErrors.email = 'Zakelijk e-mailadres is verplicht.';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Vul een geldig e-mailadres in (bijv. naam@bedrijf.nl).';
    }
    if (!consent) {
      newErrors.consent = 'U dient akkoord te gaan met de privacyverklaring.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Send to Netlify Forms endpoint
    const formData: Record<string, string> = {
      'form-name': 'kennismaking-aanvraag',
      'request-type': requestType,
      name,
      organization,
      jobTitle,
      email,
      phone,
      interestArea,
      sector,
      message,
      'bot-field': botField
    };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => {
        setSubmitted(true);
      })
      .catch((err) => {
        console.warn('Netlify form submission fallback:', err);
        setSubmitted(true);
      });
  };

  return (
    <div className="pt-28 pb-24 relative overflow-hidden">
      {/* Background glow & video overlay */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-primary/10 blur-[170px] rounded-full pointer-events-none mix-blend-screen" />

      {/* Hero Header */}
      <section className="px-4 max-w-4xl mx-auto mb-12 text-center relative z-10">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.12]">
          Plan een Vrijblijvende Kennismaking
        </h1>

        <p className="text-hero-sub text-lg sm:text-xl font-normal leading-relaxed opacity-90 max-w-3xl mx-auto mb-8">
          Ontdek hoe VOSQ uw vastgoed, energieaansluiting, contracten en investeringsvraagstukken overzichtelijk structureert en doorrekent.
        </p>

        {/* Tab Toggle: Kennismaking / Demo */}
        <div className="inline-flex items-center gap-2 p-1.5 liquid-glass rounded-2xl border border-white/10 max-w-md mx-auto">
          <button
            type="button"
            onClick={() => setRequestType('meeting')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              requestType === 'meeting'
                ? 'bg-primary text-background shadow-[0_0_20px_rgba(121,242,194,0.35)] font-extrabold'
                : 'text-muted-foreground hover:text-white'
            }`}
          >
            Vrijblijvende Kennismaking
          </button>

          <button
            type="button"
            onClick={() => setRequestType('demo')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              requestType === 'demo'
                ? 'bg-primary text-background shadow-[0_0_20px_rgba(121,242,194,0.35)] font-extrabold'
                : 'text-muted-foreground hover:text-white'
            }`}
          >
            Live Demonstratie (30 min)
          </button>
        </div>
      </section>

      {/* Form Container */}
      <section className="px-4 max-w-3xl mx-auto relative z-10">
        <div className="liquid-glass rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative">
          {submitted ? (
            <div className="py-10 text-center flex flex-col items-center">
              <div className="w-20 h-20 rounded-3xl bg-primary/20 text-primary flex items-center justify-center mb-6 shadow-[0_0_35px_rgba(121,242,194,0.4)] border border-primary/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">
                Aanvraag Succesvol Ontvangen
              </h2>
              <p className="text-hero-sub text-base max-w-lg mb-8 leading-relaxed">
                Bedankt <strong className="text-white">{name}</strong> van <strong className="text-white">{organization}</strong>. Wij hebben uw aanvraag voor een <strong className="text-white">{requestType === 'meeting' ? 'vrijblijvende kennismaking' : 'live demonstratie'}</strong> geregistreerd.
              </p>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-xs text-muted-foreground max-w-md w-full text-left space-y-1.5 mb-8">
                <div>• Type: <strong className="text-white">{requestType === 'meeting' ? 'Vrijblijvende Kennismaking' : 'Live Demonstratie (30 min)'}</strong></div>
                <div>• E-mail: <strong className="text-white">{email}</strong></div>
                <div>• Vraagstuk: <strong className="text-white">{interestArea}</strong></div>
                <div>• Sector: <strong className="text-white">{sector}</strong></div>
                <div className="text-primary pt-1 font-semibold">We nemen spoedig contact met u op om een moment af te stemmen.</div>
              </div>
              <Button variant="hero" onClick={() => setSubmitted(false)}>
                Nieuwe aanvraag indienen
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              name="kennismaking-aanvraag"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="space-y-6"
            >
              {/* Hidden Netlify Inputs */}
              <input type="hidden" name="form-name" value="kennismaking-aanvraag" />
              <input type="hidden" name="request-type" value={requestType} />

              {/* Honeypot field for spam prevention */}
              <p className="hidden">
                <label>
                  Don’t fill this out if you're human: 
                  <input name="bot-field" value={botField} onChange={(e) => setBotField(e.target.value)} />
                </label>
              </p>

              {/* Form Card Header */}
              <div className="border-b border-white/10 pb-5 mb-2">
                <div className="text-[11px] font-mono uppercase tracking-widest text-primary font-bold mb-1">
                  Aanvraagformulier
                </div>
                <h2 className="text-2xl font-bold text-white">
                  {requestType === 'meeting' ? 'Plan een Vrijblijvende Kennismaking' : 'Vraag een Live Demonstratie Aan'}
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed">
                  Ontdek hoe het platform uw vastgoed, energieaansluiting en vraagstukken overzichtelijk structureert en analyseert.
                </p>
              </div>

              {/* Naam & Organisatie */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Volledige Naam *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                    }}
                    placeholder="Voor- en achternaam"
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-base sm:text-sm text-white placeholder:text-muted-foreground/60 focus:outline-none transition-colors ${
                      errors.name ? 'border-rose-500' : 'border-white/10 focus:border-primary/50'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="organization" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Organisatie / Bedrijfsnaam *
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    required
                    value={organization}
                    onChange={(e) => {
                      setOrganization(e.target.value);
                      if (errors.organization) setErrors((prev) => ({ ...prev, organization: '' }));
                    }}
                    placeholder="Bedrijfsnaam of instelling"
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-base sm:text-sm text-white placeholder:text-muted-foreground/60 focus:outline-none transition-colors ${
                      errors.organization ? 'border-rose-500' : 'border-white/10 focus:border-primary/50'
                    }`}
                  />
                  {errors.organization && <p className="text-xs text-rose-400 mt-1">{errors.organization}</p>}
                </div>
              </div>

              {/* Functie & E-mail */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="jobTitle" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Functie
                  </label>
                  <input
                    id="jobTitle"
                    name="jobTitle"
                    type="text"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    placeholder="bijv. Assetmanager, Technisch Beheerder, CFO"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base sm:text-sm text-white placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Zakelijk E-mailadres *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                    }}
                    placeholder="naam@organisatie.nl"
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-base sm:text-sm text-white placeholder:text-muted-foreground/60 focus:outline-none transition-colors ${
                      errors.email ? 'border-rose-500' : 'border-white/10 focus:border-primary/50'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Telefoonnummer */}
              <div>
                <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                  Telefoonnummer (Optioneel)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+31 6 ..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base sm:text-sm text-white placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              {/* Vraagstuk & Sector */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="interestArea" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Primair Vraagstuk
                  </label>
                  <select
                    id="interestArea"
                    name="interestArea"
                    value={interestArea}
                    onChange={(e) => setInterestArea(e.target.value)}
                    className="w-full bg-[#13151c] border border-white/10 rounded-xl px-4 py-3 text-base sm:text-sm text-white focus:outline-none focus:border-primary/50 transition-colors cursor-pointer"
                  >
                    <option value="Vastgoedobjecten & Portefeuille">Vastgoedobjecten & Portefeuilleregister</option>
                    <option value="Energieaansluitingen & Kwartierdata">Energieaansluitingen & Kwartierdata</option>
                    <option value="Contractenbeheer & EAN-codes">Contractenbeheer (L1/L2/L3) & EAN's</option>
                    <option value="Netcongestie & Flexibiliteit (BESS)">Netcongestie, Peak Shaving & BESS</option>
                    <option value="Gecombineerd Vastgoed & Energie">Gecombineerd Vastgoed- & Energieplatform</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="sector" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Sector
                  </label>
                  <select
                    id="sector"
                    name="sector"
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    className="w-full bg-[#13151c] border border-white/10 rounded-xl px-4 py-3 text-base sm:text-sm text-white focus:outline-none focus:border-primary/50 transition-colors cursor-pointer"
                  >
                    <option value="Commercieel vastgoed & investeringen">Commercieel vastgoed & investeringen</option>
                    <option value="Woningcorporaties & residentieel">Woningcorporaties & residentieel</option>
                    <option value="Energie, netbeheer & flexibiliteit">Energie, netbeheer & flexibiliteit</option>
                    <option value="Logistiek & bedrijventerreinen">Logistiek & bedrijventerreinen</option>
                    <option value="Overheden & maatschappelijk vastgoed">Overheden & maatschappelijk vastgoed</option>
                    <option value="Overig">Overig</option>
                  </select>
                </div>
              </div>

              {/* Bericht */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                  Toelichting op uw vastgoed- of energievraagstuk (Optioneel)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Bijvoorbeeld: omvang van de portefeuille, aantal EAN-aansluitingen, netcongestieproblematiek of hercontractering..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base sm:text-sm text-white placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>

              {/* AVG Checkbox */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => {
                      setConsent(e.target.checked);
                      if (errors.consent) setErrors((prev) => ({ ...prev, consent: '' }));
                    }}
                    className="w-4 h-4 rounded border-white/20 bg-white/5 text-primary focus:ring-primary mt-0.5 cursor-pointer"
                  />
                  <span className="text-xs text-muted-foreground leading-relaxed">
                    Ik geef toestemming voor het verwerken van mijn gegevens conform de{' '}
                    <Link to="/privacy" className="text-primary hover:underline" target="_blank">
                      Privacyverklaring
                    </Link>
                    . Gegevens worden strikt vertrouwelijk behandeld en niet gedeeld met derden. *
                  </span>
                </label>
                {errors.consent && <p className="text-xs text-rose-400 mt-1">{errors.consent}</p>}
              </div>

              {/* Submit Button */}
              <Button
                variant="hero"
                type="submit"
                size="lg"
                className="w-full h-14 text-base font-bold shadow-[0_0_30px_rgba(121,242,194,0.3)] hover:shadow-[0_0_40px_rgba(121,242,194,0.5)] cursor-pointer gap-2"
              >
                <Send className="w-4 h-4" />
                {requestType === 'meeting' ? 'Plan een Vrijblijvende Kennismaking' : 'Vraag een Live Demonstratie Aan'}
              </Button>

              <div className="flex items-center justify-center gap-6 text-[11px] text-muted-foreground pt-2">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                  AVG / GDPR Veilig
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  Persoonlijke reactie
                </span>
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-primary" />
                  Strikt vertrouwelijk
                </span>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
