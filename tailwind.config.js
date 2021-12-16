const colors = require('tailwindcss/colors')
// plugins
// const typography = require('./tailwindPlugins/typography');

module.exports = {
  mode: 'jit',

  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],

  theme: {
    extend: {},

    screens: {
      xxs: '240px',
      xs: '320px',
      sm: '480px',
      md: '760px',
      lg: '960px',
      xl: '1200px',
      xxl: '1600px'
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },

    fontFamily: {
      header: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
      sans: ['proxima-nova', 'Arial', 'sans-serif']
    },
  },
  plugins: [],
}
