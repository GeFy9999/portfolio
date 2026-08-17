"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { content, type Content, type Lang } from "@/lib/content";

interface LanguageContextValue {
  lang: Lang;
  t: Content;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      t: content[lang],
      toggleLang: () => setLang((prev) => (prev === "fr" ? "en" : "fr")),
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
