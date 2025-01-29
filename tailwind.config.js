/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Disket Mono", ...defaultTheme.fontFamily.mono, 'monospace'],
      },
    },
  },
  plugins: [],
}

