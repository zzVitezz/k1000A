import { url } from 'inspector';

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
        'kblue': '#035397',
        'kred': '#A0153E',
        'kyellow': '#FCD900',
        'kblack': '#303841',
        'kwhite': '#EEEEEE'
      },
      backgroundImage: {
        'login': "url('/images/monis.jpg')",
      }
    },
  },
  plugins: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
}

