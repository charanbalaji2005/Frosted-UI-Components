
import type { Config } from "tailwindcss";

export const frostedPreset: Config = {
  theme: {
    extend: {

      backdropBlur: {
        "4xl": "72px",
        "5xl": "96px",
        "frosted": "40px",
        "frosted-heavy": "60px",
        "frosted-ultra": "80px",
      },

      colors: {
        frosted: {

          "glass-dark": "rgba(255, 255, 255, 0.04)",
          "glass-mid": "rgba(255, 255, 255, 0.07)",
          "glass-light": "rgba(255, 255, 255, 0.10)",
          "glass-active": "rgba(255, 255, 255, 0.14)",

          "border-subtle": "rgba(255, 255, 255, 0.08)",
          "border-mid": "rgba(255, 255, 255, 0.12)",
          "border-bright": "rgba(255, 255, 255, 0.18)",

          "glow-purple": "rgba(120, 80, 255, 0.35)",
          "glow-blue": "rgba(60, 160, 255, 0.3)",
          "glow-pink": "rgba(255, 60, 200, 0.25)",
          "glow-teal": "rgba(0, 200, 180, 0.25)",
        },
      },

      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
        "island": "100px",
      },

      boxShadow: {
        "frosted-sm": "0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
        "frosted-md": "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.10)",
        "frosted-lg": "0 16px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.12)",
        "frosted-xl": "0 24px 80px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.14)",
        "glow-purple": "0 0 40px rgba(120, 80, 255, 0.35)",
        "glow-blue": "0 0 40px rgba(60, 160, 255, 0.3)",
        "glow-pink": "0 0 40px rgba(255, 60, 200, 0.3)",
        "island-float": "0 8px 32px rgba(0, 0, 0, 0.4), 0 0 60px rgba(120, 80, 255, 0.2)",
      },

      keyframes: {
        "glass-shimmer": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "orb-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.4" },
          "50%": { transform: "scale(1.12)", opacity: "0.15" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "island-breathe": {
          "0%, 100%": { transform: "scaleX(1)" },
          "50%": { transform: "scaleX(0.98)" },
        },
      },
      animation: {
        "glass-shimmer": "glass-shimmer 3s linear infinite",
        "orb-pulse": "orb-pulse 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "island-breathe": "island-breathe 4s ease-in-out infinite",
      },

      backgroundImage: {
        "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)",
        "glass-gradient-vertical": "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)",
        "glow-purple": "radial-gradient(ellipse, rgba(120,80,255,0.3), transparent)",
        "glow-blue": "radial-gradient(ellipse, rgba(60,160,255,0.25), transparent)",
        "noise": "url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==\")",
      },
    },
  },
  plugins: [],
} as Config;

export default frostedPreset;
