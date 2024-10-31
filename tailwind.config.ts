import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'main': '#703BE7',
        'secondary': '#F1EBFD',
        'secondary-text': '#8D62EC',
        'logout': '#FF6D6D',
        'logout-hover': '#ffdede'
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
