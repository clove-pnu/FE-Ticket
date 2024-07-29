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
        cgray: {
          DEFAULT: '#c0c0c0',
        },
        cred: {
          DEFAULT: '#ff7070',
        },
        cgreen: {
          DEFAULT: '#94f692',
          dark: '#319447',
        },
      },
    },
  },
  plugins: [],
};
