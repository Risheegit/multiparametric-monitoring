/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue' : '#322F6A',
        'orange' : '#F58634'
      }
    },
  },
  plugins: [],
}