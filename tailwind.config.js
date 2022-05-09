module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero': "url('./../images/banner.png')"
      },
      container: {
        padding: "1.5rem"
      }
    },
  },
  plugins: [],
}