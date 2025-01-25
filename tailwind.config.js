/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        blackopsone: ['Black Ops One', 'sans-serif'],
      },
      screens: {
        // Add custom max-width media query for 700px
        'max-md': { 'max': '767px' },
        'max-sm': { 'max': '639px' },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.h-128': {
          height: '36rem',
        },
        '.text-xxs': {
          'font-size': '0.5rem',
          'line-height': '0.75rem',
        },
      });
    },
  ],
}

