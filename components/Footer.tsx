"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="text-center py-[30px] px-6 text-text-dim text-sm border-t border-card-border">
      <p>
        © {year} Zachary Belley. {t.footer.built}
      </p>
    </footer>
  );
}
