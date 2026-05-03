/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line is crucial!
  ],
  theme: {
    extend: {
      colors: {
        brand: '#FA6C48', // This adds your specific hex color
      }
    },
  },
  plugins: [],
}