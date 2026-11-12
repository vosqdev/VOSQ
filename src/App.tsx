/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LeadModal } from '@/components/LeadModal';
import { CookieBanner } from '@/components/CookieBanner';
import { HomePage } from '@/pages/HomePage';
import { SectorPage } from '@/pages/SectorPage';
import { ProductDetailPage } from '@/pages/ProductDetailPage';
import { OplossingenPage } from '@/pages/OplossingenPage';
import { PlatformPage } from '@/pages/PlatformPage';
import { AboutPage } from '@/pages/AboutPage';
import { InzichtenPage } from '@/pages/InzichtenPage';
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
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'demo' | 'trial';
    context?: string;
  }>({
    isOpen: false,
    type: 'demo',
  });

  const handleOpenModal = (type: 'demo' | 'trial' = 'demo', context?: string) => {
    setModalState({ isOpen: true, type, context });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground flex flex-col justify-between">
        {/* Floating Navigation */}
        <Navbar onOpenModal={handleOpenModal} />

        {/* Main Content Router */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenModal={handleOpenModal} />} />

            {/* 6 Product Pages */}
            <Route path="/producten/:productSlug" element={<ProductDetailPage onOpenModal={handleOpenModal} />} />

            {/* Standard Sector Route */}
            <Route path="/sectoren/:sectorSlug" element={<SectorPage onOpenModal={handleOpenModal} />} />

            {/* Sector Deep Path Aliases as specified in briefing */}
            <Route path="/sectoren/commercieel-vastgoed/eigenaar-eindgebruiker" element={<SectorPage onOpenModal={handleOpenModal} />} />
            <Route path="/sectoren/batterijopslag/laadplein/EMS" element={<SectorPage onOpenModal={handleOpenModal} />} />
            <Route path="/sectoren/zon/smart-grid" element={<SectorPage onOpenModal={handleOpenModal} />} />
            <Route path="/sectoren/overheden-eigenaar-eindgebruiker" element={<SectorPage onOpenModal={handleOpenModal} />} />
            <Route path="/sectoren/gecontracteerd-vermogen-en-aansluiting" element={<SectorPage onOpenModal={handleOpenModal} />} />

            {/* Core Pages */}
            <Route path="/oplossingen" element={<OplossingenPage onOpenModal={handleOpenModal} />} />
            <Route path="/platform" element={<PlatformPage onOpenModal={handleOpenModal} />} />
            <Route path="/over-vosq" element={<AboutPage onOpenModal={handleOpenModal} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/demo-aanvragen" element={<DemoRequestPage />} />
            <Route path="/kennismaking" element={<DemoRequestPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />

            {/* Catch-all redirect to Home */}
            <Route path="*" element={<HomePage onOpenModal={handleOpenModal} />} />
          </Routes>
        </main>

        {/* 10. Footer */}
        <Footer />

        {/* Global Demo Request & Lead Modal */}
        <LeadModal
          isOpen={modalState.isOpen}
          onClose={handleCloseModal}
          defaultType={modalState.type}
          context={modalState.context}
        />

        {/* AVG-Proof Cookie Consent Banner */}
        <CookieBanner />
      </div>
    </BrowserRouter>
  );
}
