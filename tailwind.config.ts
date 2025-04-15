
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
        // Dark theme color palette
        background: {
          DEFAULT: "#0A0A0F",
          secondary: "#121217",
        },
        foreground: {
          DEFAULT: "#E0E0E5",
          muted: "#8E8E93",
        },
        primary: {
          DEFAULT: "#3498db",
          dark: "#2980b9",
        },
        accent: {
          DEFAULT: "#2C3E50",
          light: "#34495E",
        },
        border: {
          DEFAULT: "#1E1E25",
        },
        ring: {
          DEFAULT: "#3498db",
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'dark-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
      },
      keyframes: {
        'pulse-dark': {
          '0%, 100%': { opacity: '1', backgroundColor: '#121217' },
          '50%': { opacity: '0.8', backgroundColor: '#0A0A0F' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 5px #3498db' },
          '50%': { boxShadow: '0 0 20px #3498db' },
        }
      },
      animation: {
        'pulse-dark': 'pulse-dark 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
