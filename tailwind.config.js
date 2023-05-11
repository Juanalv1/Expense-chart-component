/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors:{
        'body-bg': ['hsl(27, 66%, 92%)'],
        'primary-bg':['hsl(10, 79%, 65%)'],
        'primary-bg-hover':['hsla(10, 79%, 65%, 0.5)'],
        'primary-text': ['hsl(25, 47%, 15%)'],
      },
      fontFamily:{
        'DM-Sans': ['DM Sans', 'sans serif']
      },
    },
  },
  plugins: [],
}

