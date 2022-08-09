/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "body-blue": "#162E3C",
        "button-green": "#DDF0A7"
      }
    },
  },
  plugins: [],
  darkMode: 'class'
};
