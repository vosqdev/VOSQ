import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Building2, 
  Zap, 
  FileText, 
  Users, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  ChevronRight, 
  Layers,
  LayoutDashboard,
  HelpCircle,
  Activity
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PRODUCTS, ProductGroup } from '@/data/productsData';

interface ProductDetailPageProps {
  onOpenModal?: (type?: 'demo' | 'trial', context?: string) => void;
}

const productIcons: Record<string, React.ReactNode> = {
  'vastgoedportefeuille-objectbeheer': <Building2 className="w-6 h-6 text-primary" />,
  'energiemonitor-kwartierdata': <Zap className="w-6 h-6 text-primary" />,
  'energiecontract-ean-management': <FileText className="w-6 h-6 text-primary" />,
  'huurdersadministratie-kostenallocatie': <Users className="w-6 h-6 text-primary" />,
  'onderhoud-keuringen-gacs': <ShieldCheck className="w-6 h-6 text-primary" />,
  'financien-exploitatie-esg': <TrendingUp className="w-6 h-6 text-primary" />,
};

export function ProductDetailPage({ onOpenModal }: ProductDetailPageProps) {
  const { productSlug } = useParams<{ productSlug: string }>();

  const product = PRODUCTS.find((p) => p.slug === productSlug || p.id === productSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      document.title = `${product.metaTitle} | VOSQ`;
    }
  }, [product]);

  if (!product) {
    return <Navigate to="/oplossingen" replace />;
  }

  // Schema.org FAQPage & SoftwareApplication JSON-LD
  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": `VOSQ - ${product.title}`,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web Cloud SaaS",
        "description": product.metaDescription,
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "EUR",
          "name": "Live Demonstratie"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": product.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="pt-28 pb-20">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      {/* Hero Section */}
      <section className="px-4 max-w-7xl mx-auto mb-16 relative">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-primary/10 blur-[160px] rounded-full pointer-events-none mix-blend-screen" />

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-6 relative z-10">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/oplossingen" className="hover:text-primary transition-colors">Software</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white font-semibold">{product.title}</span>
        </div>

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass border border-white/10 mb-6 text-xs font-semibold text-primary">
            {productIcons[product.id]}
            <span>{product.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            {product.h1}
          </h1>

          {/* Direct Definition Box for AI / Search Engines */}
          <div className="p-4 rounded-2xl liquid-glass border border-primary/20 bg-primary/5 text-sm text-foreground/90 leading-relaxed mb-8">
            <strong className="text-primary block mb-1">Definitie & Functie:</strong>
            {product.definition}
          </div>

          <p className="text-hero-sub text-lg sm:text-xl font-medium leading-relaxed opacity-90 max-w-3xl">
            {product.tagline}
          </p>
        </div>
      </section>

      {/* 1. Het Probleem */}
      <section className="px-4 max-w-7xl mx-auto py-16">
        <div className="liquid-glass rounded-3xl p-8 sm:p-12 border border-rose-500/20 bg-rose-500/5 relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-400">
              1. Het Probleem in de Markt
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Waarom traditioneel beheer vastloopt
          </h2>

          <p className="text-hero-sub text-base sm:text-lg leading-relaxed mb-6 text-foreground/90">
            {product.problem.summary}
          </p>

          <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-rose-500/20">
            {product.problem.points.map((pt, i) => (
              <div key={i} className="p-4 rounded-xl bg-black/40 border border-rose-500/10 text-xs text-rose-200/90 leading-relaxed">
                • {pt}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. De VOSQ Oplossing & Modules */}
      <section className="px-4 max-w-7xl mx-auto py-16">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block mb-2">
            2. De VOSQ Oplossing & Modules
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Gestructureerde modules voor {product.title.toLowerCase()}
          </h2>
          <p className="text-muted-foreground text-base mt-2">
            {product.solution.summary}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.solution.modules.map((mod, i) => (
            <div key={i} className="liquid-glass rounded-3xl p-8 border border-white/10 hover:border-primary/40 transition-colors flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-6 shadow-inner">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-primary transition-colors">
                  {mod.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {mod.description}
                </p>
              </div>

              {mod.kpi && (
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 mt-auto">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Kwantitatieve KPI</div>
                  <div className="text-xs font-bold text-primary mt-0.5">{mod.kpi}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 3. Voorbeeld van het Dashboard */}
      <section className="px-4 max-w-7xl mx-auto py-16">
        <div className="liquid-glass rounded-3xl p-8 sm:p-14 border border-white/10 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">
              3. Voorbeeld van het Dashboard
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 tracking-tight">
            Hoe de {product.title} interface werkt
          </h2>

          {/* Top Panel Preview */}
          <div className="p-6 rounded-2xl liquid-glass border border-white/10 mb-6 bg-white/5">
            <div className="text-xs font-mono uppercase tracking-wider text-primary font-bold mb-2">
              {product.dashboard.top.label}
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              {product.dashboard.top.description}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {product.dashboard.top.kpis.map((kpi, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-black/40 border border-white/5 text-center">
                  <div className="text-[10px] uppercase font-bold text-muted-foreground truncate">{kpi.title}</div>
                  <div className="text-lg font-bold text-white mt-1">
                    {kpi.value} <span className="text-xs font-normal text-primary">{kpi.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center Panel Preview */}
          <div className="p-6 rounded-2xl liquid-glass border border-white/10 mb-6 bg-white/5">
            <div className="text-xs font-mono uppercase tracking-wider text-primary font-bold mb-2">
              {product.dashboard.center.label}
            </div>
            <p className="text-sm text-foreground/90 leading-relaxed">
              {product.dashboard.center.description}
            </p>
          </div>

          {/* Bottom Panel Preview */}
          <div className="p-6 rounded-2xl liquid-glass border border-white/10 bg-white/5">
            <div className="text-xs font-mono uppercase tracking-wider text-primary font-bold mb-2">
              {product.dashboard.bottom.label}
            </div>
            <p className="text-sm text-foreground/90 leading-relaxed">
              {product.dashboard.bottom.description}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Veelgestelde Vragen (FAQ met Schema.org) */}
      <section className="px-4 max-w-7xl mx-auto py-16">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass border border-white/10 text-xs font-bold text-primary mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>VEELGESTELDE VRAGEN</span>
          </div>
          <h2 className="text-3xl font-bold text-white">
            Vragen over {product.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {product.faqs.map((faq, i) => (
            <div key={i} className="liquid-glass rounded-2xl p-6 border border-white/10">
              <h3 className="text-base font-bold text-white mb-2">{faq.question}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Call-to-Action (CTA) */}
      <section className="px-4 max-w-7xl mx-auto py-16">
        <div className="liquid-glass rounded-[2.5rem] p-10 sm:p-16 border border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block mb-3">
              4. Call-to-Action
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {product.cta.headline}
            </h2>
            <p className="text-hero-sub text-base sm:text-lg mb-8 opacity-90">
              {product.cta.text}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="hero"
                size="lg"
                onClick={() => onOpenModal?.('demo', `CTA Product: ${product.title}`)}
                className="h-14 px-8 text-base font-bold shadow-[0_0_30px_rgba(121,242,194,0.3)] hover:shadow-[0_0_40px_rgba(121,242,194,0.5)]"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                {product.cta.buttonText}
              </Button>
              <Link to="/contact">
                <Button
                  variant="heroSecondary"
                  size="lg"
                  className="h-14 px-8 text-base border border-white/10"
                >
                  Contact opnemen
                </Button>
              </Link>
            </div>
            {product.cta.secondaryText && (
              <p className="text-xs text-muted-foreground mt-4">
                {product.cta.secondaryText}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Switch between other products */}
      <section className="px-4 max-w-7xl mx-auto py-12 border-t border-white/10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-white">Bekijk andere softwaremodules</h3>
          <Link to="/oplossingen" className="text-xs font-bold uppercase tracking-wider text-primary hover:text-white transition-colors">
            Alle modules bekijken →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {PRODUCTS.filter((p) => p.id !== product.id).map((other) => (
            <Link
              key={other.id}
              to={`/producten/${other.slug}`}
              className="liquid-glass rounded-2xl p-4 border border-white/5 hover:border-primary/40 transition-colors group block"
            >
              <div className="text-xs font-bold text-white group-hover:text-primary transition-colors truncate">
                {other.title}
              </div>
              <div className="text-[10px] text-muted-foreground truncate mt-1">
                {other.badge}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
