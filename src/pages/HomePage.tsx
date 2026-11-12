import React, { useEffect } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { IntroSection } from '@/components/IntroSection';
import { AboutTeaserSection } from '@/components/AboutTeaserSection';
import { FinalCtaSection } from '@/components/FinalCtaSection';

export function HomePage() {
  useEffect(() => {
    document.title = 'VOSQ — Real Estate & Energy Intelligence Platform';
  }, []);

  return (
    <div>
      {/* 1. Hero: Verbinding tussen Vastgoed en Energie */}
      <HeroSection />

      {/* 2. Introductie: Waar vastgoed, energie en technologie samenkomen */}
      <IntroSection />

      {/* 3. Missie & Positie met de 4 Procesblokken (01 Connect, 02 Structure, 03 Analyse, 04 Decide) */}
      <AboutTeaserSection />

      {/* 4. Afsluitende CTA */}
      <FinalCtaSection />
    </div>
  );
}
