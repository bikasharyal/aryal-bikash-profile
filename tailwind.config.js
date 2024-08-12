/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : "#0A192F",
        'customDarkRed': '#800000'
      }
    },
  },
  plugins: [],
}