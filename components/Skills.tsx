"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";

export function Skills() {
  const { t } = useLanguage();

  return (
    <Reveal>
      <section id="skills" className="max-w-[1080px] mx-auto px-6 py-[70px]">
        <h3 className="flex items-baseline gap-3.5 text-[1.7rem] font-bold mb-10">
          <span className="font-mono text-accent text-base border border-card-border rounded-md px-2 py-0.5">02</span>
          {t.skills.title}
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[18px]">
          {t.skills.groups.map((group) => (
            <div
              key={group.title}
              className="bg-card border border-card-border rounded-[14px] p-5 hover:border-accent hover:-translate-y-1 transition-all"
            >
              <h4 className="mb-3.5 text-base">{group.title}</h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="font-mono text-xs bg-accent-soft text-accent px-2.5 py-1.5 rounded-md">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
