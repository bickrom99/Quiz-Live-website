/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        noto_font: ["Noto Serif", "serif"],
        roboto: ["Roboto", "sans-serif"]
      },
    },
  },
  plugins: [
    daisyui
  ],
}