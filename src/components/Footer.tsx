import React from 'react';
import { Send, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="pt-20 pb-12 border-t border-white/10 relative bg-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand & Description */}
          <div className="lg:col-span-8 flex flex-col items-start pr-0 lg:pr-16">
            <Link to="/" className="flex items-center mb-6 group">
              <img 
                src="/assets/aistudio/VOSQ-logo_met_neon_groene_Q-staart_17dbbc4f.png" 
                alt="VOSQ Logo" 
                className="h-8 w-auto object-contain"
              />
            </Link>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-medium max-w-2xl">
              VOSQ is een digitaal vastgoed- en energie-intelligenceplatform dat vastgoedkennis, energie-inzicht en data-analyse samenbrengt. Het platform ondersteunt vastgoedeigenaren, beleggers en ondernemers bij het onderbouwen van beslissingen over exploitatie, energie, investeringen en toekomstwaarde.
            </p>

            <div className="text-xs font-mono text-primary font-bold tracking-wider uppercase mb-6">
              Meer inzicht. Betere beslissingen. Hoger rendement.
            </div>

            <div className="space-y-2.5 text-xs text-muted-foreground">
              <Link to="/demo-aanvragen" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-medium">
                <Send className="w-3.5 h-3.5 text-primary" />
                <span>Plan een kennismaking of vraag een demo aan →</span>
              </Link>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span>Nederland • Real Estate &amp; Energy Intelligence Platform</span>
              </div>
            </div>
          </div>

          {/* Clean Navigation Links (Software & Sectoren lists removed) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-2">Navigatie</h4>
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors py-1">
              Home
            </Link>
            <Link to="/oplossingen" className="text-sm text-muted-foreground hover:text-primary transition-colors py-1">
              Oplossingen
            </Link>
            <Link to="/platform" className="text-sm text-muted-foreground hover:text-primary transition-colors py-1">
              Platform
            </Link>
            <Link to="/over-vosq" className="text-sm text-muted-foreground hover:text-primary transition-colors py-1">
              Over VOSQ
            </Link>
            <Link to="/demo-aanvragen" className="text-sm text-muted-foreground hover:text-primary transition-colors py-1">
              Plan een Kennismaking
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors py-1">
              Contact
            </Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors py-1">
              Privacyverklaring
            </Link>
            <Link to="/disclaimer" className="text-sm text-muted-foreground hover:text-primary transition-colors py-1">
              Disclaimer
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-medium">
          <div>
            © {new Date().getFullYear()} VOSQ. Alle rechten voorbehouden.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            <span>Real Estate & Energy Intelligence</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
