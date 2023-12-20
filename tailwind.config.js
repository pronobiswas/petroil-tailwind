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
            'service-bg1':"linear-gradient(rgba(0, 0, 0, 0.445),rgba(0, 0, 0, 0.604)),url(./images/service-image01.jpg)",
            'service-bg2':"linear-gradient(rgba(0, 0, 0, 0.445),rgba(0, 0, 0, 0.604)),url(./images/service-image02.png)",
            'service-bg3': "linear-gradient(rgba(0, 0, 0, 0.445),rgba(0, 0, 0, 0.604)),url(./images/service-image03.png)",
            'footer-texture': "url('/img/footer-texture.png')",
          }
      }
    }
  }