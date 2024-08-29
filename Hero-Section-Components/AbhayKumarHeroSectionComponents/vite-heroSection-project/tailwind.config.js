/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      backgroundImage: {
        'gradient-rainbow': 'linear-gradient(-45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
      },
      animation: {
        gradient: 'gradientShift 15s ease infinite',
      },
    },
  },
  plugins: [],
}

