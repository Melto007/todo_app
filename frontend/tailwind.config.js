/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#03203C',
      'black': '#000',
      'white': '#fff',
      'purple': '#7e5bef',
      'pink': '#E03B8B',
      'dark-blue': '#383CC1',
    },
    screens: {
      'sm-screen1': '420px',
      'sm-screen2': '550px',
      'sm': '640px',
      'md': '768px',
      'md-screem2': '820px',
      'lg': '1024px',
      'lg-screen': '1040px',
      'xl': '1280px',
      'xl-screen2': '1440px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}