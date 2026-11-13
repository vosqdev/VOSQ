import React from 'react';
import { ArrowRight, Sparkles, Database, Zap, Building2, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const ease = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden pt-28 pb-16">
      {/* Background Video with subtle scale animation */}
      <motion.div 
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Dark overlay with data-grid atmosphere & neon tint */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(circle at 50% 30%, transparent 0%, hsl(260 87% 3% / 0.5) 40%, hsl(260 87% 3% / 0.92) 75%, hsl(260 87% 3%) 100%)',
        }}
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-primary/12 blur-[140px] rounded-[100%] pointer-events-none z-0 mix-blend-screen" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6">
        {/* H1 met centrale waardepropositie */}
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease, delay: 0.25 }}
          className="text-3xl sm:text-5xl lg:text-[3.75rem] font-bold leading-[1.1] tracking-tighter max-w-5xl"
        >
          <span className="text-white drop-shadow-sm">De vastgoed- en energiewereld</span><br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/95 to-primary/70 drop-shadow-[0_0_35px_rgba(121,242,194,0.35)]">
            staan voor fundamentele veranderingen.
          </span>
        </motion.h1>

        {/* Subtitel */}
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.35 }}
          className="text-hero-sub text-lg sm:text-xl max-w-3xl mt-6 opacity-95 font-medium leading-relaxed"
        >
          VOSQ helpt vastgoedeigenaren, beleggers en ondernemers in:{' '}
          <span className="text-white font-semibold">Meer inzicht. Betere beslissingen. Hoger rendement.</span>
        </motion.p>

        {/* CTA Knoppen: Primair (lime, gevuld) & Secundair (omlijnd) */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-10 w-full sm:w-auto"
        >
          <Link to="/demo-aanvragen" className="w-full sm:w-auto">
            <Button 
              variant="hero" 
              className="w-full sm:w-auto h-14 px-8 text-base font-bold shadow-[0_0_30px_rgba(121,242,194,0.3)] hover:shadow-[0_0_45px_rgba(121,242,194,0.5)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Ontdek uw vastgoedkansen
            </Button>
          </Link>

          <Link to="/oplossingen" className="w-full sm:w-auto">
            <Button 
              variant="heroSecondary" 
              className="w-full sm:w-auto h-14 px-8 text-base border border-white/10 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              Bekijk de mogelijkheden
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>

        {/* Trust Badges Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="mt-16 pt-8 border-t border-white/10 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center justify-between text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl liquid-glass border border-white/10 flex items-center justify-center text-primary">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Energie & Netcapaciteit</div>
              <div className="text-[11px] text-muted-foreground">CBC, GTV & peak shaving</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl liquid-glass border border-white/10 flex items-center justify-center text-primary">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Vastgoed & Waarde</div>
              <div className="text-[11px] text-muted-foreground">Paris Proof, CSRD & MJOP</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl liquid-glass border border-white/10 flex items-center justify-center text-primary">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Object & data</div>
              <div className="text-[11px] text-muted-foreground">Geautomatiseerde koppeling</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl liquid-glass border border-white/10 flex items-center justify-center text-primary">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Praktisch Instrument</div>
              <div className="text-[11px] text-muted-foreground">Zelfstandig inzicht & analyse</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
