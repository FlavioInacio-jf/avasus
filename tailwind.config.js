const { fontFamily, colors } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html, js, ts, tsx, vue, css}', './src/**/*'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
      },
      colors: {
        ...colors,
        primary: '#D2202C',
        secondary: '#707070',
        tertiary: '#323237',
        quartenary: '#424146',
      },
    },
  },
  plugins: [],
  extend: {},
};
