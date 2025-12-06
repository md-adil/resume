import { createTw } from "react-pdf-tailwind";

export const tw = createTw({
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter",
        serif: "Merriweather",
      },
      colors: {
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        blue: {
          600: "#2563eb",
          700: "#1d4ed8",
          900: "#1e40af",
        },
      },
    },
  },
});
