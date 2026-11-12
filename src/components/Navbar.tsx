import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenModal?: (type?: 'demo' | 'trial', context?: string) => void;
}

export function Navbar({ onOpenModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Escape key handler for mobile menu
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const isSolutionsActive = 
    location.pathname === '/oplossingen' || 
    location.pathname.startsWith('/sectoren') || 
    location.pathname.startsWith('/producten');

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4 sm:px-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Floating Capsule Bar */}
        <nav 
          aria-label="Hoofdnavigatie"
          className="w-full bg-[#0d0e14]/90 backdrop-blur-2xl border border-white/10 rounded-3xl px-4 sm:px-6 py-3 flex items-center justify-between shadow-2xl shadow-black/80 pointer-events-auto relative overflow-visible"
        >
          {/* Logo Badge */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded-xl py-0.5"
            aria-label="VOSQ Home"
          >
            <img 
              src="/assets/aistudio/VOSQ-logo_met_neon_groene_Q-staart_17dbbc4f.png" 
              alt="VOSQ Logo" 
              className="h-7 sm:h-8 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(121,242,194,0.3)]"
            />
          </Link>

          {/* Desktop Navigation Links - Clean Direct Links Without Dropdowns */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-foreground/85">
            <Link 
              to="/" 
              className={`hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded px-2 py-1 ${
                location.pathname === '/' ? 'text-white font-semibold' : ''
              }`}
            >
              Home
            </Link>

            <Link 
              to="/oplossingen" 
              className={`hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded px-2 py-1 ${
                isSolutionsActive ? 'text-primary font-semibold' : ''
              }`}
            >
              Oplossingen
            </Link>

            <Link 
              to="/platform" 
              className={`hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded px-2 py-1 ${
                location.pathname === '/platform' ? 'text-primary font-semibold' : ''
              }`}
            >
              Platform
            </Link>

            <Link 
              to="/over-vosq" 
              className={`hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded px-2 py-1 ${
                location.pathname === '/over-vosq' ? 'text-primary font-semibold' : ''
              }`}
            >
              Over VOSQ
            </Link>

            <Link 
              to="/contact" 
              className={`hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded px-2 py-1 ${
                location.pathname === '/contact' ? 'text-primary font-semibold' : ''
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right Action Button (Desktop CTA) */}
          <div className="hidden sm:flex items-center gap-3">
            <Link to="/demo-aanvragen" tabIndex={-1}>
              <Button
                variant="hero"
                size="sm"
                className="h-10 px-5 text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(121,242,194,0.3)] hover:shadow-[0_0_30px_rgba(121,242,194,0.5)] transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                Demo aanvragen
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <Link to="/demo-aanvragen" tabIndex={-1}>
              <Button
                variant="hero"
                size="sm"
                className="h-9 px-3.5 text-xs font-bold"
              >
                Demo
              </Button>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary cursor-pointer"
              aria-label={mobileMenuOpen ? 'Menu sluiten' : 'Menu openen'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden mt-2 max-w-7xl mx-auto bg-[#0b0c10]/98 rounded-3xl p-6 border border-white/10 shadow-2xl backdrop-blur-2xl pointer-events-auto max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              <Link 
                to="/" 
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-semibold py-2.5 border-b border-white/5 flex items-center justify-between ${
                  location.pathname === '/' ? 'text-primary' : 'text-white'
                }`}
              >
                <span>Home</span>
              </Link>

              <Link 
                to="/oplossingen" 
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-semibold py-2.5 border-b border-white/5 flex items-center justify-between ${
                  isSolutionsActive ? 'text-primary' : 'text-white'
                }`}
              >
                <span>Oplossingen</span>
              </Link>

              <Link 
                to="/platform" 
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-semibold py-2.5 border-b border-white/5 ${
                  location.pathname === '/platform' ? 'text-primary' : 'text-white'
                }`}
              >
                Platform
              </Link>

              <Link 
                to="/over-vosq" 
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-semibold py-2.5 border-b border-white/5 ${
                  location.pathname === '/over-vosq' ? 'text-primary' : 'text-white'
                }`}
              >
                Over VOSQ
              </Link>

              <Link 
                to="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-semibold py-2.5 border-b border-white/5 ${
                  location.pathname === '/contact' ? 'text-primary' : 'text-white'
                }`}
              >
                Contact
              </Link>

              <Link 
                to="/demo-aanvragen" 
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 block"
              >
                <Button
                  variant="hero"
                  className="w-full h-12 text-sm font-bold shadow-[0_0_20px_rgba(121,242,194,0.3)]"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Vraag een demo aan
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
