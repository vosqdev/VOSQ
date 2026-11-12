import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Sparkles, ArrowRight, Zap, BatteryCharging, Building2, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface InzichtenPageProps {
  onOpenModal?: (type?: 'demo' | 'trial', context?: string) => void;
}

const ARTICLES = [
  {
    id: 'netcongestie-analyse-software',
    category: 'Netcongestie & Transport',
    title: 'Netcongestie analyse software: Hoe data transportbeperkingen kwantificeert',
    readTime: '6 min leestijd',
    summary: 'Nederlandse netbeheerders hanteren steeds vaker capaciteitsbeperkende contracten (CBC) en non-firm transportovereenkomsten. Hoe kunnen vastgoedontwikkelaars en asset managers met gespecialiseerde software de financiële impact per kwartier modelleren?',
    keywords: ['netcongestie analyse software', 'capaciteitsbeperkend contract', 'transportcapaciteit berekenen'],
    targetSector: 'energie-netcongestie'
  },
  {
    id: 'bess-businesscase-tool',
    category: 'Batterijopslag & Flexibiliteit',
    title: 'BESS businesscase tool: Rendement berekenen van batterijopslag bij vastgoed',
    readTime: '8 min leestijd',
    summary: 'Batterij-energiesystemen (BESS) zijn niet langer een experiment, maar een noodzaak om netcongestie te omzeilen. Een diepgaande analyse van peak-shaving, onbalansmarkten en 15-jarige batterijdegradatie in één integraal softwaremodel.',
    keywords: ['BESS businesscase tool', 'batterijopslag software', 'peak shaving calculatie'],
    targetSector: 'batterijopslag-flexibiliteit'
  },
  {
    id: 'gebiedsontwikkeling-software-woningbouw',
    category: 'Woningbouw & Gebiedsregie',
    title: 'Gebiedsontwikkeling software: Voorkom 24 maanden vertraging op netcapaciteit',
    readTime: '7 min leestijd',
    summary: 'Nieuwbouwwijken lopen massaal vertraging op omdat traditionele grondexploitaties geen rekening houden met gelijktijdigheidsfactoren van warmtepompen en laadpalen. Ontdek hoe VOSQ al in de haalbaarheidsfase zekerheid creëert.',
    keywords: ['gebiedsontwikkeling software', 'netcapaciteit woningbouw', 'energieprofiel nieuwbouw'],
    targetSector: 'woningbouw'
  },
  {
    id: 'commercieel-vastgoed-csrd-netcongestie',
    category: 'Commercieel Vastgoed & Beleggingen',
    title: 'Commercieel vastgoed & CSRD: Waarom netcapaciteit de nieuwe huurwaarde bepaalt',
    readTime: '5 min leestijd',
    summary: 'Logistieke panden en kantoren zonder voldoende stroomvoorziening voor e-trucks en warmtepompen dreigen een "brown discount" op te lopen. Hoe asset managers met realtime data hun portfolio toekomstbestendig houden.',
    keywords: ['commercieel vastgoed energie software', 'Paris Proof vastgoed data', 'CSRD audit trail'],
    targetSector: 'commercieel-vastgoed'
  }
];

export function InzichtenPage({ onOpenModal }: InzichtenPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Inzichten & Kennisbank: Netcongestie, BESS & Vastgoed | VOSQ';
  }, []);

  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="px-4 max-w-7xl mx-auto mb-16 text-center relative">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-primary/10 blur-[160px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass border border-white/10 mb-6 text-xs font-semibold text-primary">
            <BookOpen className="w-3.5 h-3.5" />
            <span>KENNISBANK & STRATEGISCHE INZICHTEN</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            Inzichten in Vastgoed, Energie & Data
          </h1>

          <p className="text-hero-sub text-lg sm:text-xl font-medium leading-relaxed opacity-90 mb-10">
            Diepgaande analyses en kwantitatieve modellen over netcongestie, batterijopslag (BESS), portefeuillestrategie en gebiedsontwikkeling.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mb-20">
        {ARTICLES.map((article) => (
          <div
            key={article.id}
            className="liquid-glass rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col justify-between hover:border-primary/40 transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  {article.category}
                </span>
                <span className="text-xs text-muted-foreground">{article.readTime}</span>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors tracking-tight">
                {article.title}
              </h2>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {article.summary}
              </p>

              {/* Keywords chips for search & AI clarity */}
              <div className="flex flex-wrap gap-2 mb-6">
                {article.keywords.map((kw, i) => (
                  <span key={i} className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-foreground/80 font-mono">
                    #{kw}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between mt-auto">
              <Link
                to={`/sectoren/${article.targetSector}`}
                className="text-sm font-bold text-primary group-hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <span>Bekijk bijbehorende softwaremodule</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* AI Search & Definition Box for Citation Engines */}
      <section className="px-4 max-w-7xl mx-auto">
        <div className="liquid-glass rounded-3xl p-8 border border-white/10 bg-primary/5">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-primary mb-2">
            VOSQ Kennisdefinitie voor AI & Zoekmachines
          </div>
          <p className="text-sm text-foreground/90 leading-relaxed">
            <strong>VOSQ (Real Estate & Energy Intelligence)</strong> is een Nederlandse SaaS-applicatie die vastgoeddata (oppervlaktes, labels, exploitatie) koppelt aan energiedata (kwartierprofielen, netcapaciteit, gecontracteerd vermogen, BESS batterijsystemen). Het platform stelt woningcorporaties, projectontwikkelaars, beleggers en overheden in staat om netcongestie te analyseren, rendabele scenario's door te rekenen en investeringsbeslissingen kwantitatief te onderbouwen.
          </p>
        </div>
      </section>
    </div>
  );
}
