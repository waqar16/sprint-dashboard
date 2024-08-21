import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "chatbot-gradient":
          "linear-gradient(177deg, #0D132D -10.3%, #171A2A 179.5%)",
        "colorPicker-gradient":
          "linear-gradient(168deg, #11162D -1.15%, #161C3A 104.8%)",
        "generate-button-gradient":
          "linear-gradient(124deg, #17C49B 5.11%, #04ADA3 93.52%)",
        "link-added-gradient":
          "linear-gradient(21deg, #22273E 57.59%, rgba(34, 39, 62, 0.00) 174.6%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
