import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Activity, 
  BatteryCharging, 
  Building2, 
  AlertTriangle, 
  CheckCircle2, 
  Zap, 
  TrendingUp, 
  Sparkles,
  Sliders,
  Eye
} from 'lucide-react';

interface PlatformPreviewSectionProps {
  onOpenModal?: (type?: 'demo' | 'trial', context?: string) => void;
}

interface ProjectConfig {
  id: string;
  name: string;
  category: string;
  contractCapacityKw: number;
  basePeakKw: number;
  mitigatedPeakKw: number;
  bessCapacityKwh: number;
  solarCapacityKwp: number;
  savedCostEur: number;
  avoidedDelayMonths: number;
}

const PROJECTS: ProjectConfig[] = [
  {
    id: 'brainport',
    name: 'Business Park Brainport',
    category: 'Logistiek & High-Tech (85.000 m²)',
    contractCapacityKw: 1800,
    basePeakKw: 2650,
    mitigatedPeakKw: 1680,
    bessCapacityKwh: 2000,
    solarCapacityKwp: 3200,
    savedCostEur: 385000,
    avoidedDelayMonths: 18
  },
  {
    id: 'zuidrand',
    name: 'Woonwijk De Zuidrand',
    category: 'Gebiedsontwikkeling (420 woningen)',
    contractCapacityKw: 950,
    basePeakKw: 1540,
    mitigatedPeakKw: 920,
    bessCapacityKwh: 1200,
    solarCapacityKwp: 1800,
    savedCostEur: 240000,
    avoidedDelayMonths: 14
  },
  {
    id: 'havenkwartier',
    name: 'DC Havenkwartier E-Truck Hub',
    category: 'Heavy Electric Transport (45 snelladers)',
    contractCapacityKw: 2200,
    basePeakKw: 3900,
    mitigatedPeakKw: 2150,
    bessCapacityKwh: 3500,
    solarCapacityKwp: 4500,
    savedCostEur: 520000,
    avoidedDelayMonths: 24
  }
];

export function PlatformPreviewSection({ onOpenModal }: PlatformPreviewSectionProps) {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('brainport');
  const [activeScenario, setActiveScenario] = useState<'unmitigated' | 'bess' | 'hub'>('hub');

  const project = PROJECTS.find((p) => p.id === selectedProjectId) || PROJECTS[0];

  const currentPeak = activeScenario === 'unmitigated' 
    ? project.basePeakKw 
    : activeScenario === 'bess' 
      ? Math.round((project.basePeakKw + project.mitigatedPeakKw) / 2) 
      : project.mitigatedPeakKw;

  const isOverloaded = currentPeak > project.contractCapacityKw;
  const loadPercentage = Math.round((currentPeak / project.contractCapacityKw) * 100);

  // 12 data bars representing hourly energy profile (06:00 to 22:00)
  const hourlyFactors = [0.45, 0.75, 1.15, 1.35, 1.25, 1.05, 0.95, 1.3, 1.45, 1.2, 0.85, 0.5];

  return (
    <section id="platform-demo" className="py-32 px-4 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Video from template */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          className="w-full h-full object-cover opacity-30 mix-blend-screen scale-105"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/chess.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-background via-background/90 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-background via-background/90 to-transparent" />
        <div className="absolute inset-0 bg-background/65 backdrop-blur-[2px]" />
        
        {/* Glow effect in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-primary/10 blur-[170px] rounded-full mix-blend-screen pointer-events-none" />
      </div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass border border-primary/30 mb-6 text-xs font-semibold text-primary">
          <Eye className="w-3.5 h-3.5" />
          <span>LIVE PLATFORM-PREVIEW</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
          Ervaar de VOSQ Intelligence Engine
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Ontdek hoe het VOSQ-platform gefragmenteerde vastgoeddata en netcongestie transformeert naar direct onderbouwde beslissingen. Test hieronder een realtime scenario.
        </p>
      </div>

      {/* Interactive Platform Container */}
      <div className="liquid-glass rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative z-10">
        {/* Top Demo Banner */}
        <div className="bg-gradient-to-r from-primary/15 via-white/5 to-primary/10 border-b border-white/10 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Demonstratiedashboard • Actieve Simulatie
            </span>
          </div>
        </div>

        {/* Dashboard Body */}
        <div className="p-6 sm:p-10">
          {/* Controls Bar: Asset Select & Scenario Toggle */}
          <div className="grid lg:grid-cols-12 gap-6 mb-10 pb-8 border-b border-white/10">
            {/* Project Picker */}
            <div className="lg:col-span-5 flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-primary" />
                Selecteer Voorbeeld-Asset
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {PROJECTS.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => setSelectedProjectId(proj.id)}
                    className={`text-left p-3 rounded-xl border text-xs font-medium transition-all ${
                      selectedProjectId === proj.id
                        ? 'bg-primary/20 border-primary text-white shadow-[0_0_15px_rgba(121,242,194,0.2)]'
                        : 'bg-white/5 border-white/5 text-muted-foreground hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <div className="font-semibold truncate">{proj.name}</div>
                    <div className="text-[10px] opacity-75 truncate">{proj.category.split('(')[0]}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Scenario Strategy Toggles */}
            <div className="lg:col-span-7 flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-primary" />
                Selecteer Intelligentie-Scenario
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button
                  onClick={() => setActiveScenario('unmitigated')}
                  className={`p-3 rounded-xl border text-xs font-medium transition-all text-left ${
                    activeScenario === 'unmitigated'
                      ? 'bg-rose-500/20 border-rose-500 text-rose-300'
                      : 'bg-white/5 border-white/5 text-muted-foreground hover:bg-white/10'
                  }`}
                >
                  <div className="font-bold flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    1. Basis (Zonder VOSQ)
                  </div>
                  <div className="text-[10px] opacity-80 mt-1">Onbeheerde pieken & congestie</div>
                </button>

                <button
                  onClick={() => setActiveScenario('bess')}
                  className={`p-3 rounded-xl border text-xs font-medium transition-all text-left ${
                    activeScenario === 'bess'
                      ? 'bg-blue-500/20 border-blue-400 text-blue-300'
                      : 'bg-white/5 border-white/5 text-muted-foreground hover:bg-white/10'
                  }`}
                >
                  <div className="font-bold flex items-center gap-1.5">
                    <BatteryCharging className="w-3.5 h-3.5" />
                    2. BESS Peak Shaving
                  </div>
                  <div className="text-[10px] opacity-80 mt-1">{project.bessCapacityKwh} kWh Batterijsturing</div>
                </button>

                <button
                  onClick={() => setActiveScenario('hub')}
                  className={`p-3 rounded-xl border text-xs font-medium transition-all text-left ${
                    activeScenario === 'hub'
                      ? 'bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(121,242,194,0.25)]'
                      : 'bg-white/5 border-white/5 text-muted-foreground hover:bg-white/10'
                  }`}
                >
                  <div className="font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    3. Smart Energy Hub
                  </div>
                  <div className="text-[10px] opacity-80 mt-1">Zon + BESS + Dynamisch laden</div>
                </button>
              </div>
            </div>
          </div>

          {/* Metric KPI Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="liquid-glass rounded-2xl p-4 border border-white/5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Gecontracteerd Vermogen</span>
              <div className="text-2xl font-bold text-white mt-1">{project.contractCapacityKw} kW</div>
              <span className="text-xs text-muted-foreground">Vastgestelde netaansluiting</span>
            </div>

            <div className={`liquid-glass rounded-2xl p-4 border transition-colors ${
              isOverloaded ? 'border-rose-500/50 bg-rose-500/10' : 'border-primary/30 bg-primary/5'
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Gesimuleerde Piek</span>
                {isOverloaded ? (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-rose-500/30 text-rose-300">OVERBELAST</span>
                ) : (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary/30 text-primary">VEILIG</span>
                )}
              </div>
              <div className={`text-2xl font-bold mt-1 ${isOverloaded ? 'text-rose-400' : 'text-primary'}`}>
                {currentPeak} kW
              </div>
              <span className="text-xs text-muted-foreground">{loadPercentage}% van netcapaciteit</span>
            </div>

            <div className="liquid-glass rounded-2xl p-4 border border-white/5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Vermeden Vertraging</span>
              <div className="text-2xl font-bold text-white mt-1">
                {activeScenario === 'unmitigated' ? '0 mnd' : `+ ${project.avoidedDelayMonths} mnd`}
              </div>
              <span className="text-xs text-muted-foreground">Directe bouw & exploitatie</span>
            </div>

            <div className="liquid-glass rounded-2xl p-4 border border-white/5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Geprojecteerde Besparing</span>
              <div className="text-2xl font-bold text-primary mt-1">
                {activeScenario === 'unmitigated' ? '€ 0' : `€ ${(project.savedCostEur / 1000).toFixed(0)}k+`}
              </div>
              <span className="text-xs text-muted-foreground">Vermeden netboetes & uitbreiding</span>
            </div>
          </div>

          {/* Visual 24h Load Curve Simulation */}
          <div className="liquid-glass rounded-2xl p-6 border border-white/10 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h4 className="font-bold text-white text-base flex items-center gap-2">
                  <Activity className="w-4 h-4 text-primary" />
                  24-Uurs Vermogensprofiel & Netcongestie Grens
                </h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Visualisatie van piekvraag ten opzichte van het gecontracteerde transportvermogen ({project.contractCapacityKw} kW)
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs font-medium">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <div className="w-3 h-3 rounded-sm bg-rose-500/80" />
                  <span>Capaciteitsgrens</span>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <div className="w-3 h-3 rounded-sm bg-primary" />
                  <span>VOSQ Profiel</span>
                </div>
              </div>
            </div>

            {/* Profile Chart Bars */}
            <div className="relative pt-6 pb-2">
              {/* Threshold line representing contract capacity */}
              <div 
                className="absolute inset-x-0 border-b-2 border-dashed border-rose-500/70 z-20 flex justify-end"
                style={{ top: '35%' }}
              >
                <span className="text-[10px] font-bold text-rose-400 bg-black/80 px-2 py-0.5 rounded -translate-y-1/2">
                  Max. Contractcapaciteit: {project.contractCapacityKw} kW
                </span>
              </div>

              {/* Bars */}
              <div className="grid grid-cols-12 gap-2 sm:gap-3 h-48 items-end relative z-10">
                {hourlyFactors.map((factor, index) => {
                  const hourPeak = Math.round(currentPeak * factor);
                  const isHourOverloaded = hourPeak > project.contractCapacityKw;
                  const heightPercent = Math.min(100, Math.max(15, Math.round((hourPeak / (project.contractCapacityKw * 1.5)) * 100)));

                  return (
                    <div key={index} className="flex flex-col items-center h-full justify-end group cursor-pointer">
                      <div className="text-[9px] font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mb-1">
                        {hourPeak}k
                      </div>
                      <div 
                        className={`w-full rounded-t-lg transition-all duration-500 relative ${
                          isHourOverloaded
                            ? 'bg-gradient-to-t from-rose-600 to-rose-400 shadow-[0_0_12px_rgba(244,63,94,0.4)]'
                            : 'bg-gradient-to-t from-primary/70 to-primary shadow-[0_0_12px_rgba(121,242,194,0.2)]'
                        }`}
                        style={{ height: `${heightPercent}%` }}
                      >
                        {isHourOverloaded && (
                          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        )}
                      </div>
                      <span className="text-[10px] font-medium text-muted-foreground mt-2">
                        {String(index * 2).padStart(2, '0')}:00
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
