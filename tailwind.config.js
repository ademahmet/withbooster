/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2d13aa",
        black: "#000000",
        white: "#ffffff"
      },
      fontFamily: {
        gilroy: ['var(--font-gilroy)', "sans-serif"]
      }
    }
  },
  plugins: []
} 