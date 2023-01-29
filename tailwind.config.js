/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        DEFAULT: '100%'
      }
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
      fontFamily: {
        serif: ['var(--font-imbue)'],
        sans: ['var(--font-jeko)']
      },
      fontSize: {
        xs: '.625rem',
        sm: '.75rem',
        base: '0.875rem',
        h3: '1.5rem',
        h2: '3rem',
        h1: '4.875rem'
      },
      borderWidth: {
        1: '1px'
      },
      borderRadius: {
        xl: '1rem'
      },
      backdropBlur: {
        md: '10px'
      }
    }
  },
  plugins: []
}
