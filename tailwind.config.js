module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
    },
    extend: {
      screens: {
        'xs': '320px',
      },
      colors: {
        'primary': '#635FC7',
        'primary-light': '#A8A4FF',
        'primary-lighter': '#E4EBFA',
        'primary-lightest': '#F4F7FD',
        'primary-dark': '#000112',
        'primary-dark-1': '#20212C',
        'primary-dark-2': '#2B2C37',
        'primary-dark-3': '#3E3F4E',
        'primary-dark-4': '#828FA3',
        'primary-red': '#EA5555',
        'primary-red-light': '#FF9898',
      }
    },
  },
  plugins: [],
}