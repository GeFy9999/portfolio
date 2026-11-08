"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/components/LanguageProvider";
import { GYMSTRACK_PLAY_STORE_URL, GYMSTRACK_VIDEO } from "@/lib/projects";
import { PlayStoreIcon } from "@/components/icons";

export function VideoModal({ onClose }: { onClose: () => void }) {
  const { t } = useLanguage();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t.promo.modalTitle}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[420px] max-h-[92vh] flex flex-col bg-card border border-card-border rounded-2xl overflow-hidden shadow-2xl"
      >
        <button
          type="button"
          aria-label={t.promo.close}
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
        >
          ✕
        </button>
        <video
          src={GYMSTRACK_VIDEO}
          poster="/images/GymsTrack V3/Screenshot 2026-10-06 001838.png"
          controls
          autoPlay
          playsInline
          preload="metadata"
          className="w-full min-h-0 flex-1 bg-black object-contain"
        />
        <div className="p-5 flex flex-col gap-3">
          <h4 className="text-lg font-semibold">{t.promo.modalTitle}</h4>
          <p className="text-sm text-text-dim">{t.promo.modalText}</p>
          <a
            href={GYMSTRACK_PLAY_STORE_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 bg-accent text-bg font-semibold rounded-lg px-4 py-2.5 hover:brightness-110 transition"
          >
            <PlayStoreIcon className="w-4 h-4" />
            {t.promo.cta} — Google Play
          </a>
        </div>
      </div>
    </div>,
    document.body,
  );
}
