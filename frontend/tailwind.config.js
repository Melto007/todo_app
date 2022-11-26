/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'black': '#000',
      'white': '#fff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
    },
    screens: {
      'sm-screen1': '420px',
      'sm-screen2': '550px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'lg-screen': '1040px',
      'xl': '1280px',
      'xl-screen2': '1440px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}