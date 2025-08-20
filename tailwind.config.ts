import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 0px rgba(59,130,246,0.0)" },
          "50%": { boxShadow: "0 0 30px rgba(59,130,246,0.35)" },
        },
      },
      animation: {
        glow: "glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
