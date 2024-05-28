/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgLight: "#c8f781",
        bgDark: "#1c1c1c",
      },
      backgroundImage: {
        'hero-bg': "url('/src/assets/images/day-hero.svg')",
      }
    },
  },
  plugins: [],
  darkMode: "class",
}
