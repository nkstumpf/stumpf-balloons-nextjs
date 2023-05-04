// eslint-disable-next-line no-unused-vars
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',

  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],

  theme: {
    extend: {},

    screens: {
      xs: '320px',
      sm: '480px',
      md: '760px',
      lg: '960px',
      xl: '1200px',
      xxl: '1600px'
    },

    colors: {
      black: '#323232',
      white: '#f9f9f9',
      grey: '#94a3b5',
      teal: '#2DD4BF',
      red: '#EF4444',
      indigo: '#818CF8',

    },

    fontFamily: {
      header: ['Nunito', 'Helvetica', 'Arial', 'sans-serif'],
      base: ['Work Sans', 'sans-serif']
    },

    fontSize: {
      base: ['1rem', '1.75rem'], // 16px x 28px
      baseLg: ['1.375rem', '2.125rem'], // 22px x 34px

      headerSm: ['1.5rem', '2.25rem'], // 20px x 32px
      header: ['1.75rem', '2.5rem'], // 24px x 36px
      headerLg: ['2rem', '3rem'], // 28px x 48px
    }
  },
  plugins: [],
};
