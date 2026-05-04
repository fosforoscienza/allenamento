import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef9ff",
          100: "#daf1ff",
          200: "#bde7ff",
          300: "#8fd8ff",
          400: "#59c0ff",
          500: "#33a3ff",
          600: "#1d83f5",
          700: "#1869e0",
          800: "#1a55b5",
          900: "#1c4a8f",
        },
      },
    },
  },
  plugins: [],
};

export default config;
