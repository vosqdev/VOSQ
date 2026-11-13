import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/i18n';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const { isEn } = useLanguage();

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
            <h4 className="text-sm font-bold text-white">
              {isEn ? 'Privacy & Cookie Settings' : 'Privacy & Cookie-Instellingen'}
            </h4>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              {isEn
                ? 'We use functional and anonymized analytical cookies to optimize platform performance in compliance with GDPR.'
                : 'Wij gebruiken functionele en geanonimiseerde analytische cookies om de werking van het platform te optimaliseren conform de AVG.'}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-2 mb-4 border-t border-white/5">
          <Link to="/privacy" className="text-primary hover:underline">
            {isEn ? 'Read our privacy policy' : 'Lees ons privacybeleid'}
          </Link>
          <span>{isEn ? 'No third-party tracking' : 'Geen tracking voor derden'}</span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="hero"
            size="sm"
            onClick={handleAcceptAll}
            className="flex-1 h-9 text-xs font-bold"
          >
            {isEn ? 'Accept all' : 'Alles accepteren'}
          </Button>

          <Button
            variant="heroSecondary"
            size="sm"
            onClick={handleAcceptNecessary}
            className="h-9 px-3 text-xs border border-white/10"
          >
            {isEn ? 'Necessary only' : 'Alleen noodzakelijk'}
          </Button>
        </div>
      </div>
    </div>
  );
}
