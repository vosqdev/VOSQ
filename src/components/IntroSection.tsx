import React from 'react';
import { motion } from 'motion/react';

interface IntroSectionProps {
  onOpenModal?: (type?: 'demo' | 'trial', context?: string) => void;
}

const ease = [0.16, 1, 0.3, 1] as const;

export function IntroSection({ onOpenModal }: IntroSectionProps) {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto relative">
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

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-6">
          Waar vastgoed, energie en technologie samenkomen.
        </h2>

        <div className="space-y-4 text-hero-sub text-lg sm:text-xl font-normal leading-relaxed opacity-90 max-w-2xl">
          <p>
            Netcongestie, exploitatiebeperkingen, wet- en regelgeving en stijgende investeringsrisico's maken een rendabele toekomst complexer.
          </p>
          <p className="text-white/95">
            VOSQ levert de applicatie om die informatie te structureren, scenario's door te rekenen en beslissingen te onderbouwen.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
