module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        muli: ['muli', 'sans-serif'],
      },
      textColor: {
        primary: '#29B7FF',
        secondary: '#B1BED1',
      },
      borderColor: (theme) => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        primary: '#29B7FF',
        secondary: '#B1BED1',
      }),
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: '#111219',
        secondary: '#29B7FF',
      }),
      backgroundImage: (theme) => ({
        stars: "url('/src/Assets/Images/stars.jpg')",
        galaxy: "url('/src/Assets/Images/galaxy.jpg')",
      }),
      screens: {
        md: '920px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
