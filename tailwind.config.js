/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0F14',
        surface: '#121821',
        primary: '#3B82F6',
        secondary: '#8B5CF6',
        highlight: '#22D3EE',
      },
    },
  },
  plugins: [],
}