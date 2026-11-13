import React from 'react';
import { motion } from 'motion/react';
import { Database, FolderTree, LineChart, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ease = [0.16, 1, 0.3, 1] as const;

const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    kicker: 'DATA-INGESTIE',
    title: 'Connect',
    description: 'Automatisch uploaden van informatie: BAG, slimme meters, contracten en netbeheerdersdata.',
    tag: 'TELEMETRIE',
    icon: Database,
  },
  {
    step: '02',
    kicker: 'HARMONISATIE',
    title: 'Structure',
    description: 'Versnipperde spreadsheets en documenten worden geordend in één uniform en gevalideerd objectdossier.',
    tag: 'EÉN BRON VAN INFORMATIE',
    icon: FolderTree,
  },
  {
    step: '03',
    kicker: 'SIMULATIE',
    title: 'Analyse',
    description: 'Modellering van energie zoals kwartierdata, transportcapaciteit, BESS-batterijopslag, laadpalen en ESG-doelen.',
    tag: 'ENERGIEWAARDE',
    icon: LineChart,
  },
  {
    step: '04',
    kicker: 'BESLUITVORMING',
    title: 'Decide',
    description: 'Inspecties, controles, investerings-, verkoop- en exploitatiecontracten met gestructureerde inzichten en scenariovergelijkingen.',
    tag: 'ONDERBOUWDE BESLUITVORMING',
    icon: CheckCircle2,
  },
];

export function AboutTeaserSection() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto relative">
      <div className="liquid-glass rounded-3xl p-8 sm:p-12 lg:p-14 border border-white/10 shadow-2xl relative overflow-hidden">
        {/* Background video overlay behind section */}
        <div className="absolute inset-0 z-0 opacity-35 mix-blend-screen pointer-events-none overflow-hidden">
          <video
            className="w-full h-full object-cover scale-105"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/chess.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/75" />
          <div className="absolute inset-0 backdrop-blur-[1px]" />
        </div>

        {/* Glow */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-primary/10 blur-[160px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          {/* Left Column: Logo, Mission & CTAs matching Image 1 */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <img 
                  src="/assets/aistudio/VOSQ-logo_met_neon_groene_Q-staart_17dbbc4f.png" 
                  alt="VOSQ" 
                  className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_0_25px_rgba(121,242,194,0.3)]"
                />
              </div>

              <div className="space-y-4 mb-8 text-hero-sub text-base sm:text-lg font-normal leading-relaxed opacity-95 text-white/95">
                <p>
                  Met de juiste tools de financiële, technische en energetische prestaties van het vastgoed te verbeteren. Van energiekosten en netcapaciteit tot verduurzaming, investeringsscenario's en toekomstwaarde.
                </p>
                <p>
                  VOSQ combineert kennis van vastgoed, energie en digitale technologie om complexe vraagstukken te vertalen naar concrete inzichten om onderbouwde keuzes te maken — met uw eigen contracten en actuele data als vertrekpunt.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link to="/over-vosq" className="w-full sm:w-auto">
                <Button variant="hero" className="w-full sm:w-auto h-12 px-6 text-sm font-bold shadow-[0_0_25px_rgba(121,242,194,0.3)]">
                  Ontdek het verhaal achter VOSQ
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: 4 How It Works blocks in 2x2 grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 sm:gap-5">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease }}
                  className="liquid-glass rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-primary/40 transition-all duration-300 relative group flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Step Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-mono font-extrabold text-primary group-hover:drop-shadow-[0_0_10px_rgba(121,242,194,0.5)] transition-all">
                        {step.step}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold mb-1">
                      {step.kicker}
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2.5">
                      {step.title}
                    </h3>

                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Micro Subtag */}
                  <div className="pt-4 mt-5 border-t border-white/5">
                    <span className="text-[10px] font-mono text-foreground/70 uppercase tracking-wider">
                      {step.tag}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
