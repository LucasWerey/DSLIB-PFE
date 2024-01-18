export default Object.freeze({
  theme: {
    colors: {
      basic: {
        black: '#1B1B1E',
        darkgrey: '#787878',
        grey: '#CDCDCD',
        lightgrey: '#ECECEC',
        verylightgrey: '#F6F6F6',
        white: '#FFFFFF'
      },
      primary: {
        DEFAULT: '#000000',
        light: '#00F2A5',
        charcoal: '#373F51',
        moonstone: '#58A4B0',
        lightmoonstone: '#58A4B0',
        powder: '#A9BCD0',
        platinum: '#D8DBE2'
      },
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      error: '#FF5656',
      warning: '#FFC85C',
      success: '#7BC079',
      info: '#333333'
    },
    fontSize: {
      1: '0.625rem',
      2: '0.75rem',
      3: '0.875rem',
      4: '1rem',
      5: '1.125rem',
      6: '1.25rem',
      7: '1.375rem',
      8: '1.5rem',
      9: '1.625rem',
      10: '1.75rem',
      11: '1.875rem',
      12: '2rem',
      13: '2.125rem',
      14: '2.25rem',
      15: '2.375rem',
      16: '2.5rem',
      17: '2.625rem',
      18: '2.75rem',
      19: '2.875rem',
      20: '3rem'
    }
  },
  plugins: [
    function ({ addComponents, theme }: any) {
      addComponents({
        '.DS-text-title': {
          fontSize: theme('fontSize.24'),
          fontWeight: 800,
          fontFamily: theme('fontFamilly.default')
        },
        '.DS-text-h2': {
          fontSize: theme('fontSize.16'),
          fontWeight: 800,
          fontFamily: theme('fontFamilly.default')
        },
        '.DS-text-h3': {
          fontSize: theme('fontSize.8'),
          fontWeight: 800,
          fontFamily: theme('fontFamilly.default')
        },
        '.DS-text-large': {
          fontSize: theme('fontSize.8'),
          fontWeight: 500,
          fontFamily: theme('fontFamilly.default')
        },
        '.DS-text-body': {
          fontSize: theme('fontSize.4'),
          fontWeight: 400,
          fontFamilly: theme('fontFamilly.second')
        },
        '.DS-text-body-bold': {
          fontSize: theme('fontSize.4'),
          fontWeight: 700,
          fontFamilly: theme('fontFamilly.second')
        },
        '.DS-text-small': {
          fontSize: theme('fontSize.3'),
          fontWeight: 400,
          fontFamilly: theme('fontFamilly.second')
        },
        '.DS-text-preTitle': {
          fontSize: theme('fontSize.2'),
          fontWeight: 700,
          fontFamilly: theme('fontFamilly.second'),
          letterSpacing: '3%'
        },
        '.DS-text-btn': {
          fontSize: theme('fontSize.2'),
          fontWeight: 700,
          fontFamily: theme('fontFamilly.default'),
          letterSpacing: '3%'
        },
        '.DS-text-link': {
          fontSize: theme('fontSize.4'),
          fontWeight: 700,
          fontFamily: theme('fontFamilly.default'),
          textDecoration: 'underline'
        }
      })
    }
  ]
})

export const colorsPalette = {
  transparent: 'transparent',
  current: 'currentColor',
  inherit: 'inherit',
  test: '#00F2A5',
  basic: '#1B1B1E',
  darkgrey: '#787878',
  grey: '#CDCDCD',
  lightgrey: '#ECECEC',
  verylightgrey: 'F6F6F6',
  white: '#FFFFFF',
  primary: '#000000',
  light: '#00F2A5',
  charcoal: '#373F51',
  moonstone: '#58A4B0',
  powder: '#A9BCD0',
  platinum: '#D8DBE2',
  error: '#F22B00',
  'error-light': '#00F2A5'
}
