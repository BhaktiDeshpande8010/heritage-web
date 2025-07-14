/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
    colors: {
      primary: '#d72638', // your homepage red
      accent: '#A3845C', // this brown-gold from Explore
      bg: '#fff9f2', // universal background
    },
  },
  },
  plugins: [],
}
