/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from '@/lib/i18n';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CookieBanner } from '@/components/CookieBanner';
import { HomePage } from '@/pages/HomePage';
import { SectorPage } from '@/pages/SectorPage';
import { ProductDetailPage } from '@/pages/ProductDetailPage';
import { OplossingenPage } from '@/pages/OplossingenPage';
import { PlatformPage } from '@/pages/PlatformPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { DemoRequestPage } from '@/pages/DemoRequestPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { DisclaimerPage } from '@/pages/DisclaimerPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground flex flex-col justify-between">
        {/* Floating Navigation */}
        <Navbar />

        {/* Main Content Router */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* 6 Product Pages */}
            <Route path="/producten/:productSlug" element={<ProductDetailPage />} />

            {/* Standard Sector Route */}
            <Route path="/sectoren/:sectorSlug" element={<SectorPage />} />

            {/* Sector Deep Path Aliases as specified in briefing */}
            <Route path="/sectoren/commercieel-vastgoed/eigenaar-eindgebruiker" element={<SectorPage />} />
            <Route path="/sectoren/batterijopslag/laadplein/EMS" element={<SectorPage />} />
            <Route path="/sectoren/zon/smart-grid" element={<SectorPage />} />
            <Route path="/sectoren/overheden-eigenaar-eindgebruiker" element={<SectorPage />} />
            <Route path="/sectoren/gecontracteerd-vermogen-en-aansluiting" element={<SectorPage />} />

            {/* Core Pages */}
            <Route path="/oplossingen" element={<OplossingenPage />} />
            <Route path="/platform" element={<PlatformPage />} />
            <Route path="/over-vosq" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/demo-aanvragen" element={<DemoRequestPage />} />
            <Route path="/kennismaking" element={<DemoRequestPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />

            {/* Catch-all redirect to Home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* 10. Footer */}
        <Footer />

        {/* AVG-Proof Cookie Consent Banner */}
        <CookieBanner />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
