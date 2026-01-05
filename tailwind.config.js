/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        deep: "#0a0a0a",
        accent: "#FF8C00",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,140,0,0.3), 0 8px 30px rgba(255,140,0,0.08)"
      }
    },
  },
  plugins: [],
}


