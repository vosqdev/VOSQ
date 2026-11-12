import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Zap, 
  Layers, 
  ShieldCheck, 
  TrendingUp, 
  FileText, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ease = [0.16, 1, 0.3, 1] as const;

interface ModuleItem {
  id: string;
  numberTitle: string;
  description: string;
  slug: string;
  badgeStyle: string;
  linkStyle: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SIX_MODULES: ModuleItem[] = [
  {
    id: 'vastgoed-objectdossier',
    numberTitle: '1. Vastgoed- & Objectdossier',
    description: 'Brengt BVO/VVO, WOZ, kadastrale percelen en energielabels samen. Zo ontstaat één gevalideerd objectdossier voor waardebehoud en portefeuilleregie.',
    slug: 'vastgoedportefeuille-objectbeheer',
    badgeStyle: 'bg-sky-500/15 border-sky-500/25 text-sky-400',
    linkStyle: 'text-sky-400 hover:text-sky-300',
    icon: Building2,
  },
  {
    id: 'energiemonitor-netcongestie',
    numberTitle: '2. Energiemonitor & Netcongestie',
    description: 'Analyseert kwartierdata, piekbelasting en batterijopslag (BESS). Helpt u netcongestie beheersen en gecontracteerd vermogen slimmer te benutten.',
    slug: 'energiemonitor-kwartierdata',
    badgeStyle: 'bg-amber-500/15 border-amber-500/25 text-amber-400',
    linkStyle: 'text-amber-400 hover:text-amber-300',
    icon: Zap,
  },
  {
    id: 'centraal-contractenbeheer',
    numberTitle: '3. Centraal Contractenbeheer (L1/L2/L3)',
    description: 'Koppelt raamovereenkomsten aan deelcontracten en individuele EAN-aansluitingen. Voorkomt onnodige stilzwijgende verlenging en geeft grip op inkooprisico.',
    slug: 'energiecontract-ean-management',
    badgeStyle: 'bg-indigo-500/15 border-indigo-500/25 text-indigo-400',
    linkStyle: 'text-indigo-400 hover:text-indigo-300',
    icon: Layers,
  },
  {
    id: 'onderhoud-scios-keuringen',
    numberTitle: '4. Onderhoud, SCIOS & Keuringen',
    description: 'Bewaakt SCIOS Scope 8/10/12, EPBD IV-verplichtingen en NEN 2767-conditiemetingen. Ondersteunt continuïteit, verzekerbaarheid en meerjarig onderhoud.',
    slug: 'onderhoud-keuringen-gacs',
    badgeStyle: 'bg-emerald-500/15 border-emerald-500/25 text-emerald-400',
    linkStyle: 'text-emerald-400 hover:text-emerald-300',
    icon: ShieldCheck,
  },
  {
    id: 'huurders-servicekosten',
    numberTitle: '5. Huurders & Servicekosten',
    description: 'Rekent hoofd- en tussenmeters transparant af per huurder en vierkante meter. Vermindert niet-verhaalbare energielasten in de exploitatie.',
    slug: 'huurdersadministratie-kostenallocatie',
    badgeStyle: 'bg-purple-500/15 border-purple-500/25 text-purple-400',
    linkStyle: 'text-purple-400 hover:text-purple-300',
    icon: TrendingUp,
  },
  {
    id: 'exit-desinvesteringsworkflow',
    numberTitle: '6. Exit- & Desinvesteringsworkflow',
    description: 'Bereidt een object gestructureerd voor op verkoop of herfinanciering met tijdige EAN-ontkoppeling en een overzichtelijk due diligence dossier.',
    slug: 'financien-exploitatie-esg',
    badgeStyle: 'bg-rose-500/15 border-rose-500/25 text-rose-400',
    linkStyle: 'text-rose-400 hover:text-rose-300',
    icon: FileText,
  },
];

export function SoftwareOverviewSection() {
  return (
    <section id="oplossingen" className="py-28 px-4 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Video from template */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          className="w-full h-full object-cover opacity-35 mix-blend-screen scale-105"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/features.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-background via-background/90 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-background via-background/90 to-transparent" />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
        
        {/* Lighting Orbs */}
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none -translate-y-1/2" />
      </div>

      {/* Header matching user image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease }}
        className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 relative z-10"
      >
        <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-white mb-5 leading-[1.15]">
          Zes complementaire modules in één platform
        </h2>
        <p className="text-hero-sub text-base sm:text-xl font-normal leading-relaxed opacity-85 max-w-3xl mx-auto">
          Ontworpen vanuit de praktijk van Nederlandse vastgoedbeleggers en technisch beheerders.
        </p>
      </motion.div>

      {/* 6 Modules Grid (2 rows x 3 columns) */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
        {SIX_MODULES.map((module, index) => {
          const Icon = module.icon;
          return (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="liquid-glass rounded-3xl p-8 sm:p-9 flex flex-col justify-between border border-white/10 hover:border-primary/40 shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300 relative group overflow-hidden"
            >
              <div>
                {/* Icon Badge */}
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 shadow-inner transition-colors duration-300 ${module.badgeStyle}`}>
                  <Icon className="w-5 h-5" />
                </div>

                {/* Number & Title */}
                <h3 className="text-xl sm:text-[1.35rem] font-bold text-white mb-3 tracking-tight group-hover:text-primary transition-colors">
                  {module.numberTitle}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 font-normal">
                  {module.description}
                </p>
              </div>

              {/* Bottom Action: Bekijk in demo -> gaat naar demo formulier */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                <Link
                  to="/demo-aanvragen"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:translate-x-1 cursor-pointer ${module.linkStyle}`}
                >
                  <span>Bekijk in demo</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Explore All Link */}
      <div className="mt-16 text-center relative z-10">
        <Link
          to="/oplossingen"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white transition-colors group"
        >
          <span>Bekijk de volledige functionaliteiten en dashboards van alle applicaties</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
