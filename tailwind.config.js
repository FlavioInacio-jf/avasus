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
      primary: '#3DBEE8',
      secondary: '#24B5E5',
      tertiary: '#158EB7',
      quartenary: '#158EB7',
    },
  },
};
