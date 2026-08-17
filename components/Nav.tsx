"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export function Nav() {
  const { t, lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#experience", label: t.nav.experience },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-bg/75 border-b border-card-border">
      <nav className="max-w-[1080px] mx-auto px-6 h-[68px] flex items-center justify-between">
        <a href="#top" className="font-mono font-bold text-xl tracking-wide">
          ZB<span className="text-accent">.</span>
        </a>
        <ul className="hidden md:flex gap-7 list-none">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-text-dim hover:text-text transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="font-mono text-xs border border-card-border text-text-dim rounded-full px-3 py-1.5 cursor-pointer hover:border-accent hover:text-accent transition-colors"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="md:hidden flex flex-col gap-1 p-1.5"
          >
            <span className="w-[22px] h-0.5 bg-text" />
            <span className="w-[22px] h-0.5 bg-text" />
            <span className="w-[22px] h-0.5 bg-text" />
          </button>
        </div>
      </nav>
      {open && (
        <ul className="md:hidden flex flex-col list-none border-t border-card-border">
          {links.map((link) => (
            <li key={link.href} className="border-b border-card-border">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-3.5 text-text-dim hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
