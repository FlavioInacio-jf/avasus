const { fontFamily, colors } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html, js, ts, vue}', './src/**/*'],
  theme: {
    extend: {},
  },
  plugins: [],
  extend: {
    fontFamily: {
      montserrat: ['var(--font-montserrat)', ...fontFamily.sans],
    },
    colors: {
      ...colors,
      primary: '#D2202C',
      secondary: '#707070',
      tertiary: '#323237',
      quartenary: '#424146',
    },
  },
};
