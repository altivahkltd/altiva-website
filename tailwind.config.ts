import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm premium palette — stone + muted gold, per UI UX Pro Max (Bodoni/Jost pairing)
        paper: "#FAFAF9",   // background (warm off-white)
        ink: "#0C0A09",     // primary text (warm near-black)
        graphite: "#1C1917", // surfaces / primary buttons
        stone: "#44403C",   // secondary text
        ash: "#78716C",     // muted text
        line: "#E7E5E4",    // hairline borders
        shade: "#F5F5F4",   // subtle tinted background
        gold: "#A16207",    // accent — use sparingly
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw, 5.5rem)", { lineHeight: "1.04", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 3.75rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
