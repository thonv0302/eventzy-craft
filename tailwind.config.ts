import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // optional: if you want to support dark mode
  content: [
    "./app/**/*.{ts,tsx}", // Next.js App Router
    "./pages/**/*.{ts,tsx}", // Next.js Pages Router
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}", // Common if you're using /src structure
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
};
