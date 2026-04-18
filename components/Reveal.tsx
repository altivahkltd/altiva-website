"use client";

import { useEffect } from "react";

/**
 * Client-side scroll reveal.
 * Adds `.in` to every `.reveal` element when it enters the viewport,
 * matching the design prototype's IntersectionObserver wiring.
 * Honours `prefers-reduced-motion` via the CSS side (transitions disabled
 * globally, and .reveal defaults to `opacity:1` under the media query).
 */
export default function Reveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const targets = document.querySelectorAll<HTMLElement>(".reveal");

    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      targets.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
