module.exports = {
  purge:  {
    enabled: true,
    content: [
      './public/*.html',
      './src/*.tsx',
      './src/**/*.tsx'
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
