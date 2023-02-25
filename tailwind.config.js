module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          darker: '#220901',
          dark: '#621708',
          DEFAULT: '#941b0c',
          light: '#ad1400'
        }
      },
      fontFamily: {
        headline: 'Mulish, sans-serif'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
