/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {}
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.h-128': {
          height: '32rem',
        },
      });
    },
  ],
}

