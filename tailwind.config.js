/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    screens: {
      'sm': '400px',
      'md': '768px',
      'lg': '1024px',
    },
    extend: {
      colors: {
        'kblue': '#283044',
        'kgray': '#808F85',
        'kred': '#A0153E',
      },
    },
  },
  plugins: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
}

