import React from 'react';
import { ChevronRight } from 'lucide-react';
import { HlsVideo } from './HlsVideo';
import { motion } from 'motion/react';

const ease = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease }
  }
};

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-40 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <HlsVideo
          src="/videos/features.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover scale-105"
        />
        {/* Overlays */}
        <div className="absolute inset-x-0 top-0 h-[50%] bg-gradient-to-b from-background via-background/90 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-background via-background/90 to-transparent" />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
        
        {/* Lighting Orbs */}
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col items-center text-center mb-24"
        >
          <div className="liquid-glass rounded-full p-1 pr-3 flex items-center gap-3 mb-8 cursor-pointer hover:bg-white/10 transition-all border border-white/5 group">
            <span className="pl-4 text-sm font-medium text-foreground/90">Core Platform</span>
            <div className="flex items-center gap-1 text-xs font-bold bg-white/10 group-hover:bg-white/20 transition-colors rounded-full px-3 py-1.5">
              Overview <ChevronRight className="w-3 h-3" />
            </div>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold leading-[1.1] tracking-tighter max-w-3xl">
            <span className="text-hero-heading">Built for Teams Ready</span><br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/50">
              to Scale Efficiently
            </span>
          </h2>
          <p className="text-hero-sub text-xl mt-8 max-w-2xl opacity-80 font-medium leading-relaxed">
            A flexible platform that helps your team automate execution, understand performance, and improve operations without added complexity.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          <FeatureCard
            title="Smart Workflows"
            description="Automate repetitive processes with flexible workflows that adapt to how your team operates."
            statValue="Faster"
            statSuffix="execution"
            statLabel="WORKFLOW EFFICIENCY"
          />
          <FeatureCard
            title="Unified Insights"
            description="Turn scattered data into clear visibility with real-time reporting and actionable performance signals."
            statValue="Better"
            statSuffix="visibility"
            statLabel="PERFORMANCE INSIGHTS"
          />
          <FeatureCard
            title="Built-In Reliability"
            description="Keep your operations secure, organized, and dependable with infrastructure built for scale."
            statValue="Enterprise"
            statSuffix="ready"
            statLabel="PLATFORM STABILITY"
          />
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  description,
  statValue,
  statSuffix,
  statLabel,
}: {
  title: string;
  description: string;
  statValue: string;
  statSuffix: string;
  statLabel: string;
}) {
  return (
    <motion.div 
      variants={itemVariants}
      className="group relative liquid-glass rounded-[2rem] p-10 flex flex-col hover:-translate-y-2 transition-all duration-500 border border-white/5 hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden"
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <h3 className="text-2xl font-bold text-hero-heading mb-4 tracking-tight relative z-10">{title}</h3>
      <p className="text-muted-foreground text-lg leading-relaxed mb-12 flex-grow relative z-10">
        {description}
      </p>
      
      <div className="pt-8 border-t border-white/10 mt-auto relative z-10 group-hover:border-white/20 transition-colors duration-500">
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-5xl font-bold text-primary tracking-tighter drop-shadow-[0_0_15px_rgba(121,242,194,0.3)]">{statValue}</span>
          <span className="text-2xl font-semibold text-primary/80">{statSuffix}</span>
        </div>
        <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
          {statLabel}
        </div>
      </div>
    </motion.div>
  );
}
