import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/lib/i18n';

const ease = [0.16, 1, 0.3, 1] as const;

export function IntroSection() {
  const { isEn } = useLanguage();

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/5 blur-[140px] rounded-full pointer-events-none mix-blend-screen" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease }}
        className="flex flex-col items-center text-center relative z-10"
      >
        <div className="mb-6">
          <img 
            src="/assets/aistudio/VOSQ-logo_met_neon_groene_Q-staart_17dbbc4f.png" 
            alt="VOSQ" 
            className="h-9 sm:h-11 w-auto object-contain drop-shadow-[0_0_20px_rgba(121,242,194,0.3)]"
          />
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-10 max-w-4xl">
          {isEn
            ? 'Where real estate, energy, and technology come together.'
            : 'Waar vastgoed, energie en technologie samenkomen.'}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 w-full text-left">
          <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
              {isEn ? 'For real estate investors & owners' : 'Voor vastgoedbeleggers & eigenaren'}
            </div>
            <p className="text-hero-sub text-base sm:text-lg font-normal leading-relaxed text-white/95">
              {isEn
                ? 'Discover where your properties can perform better and which investments truly add value.'
                : 'Ontdek waar uw vastgoed beter kan presteren en welke investeringen daadwerkelijk waarde toevoegen.'}
            </p>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              {isEn
                ? 'VOSQ brings asset data, energy performance, payback periods, and operating costs together in one clear platform for risk management and portfolio optimization.'
                : 'VOSQ brengt objectgegevens, energieprestaties, terugverdientijden en exploitatiekosten samen in één overzichtelijk platform voor risicobeheersing en portefeuille-optimalisatie.'}
            </p>
          </div>

          <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
              {isEn ? 'For owner-occupiers & businesses' : 'Voor eigenaar-eindgebruikers & ondernemers'}
            </div>
            <p className="text-hero-sub text-base sm:text-lg font-normal leading-relaxed text-white/95">
              {isEn
                ? 'Get more out of your property and grid connection. Discover opportunities to control costs and use capacity smarter.'
                : 'Haal meer uit uw vastgoed en energieaansluiting. Ontdek mogelijkheden om kosten te beheersen en capaciteit slimmer te benutten.'}
            </p>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              {isEn
                ? 'Gain independent control over energy costs, peak loads, contracted transport capacity, grid congestion, electrification, and on-site generation or battery storage.'
                : 'Krijg zelfstandig grip op energiekosten, piekbelasting, gecontracteerd transportvermogen, netcongestie, elektrificatie en eigen opwek of batterijopslag.'}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
