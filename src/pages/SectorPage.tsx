import React, { useEffect } from 'react';
import { useParams, Link, Navigate, useLocation } from 'react-router-dom';
import { 
  Building, 
  Building2, 
  Zap, 
  BatteryCharging, 
  Sun, 
  Landmark, 
  AlertTriangle, 
  ChevronRight
} from 'lucide-react';
import { SECTORS, SectorData } from '@/data/sectorsData';

const sectorIcons: Record<string, React.ReactNode> = {
  'woningbouw': <Building className="w-6 h-6 text-primary" />,
  'commercieel-vastgoed': <Building2 className="w-6 h-6 text-primary" />,
  'energie-netcongestie': <Zap className="w-6 h-6 text-primary" />,
  'batterijopslag-flexibiliteit': <BatteryCharging className="w-6 h-6 text-primary" />,
  'duurzame-energie-opwek': <Sun className="w-6 h-6 text-primary" />,
  'overheden-maatschappelijk': <Landmark className="w-6 h-6 text-primary" />
};

export function SectorPage() {
  const { sectorSlug } = useParams<{ sectorSlug: string }>();
  const location = useLocation();

  // Find sector by slug, alias, or pathname
  const sector = SECTORS.find((s) => {
    if (sectorSlug && (s.slug === sectorSlug || s.aliases.includes(sectorSlug))) {
      return true;
    }
    const cleanPath = decodeURIComponent(location.pathname).toLowerCase();
    if (cleanPath.includes(s.slug)) return true;
    return s.aliases.some((alias) => cleanPath.includes(alias.toLowerCase()));
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (sector) {
      document.title = `${sector.metaTitle} | VOSQ`;
    }
  }, [sector]);

  if (!sector) {
    return <Navigate to="/sectoren/woningbouw" replace />;
  }

  return (
    <div className="pt-28 pb-20">
      {/* Sector Hero */}
      <section className="px-4 max-w-7xl mx-auto mb-20 relative">
        {/* Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[160px] rounded-full pointer-events-none mix-blend-screen" />

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-6 relative z-10">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/#sectoren" className="hover:text-primary transition-colors">Sectoren</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white font-semibold">{sector.title}</span>
        </div>

        {/* Badge & H1 with Target Keyword */}
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass border border-white/10 mb-6 text-xs font-semibold text-primary">
            {sectorIcons[sector.id]}
            <span>{sector.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            {sector.h1}
          </h1>

          <p className="text-hero-sub text-lg sm:text-xl font-medium leading-relaxed opacity-90 mb-8 max-w-3xl">
            {sector.summary}
          </p>


        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-white/10 relative z-10">
          {sector.metrics.map((metric, i) => (
            <div key={i} className="liquid-glass rounded-2xl p-6 border border-white/5">
              <div className="text-3xl sm:text-4xl font-extrabold text-primary mb-1 tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges Section */}
      <section className="px-4 max-w-7xl mx-auto py-16">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block mb-2">
            Sector-Uitdagingen
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Waar organisaties in {sector.title.toLowerCase()} tegenaan lopen
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {sector.challenges.map((challenge, i) => (
            <div key={i} className="liquid-glass rounded-3xl p-8 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center mb-6">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {challenge.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {challenge.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 mt-auto">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 block mb-1">
                  Financiële & Operationele Impact:
                </span>
                <span className="text-xs text-foreground/90 font-medium">
                  {challenge.impact}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* Other Sectors Navigation */}
      <section className="px-4 max-w-7xl mx-auto py-16 border-t border-white/10">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold text-white">Bekijk andere sectoren</h3>
          <Link to="/#sectoren" className="text-xs font-bold uppercase tracking-wider text-primary hover:text-white transition-colors">
            Alle sectoren bekijken →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {SECTORS.filter((s) => s.id !== sector.id).slice(0, 5).map((other) => (
            <Link
              key={other.id}
              to={`/sectoren/${other.slug}`}
              className="liquid-glass rounded-2xl p-4 border border-white/5 hover:border-primary/40 transition-colors group block"
            >
              <div className="text-sm font-bold text-white group-hover:text-primary transition-colors truncate">
                {other.title}
              </div>
              <div className="text-[11px] text-muted-foreground truncate mt-1">
                {other.badge}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
