import React from 'react';
import { motion } from 'motion/react';

const ease = [0.16, 1, 0.3, 1] as const;

export function IntroSection() {
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
          Waar vastgoed, energie en technologie samenkomen.
        </h2>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 w-full text-left">
          <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-center">
            <p className="text-hero-sub text-base sm:text-lg font-normal leading-relaxed text-white/90">
              Verkrijg overzicht en inzicht in de verschillende aspecten van je eigen vastgoed en energie. VOSQ heeft een tool ontwikkeld die vastgoed en energiedata samenbrengt in één overzichtelijk platform.
            </p>
          </div>

          <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-center space-y-4">
            <p className="text-hero-sub text-base sm:text-lg font-normal leading-relaxed opacity-90">
              Netcongestie, exploitatiebeperkingen, wet- en regelgeving en stijgende investeringsrisico's maken een rendabele toekomst complexer.
            </p>
            <p className="text-hero-sub text-base sm:text-lg font-normal leading-relaxed text-white/95">
              VOSQ levert de applicatie om die informatie te managen, structureren, door te rekenen en beslissingen te onderbouwen.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
