/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.border-r-150': {
          borderRightWidth: '150px',
        },
        '.border-l-150': {
          borderLeftWidth: '150px',
        },
      });
    },
  ],
}

