/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        aeonik: ['Aeonik Pro', 'sans-serif'],
        'Aeonik-Pro': 'Aeonik Pro',
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        "main-black": "#000000",
        "main-white": "#ffffff",
        "main-language": "#0f0f0f",
        "main-language0": "#262626",
        "main-language1": "#C2C2C2",
        "main-redt": "#C61F1F",
        "main-footer": "rgba(161, 161, 161, 1", 
        "header-color": "rgba(198, 31, 31, 1)",
        primary: '#3490dc',
        secondary: '#f1c40f',
        danger: '#e74c3c',
      },
      spacing: {
        50: '12rem',
      },
    },
  },
  plugins: [],
}