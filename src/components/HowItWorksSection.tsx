import React from 'react';
import { motion } from 'motion/react';
import { Database, FolderTree, LineChart, CheckCircle2 } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

const STEPS = [
  {
    step: '01',
    title: 'Connect',
    kicker: 'Data-ingestie',
    description: 'Automatisch uploaden van informatie: BAG, slimme meters, contracten en netbeheerdersdata.',
    tag: 'TELEMETRIE',
    icon: Database,
  },
  {
    step: '02',
    title: 'Structure',
    kicker: 'Harmonisatie',
    description: 'Versnipperde spreadsheets en documenten worden geordend in één uniform en gevalideerd objectdossier.',
    tag: 'EÉN BRON VAN INFORMATIE',
    icon: FolderTree,
  },
  {
    step: '03',
    title: 'Analyse',
    kicker: 'Simulatie',
    description: 'Modellering van energie zoals kwartierdata, transportcapaciteit, BESS-batterijopslag, laadpalen en ESG-doelen.',
    tag: 'ENERGIEWAARDE',
    icon: LineChart,
  },
  {
    step: '04',
    title: 'Decide',
    kicker: 'Besluitvorming',
    description: 'Inspecties, controles, investerings-, verkoop- en exploitatiecontracten met gestructureerde inzichten en scenariovergelijkingen.',
    tag: 'ONDERBOUWDE BESLUITVORMING',
    icon: CheckCircle2,
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/5 blur-[170px] rounded-full pointer-events-none mix-blend-screen" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass border border-white/10 mb-4 text-xs font-semibold text-primary">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span>METHODIEK & ARCHITECTUUR</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Hoe VOSQ Werkt
        </h2>
        <p className="text-hero-sub text-base sm:text-lg font-normal leading-relaxed opacity-85">
          Van versnipperde data en losse documenten naar een gestructureerd digitaal platform in vier beproefde stappen.
        </p>
      </div>

      {/* 4 Process Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {STEPS.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease }}
              className="liquid-glass rounded-2xl p-7 border border-white/10 hover:border-primary/40 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                {/* Step Number & Kicker */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-mono font-extrabold text-primary/80 group-hover:text-primary transition-colors">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="text-[11px] font-mono uppercase tracking-wider text-primary font-semibold mb-1">
                  {step.kicker}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Tag / Micro Feature Badge */}
              <div className="pt-5 mt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-mono text-foreground/70 uppercase tracking-wider">
                  {step.tag}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
