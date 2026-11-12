import React, { useEffect } from 'react';
import { 
  Building2, 
  Zap, 
  Layers, 
  ShieldCheck, 
  TrendingUp, 
  FileText, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

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
    description: 'Compleet vastgoedregister inclusief oppervlaktes (BVO/VVO), WOZ-beschikkingen, kadastrale percelen, energielabels en splitsingsaktes.',
    slug: 'vastgoedportefeuille-objectbeheer',
    badgeStyle: 'bg-sky-500/15 border-sky-500/25 text-sky-400',
    linkStyle: 'text-sky-400 hover:text-sky-300',
    icon: Building2,
  },
  {
    id: 'energiemonitor-netcongestie',
    numberTitle: '2. Energiemonitor & Netcongestie',
    description: 'Telemetrie-koppeling met kwartierdata. Automatische piekdetectie, peak shaving simulatie en beheer van industriële batterijopslag (BESS).',
    slug: 'energiemonitor-kwartierdata',
    badgeStyle: 'bg-amber-500/15 border-amber-500/25 text-amber-400',
    linkStyle: 'text-amber-400 hover:text-amber-300',
    icon: Zap,
  },
  {
    id: 'centraal-contractenbeheer',
    numberTitle: '3. Centraal Contractenbeheer (L1/L2/L3)',
    description: 'Voorkom vendor lock-ins. Raamovereenkomsten op portfolio-niveau gekoppeld aan deelcontracten en individuele EAN-aansluitingen.',
    slug: 'energiecontract-ean-management',
    badgeStyle: 'bg-indigo-500/15 border-indigo-500/25 text-indigo-400',
    linkStyle: 'text-indigo-400 hover:text-indigo-300',
    icon: Layers,
  },
  {
    id: 'onderhoud-scios-keuringen',
    numberTitle: '4. Onderhoud, SCIOS & Keuringen',
    description: 'Borging van brandverzekeringspolissen (SCIOS Scope 8/10), EPBD IV keuringsplicht en conditiemeting volgens NEN 2767.',
    slug: 'onderhoud-keuringen-gacs',
    badgeStyle: 'bg-emerald-500/15 border-emerald-500/25 text-emerald-400',
    linkStyle: 'text-emerald-400 hover:text-emerald-300',
    icon: ShieldCheck,
  },
  {
    id: 'huurders-servicekosten',
    numberTitle: '5. Huurders & Servicekosten',
    description: 'Los de split-incentive op. Sluitende afrekeningen van nutsvoorzieningen per huurder en m², met minimale leegstandslekkage.',
    slug: 'huurdersadministratie-kostenallocatie',
    badgeStyle: 'bg-purple-500/15 border-purple-500/25 text-purple-400',
    linkStyle: 'text-purple-400 hover:text-purple-300',
    icon: TrendingUp,
  },
  {
    id: 'exit-desinvesteringsworkflow',
    numberTitle: '6. Exit- & Desinvesteringsworkflow',
    description: 'Maak een asset binnen 24 uur verkoopklaar. Directe ontkoppeling van EAN-codes en export van een waterdicht vendor due diligence dossier.',
    slug: 'financien-exploitatie-esg',
    badgeStyle: 'bg-rose-500/15 border-rose-500/25 text-rose-400',
    linkStyle: 'text-rose-400 hover:text-rose-300',
    icon: FileText,
  },
];

export function OplossingenPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Software Oplossingen | VOSQ Real Estate & Energy Intelligence';
  }, []);

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          className="w-full h-full object-cover opacity-25 mix-blend-screen scale-105"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/features.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-background via-background/90 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-background via-background/90 to-transparent" />
        <div className="absolute inset-0 bg-background/65 backdrop-blur-[2px]" />
        
        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-primary/10 blur-[170px] rounded-full mix-blend-screen" />
      </div>

      <div className="px-4 max-w-7xl mx-auto relative z-10">
        {/* Header matching screenshot */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass border border-white/10 mb-6 text-xs font-semibold text-primary">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VOSQ SAAS SUITE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-5 leading-[1.12]">
            Zes complementaire modules in één platform
          </h1>
          <p className="text-hero-sub text-base sm:text-xl font-normal leading-relaxed opacity-85 max-w-3xl mx-auto">
            Ontworpen vanuit de praktijk van Nederlandse vastgoedbeleggers en technisch beheerders.
          </p>
        </div>

        {/* 6 Modules Grid (2 rows x 3 columns) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SIX_MODULES.map((module) => {
            const Icon = module.icon;
            return (
              <div
                key={module.id}
                className="liquid-glass rounded-3xl p-8 sm:p-9 flex flex-col justify-between border border-white/10 hover:border-primary/40 shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300 relative group overflow-hidden"
              >
                <div>
                  {/* Icon Badge */}
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 shadow-inner transition-colors duration-300 ${module.badgeStyle}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Number & Title */}
                  <h2 className="text-xl sm:text-[1.35rem] font-bold text-white mb-3 tracking-tight group-hover:text-primary transition-colors">
                    {module.numberTitle}
                  </h2>

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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
