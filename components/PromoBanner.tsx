"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { VideoModal } from "@/components/VideoModal";
import { PlayStoreIcon } from "@/components/icons";
import { GYMSTRACK_PLAY_STORE_URL } from "@/lib/projects";

export function PromoBanner() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(true);
  const [videoOpen, setVideoOpen] = useState(false);

  const dismiss = () => setVisible(false);

  return (
    <>
      {visible && (
        <div className="relative z-[60] bg-gradient-to-r from-accent/20 via-accent-2/15 to-accent/20 border-b border-accent/40 text-sm">
          <div className="max-w-[1080px] mx-auto px-4 sm:px-6 py-2.5 pr-11 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center">
            <span className="font-mono text-[0.7rem] uppercase tracking-wider bg-accent text-bg font-bold rounded px-1.5 py-0.5">
              {t.promo.badge}
            </span>
            <span className="text-text">{t.promo.text}</span>
            <div className="flex items-center gap-2">
              <a
                href={GYMSTRACK_PLAY_STORE_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 bg-accent text-bg font-semibold rounded-full px-3 py-1 hover:brightness-110 transition"
              >
                <PlayStoreIcon className="w-3.5 h-3.5" />
                {t.promo.cta}
              </a>
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-1 border border-text-dim/40 text-text rounded-full px-3 py-1 hover:border-accent hover:text-accent transition-colors"
              >
                ▶ {t.promo.watch}
              </button>
            </div>
          </div>
          <button
            type="button"
            aria-label={t.promo.close}
            onClick={dismiss}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center text-text-dim hover:text-text hover:bg-white/10 transition-colors"
          >
            ✕
          </button>
        </div>
      )}
      {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}
    </>
  );
}
