/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#0c2340',
        'custom-dark-blue': '#081629',
        'custom-grey': '#555',
        'custom-light-blue': '#143865',
        'custom-sky-blue': '#edf2f9',
        'custom-dark-sky-blue': '#c1cddd',
      },
      fontFamily: {
        sans: ['Libre Franklin', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}

