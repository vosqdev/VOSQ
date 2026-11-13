import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/i18n';

const ease = [0.16, 1, 0.3, 1] as const;

export function FinalCtaSection() {
  const { isEn } = useLanguage();

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto relative overflow-hidden">
      {/* Container Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease }}
        className="liquid-glass rounded-[3rem] p-12 sm:p-20 flex flex-col items-center text-center border border-white/10 shadow-2xl relative overflow-hidden group"
      >
        {/* Subtle background video loop */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
          <video
            className="w-full h-full object-cover scale-105"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/cta.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background/95 z-0 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/15 blur-[180px] rounded-full pointer-events-none mix-blend-screen z-0" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tighter text-white mb-6">
            {isEn ? 'Schedule a No-Obligation Introduction' : 'Plan een Vrijblijvende Kennismaking'}
          </h2>

          <p className="text-hero-sub text-lg sm:text-xl font-normal max-w-3xl mx-auto opacity-90 leading-relaxed mb-10">
            {isEn
              ? 'Discover how VOSQ structures and calculates your property, grid connection, contracts, and investment challenges.'
              : 'Ontdek hoe VOSQ uw vastgoed, energieaansluiting, contracten en investeringsvraagstukken overzichtelijk structureert en doorrekent.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link to="/demo-aanvragen" className="w-full sm:w-auto">
              <Button
                variant="hero"
                size="lg"
                className="w-full sm:w-auto h-14 px-10 text-base font-bold shadow-[0_0_30px_rgba(121,242,194,0.3)] hover:shadow-[0_0_45px_rgba(121,242,194,0.5)] cursor-pointer"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                {isEn ? 'Request a demo' : 'Vraag een demo aan'}
              </Button>
            </Link>

            <Link to="/demo-aanvragen" className="w-full sm:w-auto">
              <Button
                variant="heroSecondary"
                size="lg"
                className="w-full sm:w-auto h-14 px-10 text-base border border-white/10 hover:bg-white/10 cursor-pointer"
              >
                <Calendar className="w-4 h-4 mr-2 text-primary" />
                {isEn ? 'Schedule an introduction' : 'Plan een kennismaking'}
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
