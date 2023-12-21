/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Enables dark mode based on the class applied to the HTML tag
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
