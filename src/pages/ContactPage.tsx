import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [sector, setSector] = useState('netcongestie');
  const [message, setMessage] = useState('');
  const [botField, setBotField] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Contact & Aanvraag | VOSQ Platform';
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (botField) return;
    if (!name.trim() || !email.trim()) return;

    const formData: Record<string, string> = {
      'form-name': 'contact-aanvraag',
      name,
      email,
      phone,
      company,
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
    <div className="pt-28 pb-20">
      <section className="px-4 max-w-7xl mx-auto mb-16 text-center relative">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-primary/10 blur-[160px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            Neem Contact op
          </h1>

          <p className="text-hero-sub text-lg sm:text-xl font-normal leading-relaxed opacity-90">
            Ontdek hoe VOSQ uw vastgoed, energieaansluiting, contracten en investeringsvraagstukken overzichtelijk structureert en doorrekent.
          </p>
        </div>
      </section>

      <section className="px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Digitaal Instrument — Zelfstandig Regie */}
          <div className="lg:col-span-5 space-y-6">
            <div className="liquid-glass rounded-3xl p-8 sm:p-10 border border-primary/25 bg-gradient-to-b from-primary/[0.08] via-white/[0.02] to-transparent shadow-xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-bold text-primary uppercase tracking-wider mb-6">
                Positionering
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight leading-snug">
                Praktisch Instrument — Zelfstandig Regie
              </h2>
              <p className="text-hero-sub text-base sm:text-lg leading-relaxed opacity-90 text-white/90">
                VOSQ is een digitaal platform en geen traditioneel adviesbureau. U krijgt overzicht en gestructureerde datakoppelingen om zelfstandig kansen, risico's en scenario's te verkennen.
              </p>
            </div>
          </div>

          {/* Right Column: Contact & Kennismaking Form */}
          <div className="lg:col-span-7">
            <div className="liquid-glass rounded-3xl p-8 sm:p-12 border border-white/10">
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 text-primary flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(121,242,194,0.35)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Aanvraag Verzonden</h3>
                  <p className="text-muted-foreground text-sm max-w-md mb-8">
                    Bedankt {name}. We nemen zo spoedig mogelijk contact met u op via <span className="text-primary font-medium">{email}</span> om uw vraag te bespreken.
                  </p>
                  <Button variant="hero" onClick={() => setSubmitted(false)}>
                    Nieuw bericht sturen
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  name="contact-aanvraag"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="contact-aanvraag" />
                  <p className="hidden">
                    <label>
                      Don’t fill this out if you're human:{' '}
                      <input
                        name="bot-field"
                        value={botField}
                        onChange={(e) => setBotField(e.target.value)}
                      />
                    </label>
                  </p>
                  <div className="border-b border-white/10 pb-4 mb-2">
                    <h3 className="text-2xl font-bold text-white mb-1.5">Plan een Vrijblijvende Kennismaking</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Ontdek hoe VOSQ uw vastgoed, energieaansluiting en contracten overzichtelijk structureert en inzichtelijk maakt.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Naam *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Voor- en achternaam"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Zakelijk E-mailadres *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="naam@organisatie.nl"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base sm:text-sm text-white placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Bedrijfsnaam / Organisatie
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="bijv. Bouwgroep of Asset Management"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base sm:text-sm text-white placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Telefoonnummer
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+31 6 ..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base sm:text-sm text-white placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Sector / Toepassing
                    </label>
                    <select
                      value={sector}
                      onChange={(e) => setSector(e.target.value)}
                      className="w-full bg-card border border-white/10 rounded-xl px-4 py-3 text-base sm:text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
                    >
                      <option value="netcongestie">Energie & Netcongestie</option>
                      <option value="woningbouw">Woningbouw & Gebiedsontwikkeling</option>
                      <option value="commercieel">Commercieel Vastgoed & Investeringen</option>
                      <option value="bess">Batterijopslag (BESS) & Flexibiliteit</option>
                      <option value="opwek">Duurzame Energie Opwek & Smart Grids</option>
                      <option value="overheden">Overheden & Maatschappelijk Vastgoed</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Bericht of Toelichting op uw vraagstuk (Optioneel)
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Vertel ons over uw project, netaansluiting of portefeuille..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base sm:text-sm text-white placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    />
                  </div>

                  <Button variant="hero" type="submit" className="w-full h-14 text-sm font-bold gap-2">
                    <Send className="w-4 h-4" />
                    Verstuur Aanvraag
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
