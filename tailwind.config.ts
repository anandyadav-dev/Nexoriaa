import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        midnight: "#0c1430",
        aurora: "#7c3aed",
        cyan: "#06b6d4",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(6, 182, 212, 0.22)",
        card: "0 18px 45px rgba(7, 17, 31, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
