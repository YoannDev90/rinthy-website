import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import type { Language, Translations } from "./types";
import { allTranslations } from "./languages";

interface I18nContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    try {
      return (localStorage.getItem("rinthy-lang") as Language) || "en";
    } catch {
      return "en";
    }
  });

  const [t, setT] = useState<Translations>(allTranslations[lang]);

  useEffect(() => {
    setT(allTranslations[lang]);
  }, [lang]);

  const changeLang = useCallback((newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem("rinthy-lang", newLang);
    } catch {}
  }, []);

  return (
    <I18nContext.Provider value={{ lang, setLang: changeLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
