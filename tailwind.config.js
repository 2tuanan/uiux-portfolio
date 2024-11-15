/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'exo': ['Exo', 'sans-serif'],
        'great-vibes': ['Great Vibes', 'cursive'],
        'oswald': ['Oswald', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
        // marqueePause: 'marqueePause 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        // marqueePause: {
        //   '0%': { transform: 'translateX(0)' },
        //   '20%': { transform: 'translateX(0)' },
        //   '40%': { transform: 'translateX(-33.33%)' },
        //   '60%': { transform: 'translateX(-33.33%)' },
        //   '100%': { transform: 'translateX(-100%)' },
        // },
      },
    },
  },
  plugins: [],
};
