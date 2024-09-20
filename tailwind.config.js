/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '450px',
      md: '768px',
      lg: '992px',
      xl: '1124px',
    },
    extend: {
      colors: {
        darkBlue: 'hsl(233, 26%, 24%)',
        limeGreen: 'hsl(136, 65%, 51%)',
        brightCyan: 'hsl(192, 70%, 51%)',
        grayishBlue: 'hsl(233, 8%, 62%)',
        LightGrayishBlue: 'hsl(220, 16%, 96%)',
        lightGray: 'hsl(0, 0%, 98%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        primaryFont: 'Public Sans',
      },
      backgroundImage: {
        introDesktop: "url('/assets/images/bg-intro-desktop.svg')",
        introMobile: "url('/assets/images/bg-intro-mobile.svg')",
        mockups: "url('/assets/images/image-mockups.png')",
      }
    },
  },
  plugins: [],
}


