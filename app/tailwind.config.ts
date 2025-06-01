
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#B31C8B",
          foreground: "#FFFFF9",
        },
        secondary: {
          DEFAULT: "#23012C",
          foreground: "#FFFFF9",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#FFF7F7",
          foreground: "#5A5A5A",
        },
        accent: {
          DEFAULT: "#09002A",
          foreground: "#FFFFF9",
        },
        popover: {
          DEFAULT: "#FFFFF9",
          foreground: "#5A5A5A",
        },
        card: {
          DEFAULT: "#FFFFF9",
          foreground: "#5A5A5A",
        },
        // Enlightened Beauty brand colors
        'luminous-ivory': '#FFFFF9',
        'soft-blush': '#FFF7F7',
        'radiant-fuchsia': '#B31C8B',
        'deep-plum': '#23012C',
        'cosmic-navy': '#09002A',
        'charcoal-grey': '#5A5A5A',
        'silver-metallic': '#C0C0C0',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'cardo': ['Cardo', 'serif'],
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
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "count-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "mystical-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(179, 28, 139, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(179, 28, 139, 0.5)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "count-up": "count-up 0.8s ease-out forwards",
        "mystical-glow": "mystical-glow 3s ease-in-out infinite",
      },
      backgroundImage: {
        'mystical-gradient': 'linear-gradient(135deg, #FFFFF9 0%, #FFF7F7 50%, #FFFFF9 100%)',
        'sacred-gradient': 'linear-gradient(135deg, #B31C8B 0%, #23012C 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
