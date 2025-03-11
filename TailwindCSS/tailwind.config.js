/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      backgroundImage:{
        'bgi':"url('https://gamezone.io/img/main/mainSection/bg-mobile.png')",
        'bgii':"url('https://gamezone.io/img/main/unlocking/back.png')",
        'bgiii':"url('https://gamezone.io/img/main/nft/back.png')"
      },
      fontFamily:{
        majime:['majime','san-serif']
      }
    },
  },
  plugins: [],
  corePlugins:{
    backdropFilter:true,
  }
}

