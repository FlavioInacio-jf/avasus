const { fontFamily, colors } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html, js, ts, tsx, vue, css}', './src/**/*'],
  theme: {
    screens: {
      xss: { max: '459px' },
      xs: { min: '460px', max: '639px' },
      sm: { min: '640px', max: '767px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: '768px', max: '992px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: '993px', max: '1110px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: '1111px', max: '1535px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': { min: '1536px' },
      // => @media (min-width: 1536px) { ... }
    },
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
