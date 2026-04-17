"use client";

import { useState } from "react";

type PortraitProps = {
  src: string;
  alt: string;
  fallbackInitials?: string;
  className?: string;
};

/**
 * Portrait image with graceful fallback.
 * If the file at `src` doesn't exist, renders the initials centered on a muted tile.
 */
export default function Portrait({
  src,
  alt,
  fallbackInitials = "JL",
  className = "aspect-[4/5]",
}: PortraitProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={`flex items-center justify-center bg-shade text-ash ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="font-display text-6xl tracking-[0.05em] md:text-7xl">
          {fallbackInitials}
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={() => setErrored(true)}
      className={`block h-auto w-full object-cover ${className}`}
    />
  );
}
