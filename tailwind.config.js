module.exports = {
  purge: [
    './src/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens:{
      'moto':'360px',
      'mobile':'526px',
      'ipad':'768px',
      'ipadpro':'1024px',
      'macbkair':'1280px',
      'hd':'1366px',
      'fhd':'1920px',
    },
    extend: {
      fontFamily:{
        Nunito:'Nunito',
      },
      colors:{
        primary:'#ff0000',
      },
      width:{
        460:'28.75rem',
        500:'31.25rem',
        587:'36.68rem',
        594:'37.17rem',  
        690:'43.125rem',
      },
      height:{
        582:'36.37rem',
      },
      backgroundImage: {
        'blog-banner':"url('./Images/Blogs/blogs-banner.webp')",
      },
      backgroundSize:{
        'bgimg':'100% 100%',
      },
      maxHeight:{
        '90':'90vh',
      },
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
