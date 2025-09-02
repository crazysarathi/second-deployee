/** @type {import('tailwindcss').Config} */
const { heroui } = require("@heroui/theme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}" // if using the app directory
  ],
  theme: {
    extend: {},
  },

  plugins: [heroui()],
}
