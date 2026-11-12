import React, { useState } from 'react';
import { X, CheckCircle2, Send, Calendar, Clock, Building2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'motion/react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: 'demo' | 'trial';
  context?: string;
}

export function LeadModal({ isOpen, onClose, defaultType = 'demo', context }: LeadModalProps) {
  const [type, setType] = useState<'demo' | 'trial'>(defaultType);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [moduleInterest, setModuleInterest] = useState('netcongestie');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');
  const [botField, setBotField] = useState('');
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setType(defaultType);
      setSubmitted(false);
      if (context) {
        setNotes(`Aanvraag via: ${context}`);
      }
    }
  }, [isOpen, defaultType, context]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (botField) return;
    if (!email || !name) return;

    const formData: Record<string, string> = {
      'form-name': 'lead-modal-aanvraag',
      name,
      email,
      company,
      phone,
      moduleInterest,
      type,
      context: context || '',
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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl liquid-glass rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl bg-card/95 z-10 overflow-hidden my-8"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-muted-foreground hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="py-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary mb-6 shadow-[0_0_30px_rgba(121,242,194,0.35)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Aanvraag Succesvol Ontvangen</h3>
                <p className="text-muted-foreground text-sm max-w-md mb-8 leading-relaxed">
                  Bedankt <strong className="text-white">{name}</strong>. Eén van onze software-specialisten neemt binnen 24 uur contact met je op via <span className="text-primary font-medium">{email}</span> om de live demonstratie in te plannen.
                </p>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-muted-foreground mb-8 text-left w-full">
                  <div className="font-bold text-white mb-1">Samenvatting:</div>
                  <div>• Organisatie: {company || 'Niet opgegeven'}</div>
                  <div>• Primaire focus: {moduleInterest}</div>
                  {context && <div>• Context: {context}</div>}
                </div>
                <Button variant="hero" onClick={onClose} className="w-full h-12 font-bold">
                  Sluiten & Terug naar Website
                </Button>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {type === 'demo' ? 'Vraag een Live Demonstratie aan' : 'Plan een Vrijblijvende Kennismaking'}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Zie hoe het platform jouw vastgoedobject en energieaansluiting contracten en vraagstukken structureert en registreert.
                </p>

                {/* Type toggle */}
                <div className="grid grid-cols-2 gap-2 p-1.5 bg-white/5 rounded-2xl border border-white/5 mb-6">
                  <button
                    type="button"
                    onClick={() => setType('trial')}
                    className={`py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                      type === 'trial' 
                        ? 'bg-primary text-background shadow-[0_0_15px_rgba(121,242,194,0.3)]' 
                        : 'text-muted-foreground hover:text-white'
                    }`}
                  >
                    Vrijblijvende Kennismaking
                  </button>
                  <button
                    type="button"
                    onClick={() => setType('demo')}
                    className={`py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                      type === 'demo' 
                        ? 'bg-primary text-background shadow-[0_0_15px_rgba(121,242,194,0.3)]' 
                        : 'text-muted-foreground hover:text-white'
                    }`}
                  >
                    Live Demo (30 min)
                  </button>
                </div>

                <form
                  onSubmit={handleSubmit}
                  name="lead-modal-aanvraag"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="lead-modal-aanvraag" />
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
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Volledige Naam *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="bijv. Sander de Vries"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base sm:text-sm text-white placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 transition-colors"
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
                        placeholder="sander@bedrijf.nl"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base sm:text-sm text-white placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Bedrijfsnaam / Organisatie
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="bijv. Vastgoedfonds Nederland"
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
                        placeholder="+31 6 12345678"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base sm:text-sm text-white placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Primaire Interesse / Module
                    </label>
                    <select
                      value={moduleInterest}
                      onChange={(e) => setModuleInterest(e.target.value)}
                      className="w-full bg-card border border-white/10 rounded-xl px-4 py-3 text-base sm:text-sm text-white focus:outline-none focus:border-primary/50 transition-colors cursor-pointer"
                    >
                      <option value="netcongestie">Netcongestie Analyse & Aansluitcapaciteit</option>
                      <option value="woningbouw">Woningbouw & Gebiedsontwikkeling Software</option>
                      <option value="commercieel">Commercieel Vastgoed & Portefeuillestrategie</option>
                      <option value="bess">Batterijopslag (BESS) Businesscase Tool</option>
                      <option value="opwek">Duurzame Energie Opwek & Cable Pooling</option>
                      <option value="overheden">Overheden & Maatschappelijk Vastgoed</option>
                    </select>
                  </div>

                  {type === 'demo' ? (
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Voorkeursdatum of Toelichting (Optioneel)
                      </label>
                      <input
                        type="text"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="bijv. Komende dinsdagmiddag, of aantal MVA uitdaging..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                  ) : null}

                  <Button variant="hero" type="submit" className="w-full h-13 text-sm font-bold mt-6 gap-2">
                    <Send className="w-4 h-4" />
                    {type === 'demo' ? 'Bevestig Demo Aanvraag' : 'Verstuur Kennismakingsverzoek'}
                  </Button>

                  <div className="text-[11px] text-center text-muted-foreground mt-3">
                    Geen spam. Direct contact met een inhoudelijke specialist binnen 24 uur.
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
