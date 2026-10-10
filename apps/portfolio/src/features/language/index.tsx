import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

import { french } from './fr';

type Language = 'en' | 'fr';
const storageKey = 'portfolio-language';

export function detectLanguage(): Language {
  try {
    const saved = window.localStorage.getItem(storageKey);
    if (saved === 'en' || saved === 'fr') return saved;
  } catch {
    // Language selection also works when browser storage is unavailable.
  }
  return typeof navigator !== 'undefined' &&
    /^fr(?:-|$)/i.test(navigator.language)
    ? 'fr'
    : 'en';
}

const LanguageContext = createContext({
  language: 'en' as Language,
  setLanguage: (_language: Language) => {
    /* Default for standalone components. */
  },
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(detectLanguage);
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  function setLanguage(next: Language) {
    setLanguageState(next);
    try {
      window.localStorage.setItem(storageKey, next);
    } catch {
      // Keep the selection in memory if persistence is blocked.
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  return {
    ...context,
    t: (english: string) =>
      context.language === 'fr' ? (french[english] ?? english) : english,
  };
}

export function LanguageControl() {
  const { language, setLanguage } = useLanguage();
  return (
    <div
      className="glass-surface flex items-center gap-0.5 p-0.5"
      role="group"
      aria-label={language === 'fr' ? 'Langue' : 'Language'}
    >
      {(['en', 'fr'] as const).map((option) => (
        <button
          key={option}
          type="button"
          lang={option}
          aria-label={option === 'fr' ? 'Français' : 'English'}
          aria-pressed={language === option}
          className="glass-control border-0 px-2 py-1 text-xs text-ink-muted shadow-none hover:text-ink-primary aria-pressed:bg-house-elevated aria-pressed:text-accent-primary"
          onClick={() => setLanguage(option)}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
