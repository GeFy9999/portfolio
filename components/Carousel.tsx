"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

export function Carousel({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const go = (delta: number) => {
    setIndex((i) => (i + delta + images.length) % images.length);
  };

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft")
        setIndex((i) => (i - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [open, images.length]);

  return (
    <>
      <div className="relative h-[220px] bg-bg-soft overflow-hidden select-none">
        <div
          className="absolute inset-0 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <Image
            src={images[index]}
            alt={`${alt} — image ${index + 1} sur ${images.length}`}
            fill
            sizes="(max-width: 640px) 100vw, 400px"
            className="object-contain pointer-events-none"
          />
        </div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Image précédente"
              onClick={() => go(-1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-bg/70 border border-card-border flex items-center justify-center text-text hover:bg-bg hover:border-accent transition-colors"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <button
              type="button"
              aria-label="Image suivante"
              onClick={() => go(1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-bg/70 border border-card-border flex items-center justify-center text-text hover:bg-bg hover:border-accent transition-colors"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((img, i) => (
                <button
                  key={img}
                  type="button"
                  aria-label={`Aller à l'image ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${i === index ? "bg-accent" : "bg-text-dim/50"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90"
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              aria-label="Fermer"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors text-xl"
            >
              ✕
            </button>

            <img
              src={images[index]}
              alt={`${alt} — image ${index + 1} sur ${images.length}`}
              onClick={(e) => e.stopPropagation()}
              className="max-w-[90vw] max-h-[85vh] object-contain"
            />

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Image précédente"
                  onClick={(e) => {
                    e.stopPropagation();
                    go(-1);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <ChevronLeftIcon className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  aria-label="Image suivante"
                  onClick={(e) => {
                    e.stopPropagation();
                    go(1);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </button>
                <div
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  {images.map((img, i) => (
                    <button
                      key={img}
                      type="button"
                      aria-label={`Aller à l'image ${i + 1}`}
                      onClick={() => setIndex(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${i === index ? "bg-white" : "bg-white/40"}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>,
          document.body,
        )}
    </>
  );
}
