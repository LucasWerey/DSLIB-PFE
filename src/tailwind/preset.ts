const pxToRem = (px: number) => `${px / 16}rem`

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      test: '#00F2A5',
      primary: {
        DEFAULT: '#000000',
        light: '#00F2A5'
      },
      secondary: {
        DEFAULT: '#FFFFFF',
        light: '#00F2A5'
      },
      error: {
        DEFAULT: '#F22B00',
        light: '#00F2A5'
      }
    },
    fontSize: {
      1: pxToRem(10),
      2: pxToRem(12),
      3: pxToRem(14),
      4: pxToRem(16),
      5: pxToRem(18),
      6: pxToRem(20),
      7: pxToRem(22),
      8: pxToRem(24),
      9: pxToRem(26),
      10: pxToRem(28),
      11: pxToRem(30),
      12: pxToRem(32),
      13: pxToRem(34),
      14: pxToRem(36)
    }
  },
  plugins: [
    function ({ addComponents, theme }: any) {
      addComponents({
        '.DS-text-xs': {
          fontSize: theme('fontSize.1'),
          fontWeight: 400
        },
        '.DS-text-s': {
          fontSize: theme('fontSize.2'),
          fontWeight: 400
        },
        '.DS-text-m': {
          fontSize: theme('fontSize.3'),
          fontWeight: 400
        },
        '.DS-text-l': {
          fontSize: theme('fontSize.4'),
          fontWeight: 400
        },
        '.DS-text-xl': {
          fontSize: theme('fontSize.12'),
          fontWeight: 400
        }
      })
    }
  ]
}
