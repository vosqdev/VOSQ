import React, { useState, useEffect } from 'react';
import { ShieldCheck, X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('vosq_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('vosq_cookie_consent', 'all');
    setVisible(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('vosq_cookie_consent', 'necessary');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:right-6 sm:max-w-md z-50">
      <div className="liquid-glass rounded-3xl p-6 border border-white/10 shadow-2xl backdrop-blur-2xl bg-card/95">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-8 h-8 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Privacy & Cookie-Instellingen</h4>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              Wij gebruiken functionele en geanonimiseerde analytische cookies om de werking van het platform te optimaliseren conform de AVG.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-2 mb-4 border-t border-white/5">
          <Link to="/privacy" className="text-primary hover:underline">
            Lees ons privacybeleid
          </Link>
          <span>Geen tracking voor derden</span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="hero"
            size="sm"
            onClick={handleAcceptAll}
            className="flex-1 h-9 text-xs font-bold"
          >
            Alles accepteren
          </Button>

          <Button
            variant="heroSecondary"
            size="sm"
            onClick={handleAcceptNecessary}
            className="h-9 px-3 text-xs border border-white/10"
          >
            Alleen noodzakelijk
          </Button>
        </div>
      </div>
    </div>
  );
}
