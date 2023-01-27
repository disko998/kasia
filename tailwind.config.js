/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      colors: {
        'soft-white': '#F5F4F0',
        'soft-black': '#272823',
        'light-brown': '#8E827D',
        'silver-brown': '#C7C7C7',
        'light-yellow': '#EED7A1',
        orange: '#CD8B62',
        'red-orange': '#CE6249',
        'light-blue': '#6F9FA3',
        blue: '#55707F',
        'dark-blue': '#394556'
      },
      fontSize: {
        xxs: '.625rem'
      },
      borderWidth: {
        1: '1px'
      }
    }
  },
  plugins: []
}
