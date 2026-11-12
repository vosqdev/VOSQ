import React from 'react';
import { motion } from 'motion/react';
import { Network, FolderKanban, Target, Calculator } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

interface Principle {
  letter: string;
  name: string;
  description: string;
  kpiHighlight: string;
  kpiLabel: string;
  icon: React.ComponentType<{ className?: string }>;
}

const PRINCIPLES: Principle[] = [
  {
    letter: 'V',
    name: 'Verbinden',
    description: 'Wij brengen data, systemen, organisatie en disciplines samen.',
    kpiHighlight: 'Data + Systemen',
    kpiLabel: 'INTEGRALE BRONNEN',
    icon: Network,
  },
  {
    letter: 'O',
    name: 'Ordenen',
    description: 'Wij maken versnipperde informatie bruikbaar en overzichtelijk.',
    kpiHighlight: '100% Gestructureerd',
    kpiLabel: 'UNIFORM DATAMODEL',
    icon: FolderKanban,
  },
  {
    letter: 'S',
    name: 'Strategie',
    description: 'Wij vertalen wet en regelgeving naar concrete investerings- en energiestrategieën.',
    kpiHighlight: 'Toekomstbestendig',
    kpiLabel: 'PORTFOLIO STRATEGIE',
    icon: Target,
  },
  {
    letter: 'Q',
    name: 'Quantificatie',
    description: 'Wij maken scenario\'s, risico\'s, rendementen en kansen meetbaar.',
    kpiHighlight: 'Scenario\'s per project',
    kpiLabel: 'MEETBAAR RESULTAAT',
    icon: Calculator,
  },
];

export function PrinciplesSection() {
  return (
    <section className="py-28 px-4 max-w-7xl mx-auto relative">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-primary/5 blur-[160px] rounded-full pointer-events-none mix-blend-screen" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease }}
        className="text-center max-w-3xl mx-auto mb-20 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass border border-white/10 mb-4 text-xs font-semibold text-primary">
          <span>MERKWAARDEN • V-O-S-Q</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
          Het Fundament van VOSQ
        </h2>
        <p className="text-hero-sub text-lg sm:text-xl font-medium leading-relaxed opacity-85">
          Van data naar strategie. Van inzicht naar resultaat. Onze vier kernwaarden vormen de architectuur van elke applicatie die we bouwen.
        </p>
      </motion.div>

      {/* 4 Glascards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {PRINCIPLES.map((principle, index) => {
          const Icon = principle.icon;
          return (
            <motion.div
              key={principle.letter}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.12, ease }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="liquid-glass rounded-3xl p-8 flex flex-col justify-between border border-white/10 hover:border-primary/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 group relative overflow-hidden"
            >
              {/* Subtle top gradient accent */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Big Letter Badge */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 group-hover:bg-primary/20 border border-white/10 group-hover:border-primary/40 flex items-center justify-center text-primary transition-all duration-300 shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-4xl font-extrabold text-white/20 group-hover:text-primary/50 font-mono transition-colors">
                    {principle.letter}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  {principle.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 font-medium">
                  {principle.description}
                </p>
              </div>

              {/* KPI highlight row */}
              <div className="pt-6 border-t border-white/10 mt-auto">
                <div className="text-lg font-bold text-primary tracking-tight">
                  {principle.kpiHighlight}
                </div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">
                  {principle.kpiLabel}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
