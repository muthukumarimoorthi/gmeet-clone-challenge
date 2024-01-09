/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index1.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'main-grid': '2.9fr 1.1fr',
        'second-grid': '2.9fr 1fr'
      }
    },
  },
  plugins: [],
}

