tailwind.config = {
    theme: {
      extend: {
        colors: {
          clifford: '#da373d',
          primary: '#F40404'
        },
        maxWidth: {
            'container': '1144px',
          },
          fontFamily: {
            'poppins': "'poppins', sans-serif ",
          },
          backgroundImage: {
            'banner-bg': "linear-gradient(rgba(0, 0, 0, 0.445),rgba(0, 0, 0, 0.604)), url('./images/banner-bg.jpg')",
            'footer-texture': "url('/img/footer-texture.png')",
          }
      }
    }
  }