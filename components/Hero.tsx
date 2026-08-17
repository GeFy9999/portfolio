"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { MailIcon, GithubIcon, PinIcon } from "@/components/icons";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="max-w-[760px] mx-auto px-6 pt-[110px] pb-[90px] text-center relative z-10">
      <p className="font-mono text-accent text-sm mb-[18px]">{t.hero.eyebrow}</p>
      <h1 className="text-[clamp(2.6rem,6vw,4.2rem)] font-extrabold tracking-tight mb-1.5">
        Zachary <span className="text-accent">Belley</span>
      </h1>
      <h2 className="text-[clamp(1.1rem,3vw,1.4rem)] font-medium text-text-dim mb-[22px]">{t.hero.role}</h2>
      <p className="text-text-dim text-[1.05rem] max-w-[640px] mx-auto mb-[34px]">{t.hero.lead}</p>
      <div className="flex gap-3.5 justify-center flex-wrap mb-10">
        <a
          href="#projects"
          className="px-6 py-3 rounded-[10px] font-semibold text-sm bg-accent text-[#06210f] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgb(34_197_94_/_0.35)] transition-all"
        >
          {t.hero.ctaProjects}
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-[10px] font-semibold text-sm border border-card-border hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all"
        >
          {t.hero.ctaContact}
        </a>
      </div>
      <div className="flex gap-6 justify-center flex-wrap text-[0.88rem] text-text-dim">
        <span className="inline-flex items-center gap-1.5">
          <PinIcon className="w-4 h-4" />
          Gatineau, QC
        </span>
        <a
          href="https://github.com/GeFy9999"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
        >
          <GithubIcon className="w-4 h-4" />
          github.com/GeFy9999
        </a>
        <a
          href="mailto:zachary.belley@outlook.com"
          className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
        >
          <MailIcon className="w-4 h-4" />
          zachary.belley@outlook.com
        </a>
      </div>
    </section>
  );
}
