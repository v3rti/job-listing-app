/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "hsl(180, 29%, 50%)", // Desaturated Dark Cyan
        "lg-cyanbg": "hsl(180, 52%, 96%)", // Light Grayish Cyan Background
        "lg-cyan": "hsl(180, 31%, 95%)", // Light Grayish Cyan
        "dg-cyan": "hsl(180, 8%, 52%)", // Dark Grayish Cyan
        "very-dg-cyan": "hsl(180, 14%, 20%)" // Very Dark Grayish Cyan
      }
    },
    fontFamily: {
      leagueSpartan: ['League Spartan', 'sans-serif']
    }
  },
  plugins: [],
}