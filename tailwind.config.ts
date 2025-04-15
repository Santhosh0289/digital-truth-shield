
import type { Config } from "tailwindcss";

export default {
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
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        // Custom color palette
        truth: {
          50: '#f8f2bf',
          100: '#e8e5c3',
          200: '#002263',
          500: '#890304',
          600: '#00113a',
          700: '#002263',
        },
        background: {
          DEFAULT: "#00113a",
          secondary: "#002263",
        },
        foreground: {
          DEFAULT: "#e8e5c3",
          muted: "#f8f2bf",
        },
        primary: {
          DEFAULT: "#890304",
          dark: "#00113a",
        },
        accent: {
          DEFAULT: "#002263",
          light: "#00113a",
        },
        border: {
          DEFAULT: "#890304",
        },
      },
      backgroundImage: {
        'gradient-truth': 'linear-gradient(to right, #890304, #00113a)',
      },
      boxShadow: {
        'truth-glow': '0 0 15px rgba(137,3,4,0.5)',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

