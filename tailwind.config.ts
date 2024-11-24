import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0.8" },
          "100%": { opacity: "1" },
        },
        fadeInChildren: {
          "0%": { opacity: "0", transform: "translateX(-5)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        activeItem: {
          "0%": { opacity: "0", transform: "translateY(-20)" },
          "100%": { opacity: "1", transform: "translateX(0) translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn .6s ease-in-out",
        fadeInChildren: "fadeInChildren .6s ease",
        activeItem: "activeItem .2s ease-in-out",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
