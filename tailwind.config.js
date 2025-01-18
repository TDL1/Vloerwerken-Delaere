/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        wallpoet: ['Wallpoet', 'sans-serif'],
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
      });
    },
  ],
}

