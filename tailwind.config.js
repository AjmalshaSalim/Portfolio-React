/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        standardbg: '#FF0000', 
        standardfont: '#00FF00', 
        standardcolor: '#0000FF',
        modernbg:'#a0d81d',
        modernfont:'#ffff',
        moderncolor:'#ffff',
        blacked:'#000',
        whiten:'#ffff' 
      },
    },
  },
  plugins: [],
}

