/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        clove: {
          DEFAULT: '#567ace',
          light: '#b7d3e9',
        },
      },
    },
  },
  plugins: [],
};
