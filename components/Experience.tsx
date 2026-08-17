"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  const { t } = useLanguage();

  return (
    <Reveal>
      <section id="experience" className="max-w-[1080px] mx-auto px-6 py-[70px]">
        <h3 className="flex items-baseline gap-3.5 text-[1.7rem] font-bold mb-10">
          <span className="font-mono text-accent text-base border border-card-border rounded-md px-2 py-0.5">04</span>
          {t.experience.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h4 className="text-base text-accent uppercase tracking-wide mb-5">{t.experience.eduHeading}</h4>
            {t.experience.edu.map((item) => (
              <div key={item.title} className="relative border-l-2 border-card-border pl-5 pb-[26px]">
                <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-accent" />
                <span className="font-mono text-xs text-text-dim">{item.date}</span>
                <h5 className="mt-1 mb-0.5 text-base">{item.title}</h5>
                <p className="mb-1.5 text-accent-2 text-sm">{item.sub}</p>
                {item.desc && <p className="text-text-dim text-sm">{item.desc}</p>}
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-base text-accent uppercase tracking-wide mb-5">{t.experience.workHeading}</h4>
            {t.experience.work.map((item) => (
              <div key={item.title} className="relative border-l-2 border-card-border pl-5 pb-[26px]">
                <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-accent" />
                <span className="font-mono text-xs text-text-dim">{item.date}</span>
                <h5 className="mt-1 mb-0.5 text-base">{item.title}</h5>
                <p className="mb-1.5 text-accent-2 text-sm">{item.sub}</p>
                {item.desc && <p className="text-text-dim text-sm">{item.desc}</p>}
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3.5 mt-[46px] flex-wrap">
          {t.experience.languages.map((lang) => (
            <span key={lang.name} className="border border-card-border rounded-full px-4 py-2 text-sm text-text-dim">
              <strong className="text-text">{lang.name}</strong> — {lang.level}
            </span>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
