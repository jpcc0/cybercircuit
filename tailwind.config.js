/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        pirata: ['"Pirata One"', 'cursive'],
        pixelify: ['"Pixelify Sans"', 'sans-serif'],
      },
      colors: {
        'ethereal-ivory': '#E4E4DE',
        'sophisticated-sage': '#C4C5BA',
        'timeless-noir': '#1B1B1B',
        'muted-moss': '#595F39',
      },
    },
  },
  plugins: [],
}
