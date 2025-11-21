/**** @type {import('tailwindcss').Config} ****/
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef5ff',
          100: '#dbeaff',
          200: '#bcd5ff',
          300: '#8ab7ff',
          400: '#588eff',
          500: '#2f66ff',
          600: '#1e46db',
          700: '#1836ab',
          800: '#142f88',
          900: '#11276f'
        }
      }
    }
  },
  plugins: []
};
