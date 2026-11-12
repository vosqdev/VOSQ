import React from 'react';
import { motion } from 'motion/react';
import { 
  Building, 
  Building2, 
  Zap, 
  BatteryCharging, 
  Sun, 
  Landmark, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SECTORS } from '@/data/sectorsData';

const ease = [0.16, 1, 0.3, 1] as const;

const sectorIcons: Record<string, React.ReactNode> = {
  'woningbouw': <Building className="w-6 h-6 text-primary" />,
  'commercieel-vastgoed': <Building2 className="w-6 h-6 text-primary" />,
  'energie-netcongestie': <Zap className="w-6 h-6 text-primary" />,
  'batterijopslag-flexibiliteit': <BatteryCharging className="w-6 h-6 text-primary" />,
  'duurzame-energie-opwek': <Sun className="w-6 h-6 text-primary" />,
  'overheden-maatschappelijk': <Landmark className="w-6 h-6 text-primary" />
};

export function SectorsSection() {
  return (
    <section id="sectoren" className="py-28 px-4 max-w-7xl mx-auto relative">
      {/* Glow */}
      <div className="absolute top-1/2 right-1/4 w-[700px] h-[400px] bg-primary/5 blur-[160px] rounded-full pointer-events-none mix-blend-screen" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease }}
        className="text-center max-w-3xl mx-auto mb-20 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass border border-white/10 mb-4 text-xs font-semibold text-primary">
          <Sparkles className="w-3.5 h-3.5" />
          <span>SECTOR-SPECIFIEKE INTELLIGENCE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
          Toegespitst op de Uitdagingen van Jouw Sector
        </h2>
        <p className="text-hero-sub text-lg sm:text-xl font-medium leading-relaxed opacity-85">
          Elke sector kent unieke wet- en regelgeving, energiebeperkingen en besluitvormingsprocessen. VOSQ biedt specifieke modules en rekenmodellen per branche.
        </p>
      </motion.div>

      {/* 6 Sector Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {SECTORS.map((sector, index) => (
          <motion.div
            key={sector.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.1, ease }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="liquid-glass rounded-3xl p-8 flex flex-col justify-between border border-white/10 hover:border-primary/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 group"
          >
            <div>
              {/* Icon & Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-colors shadow-inner">
                  {sectorIcons[sector.id] || <Building className="w-6 h-6 text-primary" />}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 text-muted-foreground group-hover:text-primary transition-colors">
                  {sector.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {sector.title}
              </h3>

              <div className="text-xs font-semibold text-primary/80 mb-4 line-clamp-1">
                {sector.primaryKeyword}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                {sector.summary}
              </p>

              {/* Sample Challenge pill */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-foreground/80 mb-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                  Kritieke Uitdaging:
                </span>
                <span className="font-semibold text-white">{sector.challenges[0]?.title}</span>
              </div>
            </div>

            {/* Link to Sector Page */}
            <div className="pt-4 border-t border-white/10 mt-auto flex items-center justify-between">
              <Link
                to={`/sectoren/${sector.slug}`}
                className="text-sm font-bold text-primary group-hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <span>Bekijk sectorpagina</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <span className="text-xs font-mono text-muted-foreground">
                {sector.metrics[0]?.value}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
