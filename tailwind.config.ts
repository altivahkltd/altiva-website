import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Altiva editorial palette — bone/ink/brass per design handoff.
        bone: "#ECE6D7",
        "bone-2": "#E4DDCA",
        "bone-3": "#D9D1BC",
        ink: "#0E0E10",
        "ink-2": "#1A1A1D",
        muted: "#5A5852",
        "muted-2": "#84817A",
        accent: "#B08D57", // brass
      },
      fontFamily: {
        sans: ["var(--font-sans)", "-apple-system", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "-apple-system", "system-ui", "sans-serif"],
        italic: ["var(--font-italic)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "Menlo", "monospace"],
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      maxWidth: {
        wrap: "1360px",
      },
    },
  },
  plugins: [],
};

export default config;
