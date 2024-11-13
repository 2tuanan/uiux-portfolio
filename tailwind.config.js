/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'exo': ['Exo', 'sans-serif'],
        'great-vibes': ['Great Vibes', 'cursive'],
        'oswald': ['Oswald', 'sans-serif'],
      }
    },
  },
  plugins: [],
}