/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-dark': '#1D1D1D',
        'dull-white': '#FFFFFFB3',
        'white-light': '#FFFFFF30',
        'white-medium': '#FFFFFF40',
        'neon-blue': '#2FB8FF',
        'footer-header': '#4388D9',
        'blue': '#0241BB',
        'soft-gray': '#F5F5FF',
      },
      backgroundImage: {
        'hero': "url('../src/assets/bg-img5.png')",
      }
    },
  },
  plugins: [],
}

