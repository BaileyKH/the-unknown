/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
        jaini: ['"Jaini"', 'serif'],
      },
      colors: {
        bgLight: "#c8f781",
        bgDark: "#0f0f0f",
        primaryBrown: "#66431f",
      },
      backgroundImage: {
        'hero-bg': "url('/src/assets/images/day-hero.svg')",
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
