"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

export function Carousel({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);

  const go = (delta: number) => {
    setIndex((i) => (i + delta + images.length) % images.length);
  };

  return (
    <div className="relative h-[220px] bg-bg-soft overflow-hidden select-none">
      <Image
        src={images[index]}
        alt={`${alt} — image ${index + 1} sur ${images.length}`}
        fill
        sizes="(max-width: 640px) 100vw, 400px"
        className="object-contain"
      />

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
  );
}
