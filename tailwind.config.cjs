/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7FB7A8",
        secondary: "#F7EFE5",
        accent: "#E8AEB7",
      },
    },
  },
  plugins: [],
}
