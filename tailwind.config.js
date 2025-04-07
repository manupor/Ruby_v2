/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        mono: ['var(--font-mono)', ...fontFamily.mono],
        thunder: ['var(--font-thunder)', ...fontFamily.sans],
      },
      spacing: {
        // Add your custom spacing here
      },
      screens: {
        // Add your custom breakpoints here
      },
    },
  },
  plugins: [],
}
