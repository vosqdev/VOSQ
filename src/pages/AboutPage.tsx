import React, { useEffect } from 'react';
import { useLanguage } from '@/lib/i18n';

export function AboutPage() {
  const { isEn } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = isEn
      ? 'About VOSQ | Real Estate & Energy Intelligence'
      : 'Over VOSQ | Real Estate & Energy Intelligence';
  }, [isEn]);

  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="px-4 max-w-7xl mx-auto mb-20 text-center relative">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-primary/10 blur-[160px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <img 
              src="/assets/aistudio/VOSQ-logo_met_neon_groene_Q-staart_17dbbc4f.png" 
              alt="VOSQ Logo" 
              className="h-14 sm:h-20 w-auto object-contain drop-shadow-[0_0_35px_rgba(121,242,194,0.3)]"
            />
            <h1 className="sr-only">{isEn ? 'About VOSQ' : 'Over VOSQ'}</h1>
          </div>

          <div className="text-xl sm:text-2xl font-bold text-primary mb-6">
            Connecting Data. Powering Decisions.
          </div>

          <p className="text-hero-sub text-lg sm:text-xl font-medium leading-relaxed opacity-90 mb-10">
            {isEn
              ? 'VOSQ is the digital real estate and energy intelligence platform that brings together real estate expertise, energy insight, and digital technology. More insight. Better decisions. Higher returns.'
              : 'VOSQ is het digitale vastgoed- en energie-intelligenceplatform dat kennis van vastgoed, energie en digitale technologie samenbrengt. Meer inzicht. Betere beslissingen. Hoger rendement.'}
          </p>
        </div>
      </section>

      {/* Mission & Positioning Card */}
      <section className="px-4 max-w-7xl mx-auto mb-24">
        <div className="liquid-glass rounded-3xl p-8 sm:p-14 border border-white/10 relative overflow-hidden">
          {/* Platform background video behind Over VOSQ */}
          <div className="absolute inset-0 z-0 opacity-30 mix-blend-screen pointer-events-none overflow-hidden">
            <video
              className="w-full h-full object-cover scale-105"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/chess.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/45 to-background/80" />
            <div className="absolute inset-0 backdrop-blur-[1px]" />
          </div>

          <div className="max-w-4xl relative z-10">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              {isEn ? (
                <>
                  The real estate and energy sectors face{' '}
                  <span className="text-primary">fundamental change.</span>
                </>
              ) : (
                <>
                  De vastgoed- en energiewereld staan voor{' '}
                  <span className="text-primary">fundamentele veranderingen.</span>
                </>
              )}
            </h2>

            <div className="space-y-5 text-hero-sub text-base sm:text-lg font-medium leading-relaxed opacity-95 mb-8">
              <p className="text-white text-lg sm:text-xl font-medium leading-relaxed">
                {isEn
                  ? 'VOSQ combines real estate, energy, and digital technology expertise to translate complex challenges into concrete insights and well-founded choices — grounded in your own contracts and live data.'
                  : 'VOSQ combineert kennis van vastgoed, energie en digitale technologie om complexe vraagstukken te vertalen naar concrete inzichten en onderbouwde keuzes — op basis van uw eigen contracten en actuele data.'}
              </p>
              <div className="p-5 sm:p-6 rounded-2xl bg-primary/10 border border-primary/20 text-white space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-primary font-bold">
                  {isEn
                    ? 'Practical Digital Instrument — Neither a Consultancy Nor Generic AI'
                    : 'Praktisch Digitaal Instrument — Geen Adviesbureau of Generieke AI'}
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed">
                  {isEn
                    ? 'VOSQ is a digital platform — not a traditional real estate consultancy and not merely a generic AI tool. The instrument gives property owners, investors, and entrepreneurs independent visibility into opportunities, risks, and potential measures.'
                    : 'VOSQ is een digitaal platform — geen traditionele vastgoedadviseur en geen uitsluitend generieke AI-tool. Het instrument biedt vastgoedeigenaren, beleggers en ondernemers zelfstandig grip op kansen, risico\'s en mogelijke maatregelen.'}
                </p>
                <div className="grid sm:grid-cols-2 gap-3 pt-2 text-xs text-foreground/85">
                  <div className="p-3 rounded-xl bg-black/30 border border-white/5">
                    <strong className="text-primary block mb-0.5">
                      {isEn
                        ? 'Indicative quickscans & scenario explorations'
                        : 'Indicatieve quickscans & scenarioverkenningen'}
                    </strong>
                    {isEn
                      ? 'Fast initial indication of opportunities, grid capacity, and investment directions.'
                      : 'Snelle eerste duiding van kansen, netcapaciteit en investeringsrichtingen.'}
                  </div>
                  <div className="p-3 rounded-xl bg-black/30 border border-white/5">
                    <strong className="text-primary block mb-0.5">
                      {isEn
                        ? 'Data-driven analyses vs. definitive advice'
                        : 'Datagedreven analyses vs. definitief advies'}
                    </strong>
                    {isEn
                      ? 'Structured decision support in preparation for professional evaluation and formal advisory.'
                      : 'Gestructureerde beslisinformatie ter voorbereiding op professionele beoordeling en definitief advies.'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ons Verhaal */}
      <section className="px-4 max-w-7xl mx-auto mb-24">
        <div className="liquid-glass rounded-3xl p-8 sm:p-14 border border-white/10 relative overflow-hidden">
          <div className="max-w-4xl relative z-10">
            <div className="text-xs font-mono uppercase tracking-widest text-primary font-bold mb-3">
              {isEn ? 'Our Story' : 'Ons Verhaal'}
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              {isEn
                ? 'From an idea in 2024 to launch in 2026'
                : 'Van een idee in 2024 tot de lancering in 2026'}
            </h2>
            <p className="text-hero-sub text-lg sm:text-xl font-medium leading-relaxed opacity-95 text-white/90 mb-8">
              {isEn
                ? 'It started with asking what was missing in a real estate and energy market navigating shifting policy, regulations, and increasingly complex asset operations: clarity and actionable data.'
                : 'Het begon met de vraag wat er ontbrak in de vastgoed- en energiemarkt die te maken krijgt met steeds wisselend beleid, wet- en regelgeving maar ook steeds complexer wordt in exploitatie: overzicht en bruikbare data.'}
            </p>

            {/* Timeline Milestones */}
            <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-xs font-mono font-bold text-primary mb-1">
                  {isEn ? '2024 • THE IDEA' : '2024 • HET IDEE'}
                </div>
                <div className="text-lg font-bold text-white mb-2">
                  {isEn
                    ? 'Identifying the fragmentation problem'
                    : 'Constatering van het versnipperingsprobleem'}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {isEn
                    ? 'The market struggled with fragmented spreadsheets, unpredictable grid congestion, and isolated advisory reports. The blueprint for a continuous intelligence platform was born.'
                    : 'De markt liep vast op gefragmenteerde spreadsheets, onvoorspelbare netcongestie en losse adviesrapporten. De blauwdruk voor een continu intelligence-platform werd geboren.'}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
                <div className="text-xs font-mono font-bold text-primary mb-1">
                  {isEn ? '2026 • THE LAUNCH' : '2026 • DE LANCERING'}
                </div>
                <div className="text-lg font-bold text-white mb-2">
                  {isEn
                    ? 'The VOSQ Platform live in production'
                    : 'Het VOSQ Platform live in productie'}
                </div>
                <p className="text-xs text-foreground/80 leading-relaxed">
                  {isEn
                    ? 'Launch of the software suite: an integrated platform connecting real estate, energy, and project data in real time for data-driven decision-making.'
                    : 'Lancering van de software suite: een integraal platform dat vastgoed-, energie- en projectdata realtime met elkaar verbindt voor data-gedreven besluitvorming.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Het DNA van VOSQ: Vier Merkwaarden: V-O-S-Q */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative overflow-hidden rounded-[2.5rem] border border-white/10 mb-24">
        {/* Background Video */}
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

        <div className="relative z-10 px-2 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block mb-2">
              {isEn ? 'The DNA of VOSQ' : 'Het DNA van VOSQ'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              {isEn ? 'Four Core Values: V-O-S-Q' : 'Vier Merkwaarden: V-O-S-Q'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="liquid-glass rounded-3xl p-8 border border-white/10 hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 text-primary flex items-center justify-center font-mono font-bold text-xl">
                  V
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {isEn ? 'Connect (Verbinden)' : 'Verbinden'}
                  </h3>
                  <span className="text-xs text-primary font-mono uppercase">
                    {isEn ? 'Data + Systems + Disciplines' : 'Data + Systemen + Disciplines'}
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {isEn
                  ? 'We unite data, systems, organization, and disciplines. Where real estate specialists and energy engineers traditionally speak past each other, VOSQ provides a shared digital truth.'
                  : 'Wij brengen data, systemen, organisatie en disciplines samen. Waar vastgoedexperts en energie-engineers traditioneel langs elkaar heen praten, biedt VOSQ de gedeelde digitale waarheid.'}
              </p>
            </div>

            <div className="liquid-glass rounded-3xl p-8 border border-white/10 hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 text-primary flex items-center justify-center font-mono font-bold text-xl">
                  O
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {isEn ? 'Organize (Ordenen)' : 'Ordenen'}
                  </h3>
                  <span className="text-xs text-primary font-mono uppercase">
                    {isEn ? 'Unified Data Model' : 'Uniform Datamodel'}
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {isEn
                  ? 'We make scattered information structured and actionable. Cadastral records, quarter-hour energy meters, DSO capacity, and CAPEX budgets are harmonized into one scalable database.'
                  : 'Wij maken versnipperde informatie bruikbaar en overzichtelijk. Kadasterdata, kwartier-energiemetingen, netbeheerderscapaciteit en investeringsbegrotingen worden geharmoniseerd tot één schaalbare database.'}
              </p>
            </div>

            <div className="liquid-glass rounded-3xl p-8 border border-white/10 hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 text-primary flex items-center justify-center font-mono font-bold text-xl">
                  S
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {isEn ? 'Strategy (Strategie)' : 'Strategie'}
                  </h3>
                  <span className="text-xs text-primary font-mono uppercase">
                    {isEn ? 'Future-Proof Decisions' : 'Toekomstbestendige Besluiten'}
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {isEn
                  ? 'We translate legislation and policy into concrete investment and energy strategies. From CSRD and Paris Proof to grid congestion contracts (CBC and non-firm transport agreements).'
                  : 'Wij vertalen wet- en regelgeving naar concrete investerings- en energiestrategieën. Van CSRD en Paris Proof tot netcongestie-overeenkomsten (CBC en non-firm transportcontracten).'}
              </p>
            </div>

            <div className="liquid-glass rounded-3xl p-8 border border-white/10 hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 text-primary flex items-center justify-center font-mono font-bold text-xl">
                  Q
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {isEn ? 'Quantification (Quantificatie)' : 'Quantificatie'}
                  </h3>
                  <span className="text-xs text-primary font-mono uppercase">
                    {isEn ? 'Measurable Scenarios' : 'Meetbare Scenario\'s'}
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {isEn
                  ? 'We make scenarios, risks, returns, and opportunities measurable. No vague estimates, but hard quantitative analyses per quarter-hour, per square meter, and per euro invested.'
                  : 'Wij maken scenario\'s, risico\'s, rendementen en kansen meetbaar. Geen vage schattingen, maar harde kwantitatieve analyses per kwartier, per vierkante meter en per euro geïnvesteerd vermogen.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
