"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";

export function About() {
  const { t } = useLanguage();

  return (
    <Reveal>
      <section id="about" className="max-w-[1080px] mx-auto px-6 py-[70px]">
        <h3 className="flex items-baseline gap-3.5 text-[1.7rem] font-bold mb-10">
          <span className="font-mono text-accent text-base border border-card-border rounded-md px-2 py-0.5">01</span>
          {t.about.title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-10 items-start">
          <p className="text-text-dim text-[1.02rem]">{t.about.text}</p>
          <div className="flex flex-col gap-5">
            {t.about.facts.map((fact) => (
              <div key={fact.label} className="border border-card-border rounded-[14px] px-[18px] py-4 bg-card">
                <span className="block font-mono text-2xl text-accent font-bold">{fact.num}</span>
                <span className="text-text-dim text-sm">{fact.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
