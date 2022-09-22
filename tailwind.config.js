/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: 'Playfair Display',
        raleway: 'Raleway'
      },
      backgroundImage: (theme) => ({
        'hero': "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('../src/assets/pic2.png')",
        'birthday': "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('../src/assets/birthday_img.png')",
        'maternity': "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('../src/assets/maternity.png')",
        'shopping': "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('../src/assets/shopping.png')",
      }),
    },
  },
  plugins: [],
}
