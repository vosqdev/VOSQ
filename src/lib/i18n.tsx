import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'nl' | 'en';

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  isEn: boolean;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('vosq_lang');
      if (saved === 'en' || saved === 'nl') {
        return saved;
      }
    }
    return 'nl';
  });

  const setLang = (nextLang: Language) => {
    setLangState(nextLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('vosq_lang', nextLang);
    }
  };

  const toggleLang = () => {
    setLang(lang === 'nl' ? 'en' : 'nl');
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, isEn: lang === 'en' }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
