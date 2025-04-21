const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        brand: '#c19652',
        'brand-dark': '#a7813c',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        mono: ['var(--font-mono)', ...fontFamily.mono],
        thunder: ['var(--font-thunder)', ...fontFamily.sans],
      },
      spacing: {
        // Ejemplo: '72': '18rem',
      },
      screens: {
        // Ejemplo: '3xl': '1920px',
      },
    },
  },
  plugins: [],
}
