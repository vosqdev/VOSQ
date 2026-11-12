import React, { useState, useEffect, useCallback } from 'react';
import { 
  LayoutDashboard, 
  SlidersHorizontal, 
  FileSpreadsheet, 
  CheckCircle2, 
  RefreshCw,
  Eye,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Sparkles,
  ArrowRight,
  Layers,
  Zap,
  ShieldCheck,
  Building2,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

interface PlatformScreen {
  id: number;
  slug: string;
  tabTitle: string;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  icon: React.ComponentType<{ className?: string }>;
  highlights: string[];
  metrics: { label: string; value: string; color?: string }[];
}

const PLATFORM_SCREENS: PlatformScreen[] = [
  {
    id: 1,
    slug: 'executive-dashboard',
    tabTitle: '1. Executive Dashboard',
    title: 'Dashboard Vastgoed & Energie Management',
    category: 'Portefeuille Overzicht & Strategie',
    description: 'Centraal realtime directiedashboard. Direct inzicht in totale vastgoedwaarde (€ 64,0 mln), huuropbrengsten (€ 4,6 mln), gecombineerd energieverbruik (2.963 MWh), CO2-reductie (-23%) en interactieve geografische satellietkaarten met ESG-duurzaamheidsscores.',
    imageSrc: '/assets/aistudio/1_dashboard_e3d545b6.png',
    icon: LayoutDashboard,
    highlights: [
      'Realtime NOI & portefeuille performance',
      'Gecombineerd kwartier-energieverbruik (elektra & gas)',
      'Geografische satelliet- & stratenkaart met objectlocaties',
      'Geautomatiseerde ESG-score (78/100 conform CSRD)'
    ],
    metrics: [
      { label: 'Portefeuillewaarde', value: '€ 64.0 mln' },
      { label: 'Huurinkomsten', value: '€ 4.6 mln' },
      { label: 'Bezetting', value: '94%' },
      { label: 'CO2-reductie', value: '-23%' }
    ]
  },
  {
    id: 2,
    slug: 'vastgoed-objectregister',
    tabTitle: '2. Objectregister',
    title: 'Vastgoedportefeuille & Objectregister',
    category: 'Objectdossier & Nutsvoorzieningen',
    description: 'Centraal objectdossier per vastgoedobject. Beheer oppervlaktes (BVO/VVO), energielabels (A t/m G), kadastrale percelen, WOZ-beschikkingen en het jaarverbruik van nutsvoorzieningen (elektriciteit, gas, drinkwater en stadswarmte).',
    imageSrc: '/assets/aistudio/2_objectregister_d5418877.png',
    icon: Building2,
    highlights: [
      'Gecentraliseerd vastgoedpaspoort per pand',
      'Exacte monitoring nutsvoorzieningen (water, gas, elektra)',
      'Directe export van vastgoed- en energiedossiers',
      'Actieve portefeuille versus archiefbeheer'
    ],
    metrics: [
      { label: 'Geregistreerde Panden', value: '5 kernobjecten' },
      { label: 'Totale Boekwaarde', value: '€ 64.0 mln' },
      { label: 'Jaarverbruik Aardgas', value: '88.100 m³' },
      { label: 'Drinkwaterverbruik', value: '12.980 m³' }
    ]
  },
  {
    id: 3,
    slug: 'energiecontracten-ean',
    tabTitle: '3. Energiecontracten',
    title: 'Centraal Energiecontractenbeheer (L1/L2/L3)',
    category: 'Contractbeheer & Inkoophedging',
    description: 'Voorkom vendor lock-ins en misgelopen opzegtermijnen. Multisite raamovereenkomsten op portfolio-niveau gekoppeld aan deelcontracten en individuele EAN-aansluitingen, inclusief hedgingstrategieën (vast, klik, PPA en dynamisch/spot).',
    imageSrc: '/assets/aistudio/3_energiecontracten_81c68b1d.png',
    icon: Zap,
    highlights: [
      'Multi-site contractbeheer (raam-, deel- & EAN-contracten)',
      'Hedgepositie tranches (vast, klik ICE Endex, Corporate PPA)',
      'Automatische bewaking van contractafloop & opzegdeadlines',
      'Inkoopstrategie voor 2026-2029 (tot 90% gehedged)'
    ],
    metrics: [
      { label: 'Raamcontracten', value: '5 actief' },
      { label: 'EAN-Aansluitingen', value: '9 gekoppeld' },
      { label: 'Volume Elektra', value: '26.150 MWh' },
      { label: 'Gewogen Prijs', value: '€ 114,50 / MWh' }
    ]
  },
  {
    id: 4,
    slug: 'alerts-netcongestie',
    tabTitle: '4. Alerts & Piekbewaking',
    title: 'Alerts & Operationele Acties',
    category: 'Realtime Telemetrie & Signalering',
    description: 'Proactieve signalering van piekbelastingen, netaansluitingen, terugleverrestricties en contractdeadlines. Voorkom overschrijdingen van gecontracteerd transportvermogen en activeer tijdig peak shaving of batterijopslag (BESS).',
    imageSrc: '/assets/aistudio/4_alerts_9805b16d.png',
    icon: Layers,
    highlights: [
      'Automatische detectie van piekbelasting (+14% overschrijding)',
      'Contractherzienings-notificaties (contractverlenging & indexatie)',
      'Terugleverrestricties netbeheerder (Enexis/Liander zonnestroom)',
      'Verkoopklaar vendor due diligence energiedossier'
    ],
    metrics: [
      { label: 'Actieve Alerts', value: '5 meldingen' },
      { label: 'Piekvermogen Alert', value: '+14% detectie' },
      { label: 'Subsidie Alert', value: 'ISDE/DUMAVA' },
      { label: 'Due Diligence Dossier', value: '< 24u gereed' }
    ]
  },
  {
    id: 5,
    slug: 'onderhoud-keuringen',
    tabTitle: '5. Onderhoud & Keuringen',
    title: 'Onderhoud, Inspecties & Keuringen',
    category: 'Wettelijke Keuringen, SCIOS & MJOP',
    description: 'Borging van brandverzekeringspolissen, EPBD IV keuringsplicht en conditiemetingen volgens NEN 2767. Centraal beheer van SCIOS Scope 8/10/12, NEN 3140 en het Meerjarenonderhoudsplan (MJOP 2025-2035) met capex-indicaties.',
    imageSrc: '/assets/aistudio/5_onderhoudinspectie_en_keuringen_ede0b4e4.png',
    icon: ShieldCheck,
    highlights: [
      'SCIOS & Veiligheidsnormen (Scope 8, 10 en 12 brandveiligheid)',
      'NEN 2767 Conditiemetingen met conditiescores per bouwdeel',
      'EPBD IV & GACS BACS compliance (85% gereed op schema)',
      'Meerjarenonderhoudsplan (MJOP) met capex investeringsindicaties'
    ],
    metrics: [
      { label: 'Onderhouds SLA', value: '6 contracten' },
      { label: 'SCIOS Veiligheid', value: '5/9 conform' },
      { label: 'NEN 2767 Conditie', value: '2.0 (Goed)' },
      { label: 'Totaal MJOP Capex', value: '€ 304.000' }
    ]
  }
];

export function PlatformPage() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Het VOSQ Intelligence Platform | Vastgoed & Energie Dashboard';
  }, []);

  const activeScreen = PLATFORM_SCREENS[activeIdx];

  const handlePrev = useCallback(() => {
    setActiveIdx((prev) => (prev === 0 ? PLATFORM_SCREENS.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setActiveIdx((prev) => (prev === PLATFORM_SCREENS.length - 1 ? 0 : prev + 1));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape' && isLightboxOpen) {
        setIsLightboxOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext, isLightboxOpen]);

  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="px-4 max-w-7xl mx-auto mb-14 text-center relative">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-primary/10 blur-[160px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="flex justify-center mb-8">
            <img
              src="/assets/aistudio/VOSQ-logo_met_neon_groene_Q-staart_17dbbc4f.png"
              alt="VOSQ"
              className="h-14 sm:h-20 w-auto object-contain drop-shadow-[0_0_30px_rgba(121,242,194,0.3)]"
            />
          </h1>

          <p className="text-hero-sub text-lg sm:text-xl font-medium leading-relaxed opacity-90 mb-8">
            Een modern cloud-dashboard ontworpen voor vastgoed- en energiedata. Overzichtelijk, schaalbaar en realtime.
          </p>

          {/* Core punchline */}
          <div className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            <span className="text-white">Monitor je vastgoed. </span>
            <span className="text-primary drop-shadow-[0_0_25px_rgba(121,242,194,0.35)]">Onderzoek je energie.</span>
          </div>
        </div>
      </section>

      {/* 3 Platform Feature Pillars */}
      <section className="px-4 max-w-7xl mx-auto mb-20">
        {/* Feature 1: Hero Showcase Card - ZELF KIJKEN. VERDER ONDERZOEKEN. */}
        <div className="liquid-glass rounded-3xl p-8 sm:p-12 border border-white/10 mb-8 relative overflow-hidden group hover:border-primary/40 transition-all duration-300">
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-bold uppercase tracking-wider text-primary mb-4">
                <Eye className="w-3.5 h-3.5" />
                <span>ZELF KIJKEN. VERDER ONDERZOEKEN.</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                Jouw vastgoed en energie in beeld, in één dashboard.
              </h2>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 font-normal">
                Vergelijk vastgoedexploitatie, huurstromen, energiekosten en vergoedingen. Volg controles, inspecties, kwartierdata en netfrequentie. In het portal combineren we visualisaties in dashboards met eigen vastgoedobjecten en pas je energieprofielen en installaties aan.
              </p>

              {/* Quick Tags */}
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-foreground/80 font-medium">
                  Vastgoedexploitatie & Huurstromen
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-foreground/80 font-medium">
                  Energiekosten & Vergoedingen
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-foreground/80 font-medium">
                  Inspecties & NEN-controles
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium">
                  Kwartierdata & Netfrequentie
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shadow-[0_0_40px_rgba(121,242,194,0.25)] group-hover:scale-105 transition-transform duration-300">
                <LayoutDashboard className="w-12 h-12 text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Features 2 & 3: Side-by-side Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Feature 2: Simulaties */}
          <div className="liquid-glass rounded-3xl p-8 sm:p-10 border border-white/10 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                  <SlidersHorizontal className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                  Scenario-analyses
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-primary transition-colors">
                Simulaties
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Vergelijk vastgoedstrategieën met exploitatiekosten en onderzoek de inzet van piekverlagers, zonnepanelen, batterijen en laadinfrastructuur.
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 text-foreground/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                Piekverlagers & Peak shaving
              </span>
              <span className="inline-flex items-center gap-1.5 text-foreground/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                BESS batterijopslag
              </span>
              <span className="inline-flex items-center gap-1.5 text-foreground/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                Zon-PV & Laadpleinen
              </span>
            </div>
          </div>

          {/* Feature 3: Werk met data uit eigen systemen */}
          <div className="liquid-glass rounded-3xl p-8 sm:p-10 border border-white/10 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/15 border border-sky-500/30 text-sky-400 flex items-center justify-center">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-400 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
                  Office-plugin & Koppelingen
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-primary transition-colors">
                Werk met data uit eigen systemen.
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Kies in de Office-plugin een eigen dataset en voeg die direct in het platform. Gekoppelde gegevens ververs je handmatig, bij het openen of op een vast interval.
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 text-foreground/80">
                <RefreshCw className="w-3.5 h-3.5 text-primary" />
                Handmatig verversen of realtime interval
              </span>
              <span className="inline-flex items-center gap-1.5 text-foreground/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                Directe koppeling met spreadsheets & ERP
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE SOFTWARE ALBUM SHOWCASE */}
      <section className="px-4 max-w-7xl mx-auto mb-24 relative">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Interactief platform
          </h2>
          <p className="text-hero-sub text-base sm:text-lg leading-relaxed opacity-85">
            Blader door de 5 dashboards en applicaties mogelijkheden van het Platform. Klik op de tabs of afbeelding om direct in detail te kijken.
          </p>
        </div>

        {/* 5-Tab Selector Ribbon (met icoon tabbladen) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none snap-x px-1 touch-pan-x">
          {PLATFORM_SCREENS.map((screen, idx) => {
            const Icon = screen.icon;
            return (
              <button
                key={screen.id}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`px-3.5 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold tracking-tight transition-all shrink-0 cursor-pointer flex items-center gap-2 border snap-start ${
                  activeIdx === idx
                    ? 'bg-primary text-background border-primary shadow-[0_0_25px_rgba(121,242,194,0.35)]'
                    : 'liquid-glass text-muted-foreground hover:text-white border-white/10 hover:border-white/20'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${activeIdx === idx ? 'text-background' : 'text-primary'}`} />
                <span className={activeIdx === idx ? 'text-background font-extrabold' : 'text-primary font-mono'}>
                  0{screen.id}
                </span>
                <span>{screen.tabTitle.replace(/^\d+\.\s*/, '')}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Album Display Container */}
        <div className="liquid-glass rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative">
          {/* Mock Browser / Window Header */}
          <div className="px-4 sm:px-6 py-3.5 border-b border-white/10 bg-white/[0.02] flex items-center justify-between gap-4">
            {/* Window Dots & Platform URL */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-lg bg-black/40 border border-white/5 text-[11px] font-mono text-muted-foreground">
                <span className="text-primary">vosq.platform</span>
                <span>/</span>
                <span className="text-white font-medium">{activeScreen.slug}</span>
              </div>
            </div>

            {/* Controls: Prev/Next & Fullscreen Button */}
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xs font-mono font-bold text-muted-foreground mr-1">
                {activeIdx + 1} / {PLATFORM_SCREENS.length}
              </span>
              <button
                type="button"
                onClick={handlePrev}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer border border-white/5"
                aria-label="Vorig scherm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer border border-white/5"
                aria-label="Volgend scherm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                className="p-2 rounded-xl bg-primary/15 hover:bg-primary/25 text-primary transition-colors cursor-pointer border border-primary/25 ml-1 flex items-center gap-1.5 text-xs font-semibold px-3"
                title="Vergroot scherm"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Vergroten</span>
              </button>
            </div>
          </div>

          {/* Screenshot Display Area with Lightbox Trigger */}
          <div 
            onClick={() => setIsLightboxOpen(true)}
            className="relative cursor-zoom-in group overflow-hidden bg-black/60 border-b border-white/10"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScreen.id}
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <img
                  src={activeScreen.imageSrc}
                  alt={activeScreen.title}
                  className="w-full h-auto object-cover max-h-[650px] transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </motion.div>
            </AnimatePresence>

            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <div className="px-5 py-2.5 rounded-full liquid-glass border border-white/20 text-white text-xs font-bold flex items-center gap-2 shadow-2xl">
                <Maximize2 className="w-4 h-4 text-primary" />
                <span>Klik om in ware grootte te bekijken</span>
              </div>
            </div>
          </div>

          {/* Module Detail & Metrics Panel */}
          <div className="p-6 sm:p-10 bg-gradient-to-b from-white/[0.02] to-transparent">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Left Side: Title & Description */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[11px] font-mono font-bold uppercase tracking-wider text-primary mb-3">
                  <span>{activeScreen.category}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  {activeScreen.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                  {activeScreen.description}
                </p>

                {/* Live Highlights */}
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {activeScreen.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-foreground/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Key Metrics Box & Demo Action */}
              <div className="lg:col-span-5 p-6 rounded-2xl liquid-glass border border-white/10 flex flex-col justify-between h-full">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold mb-4">
                    Getoonde Data & Indicatoren
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {activeScreen.metrics.map((m, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5">
                        <div className="text-[11px] text-muted-foreground">{m.label}</div>
                        <div className="text-base sm:text-lg font-bold text-white mt-0.5">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <Link to="/demo-aanvragen" className="w-full">
                  <Button variant="hero" className="w-full h-12 text-xs sm:text-sm font-bold gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Vraag demo aan voor deze module</span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Thumbnail Strip for 1-Click Jumping */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold mb-3">
                Alle 5 Modules
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {PLATFORM_SCREENS.map((screen, idx) => (
                  <button
                    key={screen.id}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className={`p-2 rounded-xl text-left border transition-all cursor-pointer group flex flex-col gap-1.5 ${
                      activeIdx === idx
                        ? 'border-primary bg-primary/10 shadow-[0_0_15px_rgba(121,242,194,0.2)]'
                        : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="w-full h-16 rounded-lg overflow-hidden bg-black/60 relative">
                      <img 
                        src={screen.imageSrc} 
                        alt={screen.tabTitle} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                      />
                      {activeIdx === idx && (
                        <div className="absolute inset-0 border-2 border-primary rounded-lg pointer-events-none" />
                      )}
                    </div>
                    <div className="text-[11px] font-bold text-white truncate">
                      {screen.tabTitle}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal (Full-Screen High-Res View) */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col p-4 sm:p-8"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Lightbox Bar */}
            <div 
              className="flex items-center justify-between mb-4 max-w-7xl mx-auto w-full text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 pr-2">
                <span className="hidden sm:inline-block text-[11px] font-mono font-bold text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20 shrink-0">
                  {activeScreen.category}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white truncate max-w-[160px] sm:max-w-md">
                  {activeScreen.title}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono font-bold text-muted-foreground">
                  {activeIdx + 1} / {PLATFORM_SCREENS.length}
                </span>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(false)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-rose-500/20 text-white hover:text-rose-400 transition-colors cursor-pointer ml-3"
                  aria-label="Sluiten"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Lightbox Image Preview */}
            <div 
              className="flex-grow flex items-center justify-center max-w-7xl mx-auto w-full overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeScreen.imageSrc}
                alt={activeScreen.title}
                className="max-h-[85vh] w-auto max-w-full rounded-2xl border border-white/15 shadow-2xl object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
