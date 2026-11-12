import React, { useEffect } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { IntroSection } from '@/components/IntroSection';
import { AboutTeaserSection } from '@/components/AboutTeaserSection';
import { FinalCtaSection } from '@/components/FinalCtaSection';

interface HomePageProps {
  onOpenModal?: (type?: 'demo' | 'trial', context?: string) => void;
}

export function HomePage({ onOpenModal }: HomePageProps) {
  useEffect(() => {
    document.title = 'VOSQ — Real Estate & Energy Intelligence Platform';
  }, []);

  return (
    <div>
      {/* 1. Hero: Verbinding tussen Vastgoed en Energie */}
      <HeroSection onOpenModal={onOpenModal} />

      {/* 2. Introductie: Waar vastgoed, energie en technologie samenkomen */}
      <IntroSection onOpenModal={onOpenModal} />

      {/* 3. Missie & Positie met de 4 Procesblokken (01 Connect, 02 Structure, 03 Analyse, 04 Decide) */}
      <AboutTeaserSection onOpenModal={onOpenModal} />

      {/* 4. Afsluitende CTA */}
      <FinalCtaSection onOpenModal={onOpenModal} />
    </div>
  );
}
