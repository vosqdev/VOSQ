import React from 'react';
import { motion } from 'motion/react';
import { Database, FolderTree, LineChart, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface AboutTeaserSectionProps {
  onOpenModal?: (type?: 'demo' | 'trial', context?: string) => void;
}

const ease = [0.16, 1, 0.3, 1] as const;

const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    kicker: 'DATA-INGESTIE',
    title: 'Connect',
    description: 'Automatische koppeling met Kadaster, BAG, slimme meters, contracten en netbeheerdersdata.',
    tag: 'BAG & TELEMETRIE',
    icon: Database,
  },
  {
    step: '02',
    kicker: 'HARMONISATIE',
    title: 'Structure',
    description: 'Versnipperde spreadsheets en documenten worden geordend in één uniform en gevalideerd objectdossier.',
    tag: 'EÉN BRON VAN WAARHEID',
    icon: FolderTree,
  },
  {
    step: '03',
    kicker: 'SIMULATIE',
    title: 'Analyse',
    description: 'Realtime modellering van kwartierwaarden, transportcapaciteit, BESS-batterijopslag en ESG-doelen.',
    tag: 'KWARTIERWAARDE ENGINE',
    icon: LineChart,
  },
  {
    step: '04',
    kicker: 'BESLUITVORMING',
    title: 'Decide',
    description: 'Onderbouw investerings-, verkoop- en exploitatiebesluiten met feiten en bankable rapportages.',
    tag: 'AUDIT-PROOF RAPPORTAGE',
    icon: CheckCircle2,
  },
];

export function AboutTeaserSection({ onOpenModal }: AboutTeaserSectionProps) {
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

              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight text-white mb-6 leading-[1.15]">
                De vastgoed- en energiewereld staan voor fundamentele veranderingen.
              </h2>

              <p className="text-hero-sub text-base sm:text-lg font-normal leading-relaxed opacity-90 text-white/95 mb-8">
                Het platform helpt organisaties met hun eigen contracten en actuele data, slimme analyses en strategische inzichten vooruit te maken.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link to="/over-vosq" className="w-full sm:w-auto">
                <Button variant="hero" className="w-full sm:w-auto h-12 px-6 text-sm font-bold shadow-[0_0_25px_rgba(121,242,194,0.3)]">
                  Ontdek het verhaal achter VOSQ
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>

              <Link to="/demo-aanvragen" className="w-full sm:w-auto">
                <Button
                  variant="heroSecondary"
                  className="w-full sm:w-auto h-12 px-6 text-sm border border-white/10 hover:bg-white/5"
                >
                  Plan een kennismaking
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
