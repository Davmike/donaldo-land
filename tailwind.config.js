/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '500px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px'
    },
  },
  plugins: [],
}