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
        brand: 'var(--brand)',
        'brand-dark': 'var(--brand-dark)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        border: 'var(--border)',
        ring: 'var(--ring)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        mono: ['var(--font-mono)', ...fontFamily.mono],
        thunder: ['var(--font-thunder)', ...fontFamily.sans],
      },
      borderRadius: {
        sm: 'calc(var(--radius) - 4px)',
        md: 'calc(var(--radius) - 2px)',
        lg: 'var(--radius)',
        xl: 'calc(var(--radius) + 4px)',
      },
    },
  },
  plugins: [],
}
