import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/views/**/*.{jsx,tsx}", "./src/components/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "btn-primary": "#38bdf8",
        "btn-danger": "#ef4444",
        "btn-success": "#34d399",
        "btn-warning": "#fbbf24",
        "btn-gray": "#9ca3af",
        "btn-primary-hover": "#7dd3fc",
        "btn-danger-hover": "#f87171",
        "btn-success-hover": "#6ee7b7",
        "btn-warning-hover": "#fcd34d",
        "btn-gray-hover": "#d1d5db",
      },
    },
  },
  plugins: [],
};
export default config;
