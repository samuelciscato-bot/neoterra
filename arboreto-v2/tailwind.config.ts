import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: "#0D1B2A",
        pacific: "#1B3A4B",
        gold: "#C9A962",
        sand: "#F4F1EA",
        offwhite: "#FAFAF9",
        forest: "#2D5016",
        charcoal: "#1C1C1C",
        warmgray: "#6B6B6B",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        premium: "0 24px 70px rgba(13, 27, 42, 0.25)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(180deg, rgba(13,27,42,0) 0%, rgba(13,27,42,0.75) 100%)",
        "cta-gradient": "linear-gradient(135deg, #C9A962 0%, #B8943D 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
