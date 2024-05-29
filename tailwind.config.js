/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: [`"Inter", sans-serif;`],
        jaini: [`"Jaini Purva", system-ui;`]
      },
      colors: {
        bgLight: "#c8f781",
        bgDark: "#1c1c1c",
        primaryBrown: "#66431f",
      },
      backgroundImage: {
        'hero-bg': "url('/src/assets/images/day-hero.svg')",
      }
    },
  },
  plugins: [],
  darkMode: "class",
}
