"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { ExternalLinkIcon, BankIcon } from "@/components/icons";
import { projects } from "@/lib/projects";
import { assetPath } from "@/lib/basePath";

export function Projects() {
  const { t } = useLanguage();

  return (
    <Reveal>
      <section id="projects" className="max-w-[1080px] mx-auto px-6 py-[70px]">
        <h3 className="flex items-baseline gap-3.5 text-[1.7rem] font-bold mb-10">
          <span className="font-mono text-accent text-base border border-card-border rounded-md px-2 py-0.5">03</span>
          {t.projectsTitle}
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[26px]">
          {projects.map((project) => {
            const text = t.projects[project.id];
            return (
              <article
                key={project.id}
                className="group bg-card border border-card-border rounded-[14px] overflow-hidden flex flex-col hover:border-accent hover:-translate-y-1 transition-all"
              >
                <div className="h-[170px] flex items-center justify-center overflow-hidden bg-bg-soft">
                  {project.image ? (
                    <Image
                      src={assetPath(project.image.src)}
                      alt={text.alt}
                      width={1280}
                      height={project.id === "gymtrack" ? 620 : 760}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-400"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#713f12] to-bg">
                      <BankIcon className="w-[46px] h-[46px] text-amber-400/90" />
                    </div>
                  )}
                </div>
                <div className="p-[22px] flex flex-col gap-3.5 flex-1">
                  <div className="flex items-center justify-between gap-2.5 flex-wrap">
                    <h4 className="text-[1.15rem] font-semibold">{project.name}</h4>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener"
                      className="font-mono text-xs text-accent-2 hover:underline inline-flex items-center"
                    >
                      {text.linkLabel}
                      <ExternalLinkIcon className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs bg-bg-soft text-text-dim border border-card-border px-2.5 py-1.5 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="text-text-dim text-sm flex flex-col gap-2 list-disc pl-[18px]">
                    {text.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </Reveal>
  );
}
