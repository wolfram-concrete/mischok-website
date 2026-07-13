import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design tokens — HANDOFF §6
        bg: "#F6F6F5", // Seitenhintergrund
        section: "#E4E3E1", // Sektionsflächen
        card: "#EDECEA", // Karten
        navy: "#002A5C", // Primär / Akzent
        accent: "#002A5C", // Alias für navy
        onNavy: "#EAE8E1", // Text auf Navy
        slate: "#384352", // Fließtext
        ink: "#1A222A", // Zitate
        muted: "#8C9198", // Sekundärtext
        line: "#D5D4D1", // Trennlinien / Rahmen
        btn: "#E4E2DE",
        "btn-grad-end": "#D6D6D6", // Button-Verlauf & Panels
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", '"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
        mono: ["var(--font-sans)", '"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
      },
      borderRadius: {
        card: "5px",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        heroRevealTop: {
          from: { clipPath: "inset(0 0 100% 0)" },
          to: { clipPath: "inset(0 0 0 0)" },
        },
        heroRevealBottom: {
          from: { clipPath: "inset(100% 0 0 0)" },
          to: { clipPath: "inset(0 0 0 0)" },
        },
        heroRevealLeft: {
          from: { clipPath: "inset(0 100% 0 0)" },
          to: { clipPath: "inset(0 0 0 0)" },
        },
        heroRevealRight: {
          from: { clipPath: "inset(0 0 0 100%)" },
          to: { clipPath: "inset(0 0 0 0)" },
        },
        heroTextUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        heroSparkIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        heroSlitGrow: {
          from: { transform: "translateX(-50%) scaleY(0)" },
          to: { transform: "translateX(-50%) scaleY(1)" },
        },
        heroBeamPulse: {
          "0%, 100%": { opacity: "0.82" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
