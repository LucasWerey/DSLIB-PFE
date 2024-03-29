module.exports = {
  content: ['./src/**/*.vue'],
  presets: [require('./src/tailwind/preset.js')],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        eina1: ['Eina1', 'sans-serif']
      },
      fontWeight: {
        500: '500',
        700: '700',
        800: '800',
        medium: '500',
        bold: '700'
      }
    }
  }
}
