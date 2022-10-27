/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: 'Playfair Display',
        raleway: 'Raleway',
        della: 'Della Respira'
      },
      backgroundImage: (theme) => ({
        'hero': "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)),url('../src/assets/pic2.png')",
        'birthday': "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('../src/assets/birthday_img.png')",
        'maternity': "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('../src/assets/maternity.png')",
        'shopping': "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)),url('../src/assets/shoppin.svg')",
        'virtual': "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('../src/assets/virtual.png')",
        'virtual_small': "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)),url('../src/assets/virtual_small.png')",
        'birthday_small': "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)),url('../src/assets/birthday_small.png')",
        'maternity_small': "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)),url('../src/assets/maternity_small.png')",
        'service1': "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)),url('../src/assets/S.svg')",
        'service2': "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)),url('../src/assets/photo1.jpg')",
        'service3': "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)),url('../src/assets/Y.jpg')",
        'service4': "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)),url('../src/assets/L.svg')",
        'service5': "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)),url('../src/assets/E.jpg')",
      }),
    },
  },
  plugins: [],
}
