/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        banditBlue: '#00AEEF',
        cockyYellow: '#FFD700',
        limitedCyan: '#A5F3FC',
        brandDark: '#121212',
      },
    },
  },
  plugins: [],
}