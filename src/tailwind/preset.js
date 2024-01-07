var pxToRem = function (px) {
  return ''.concat(px / 16, 'rem')
}
module.exports = {
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
      14: pxToRem(36),
      15: pxToRem(38),
      16: pxToRem(40),
      17: pxToRem(42),
      18: pxToRem(44),
      19: pxToRem(46),
      20: pxToRem(48),
      21: pxToRem(50),
      22: pxToRem(52),
      23: pxToRem(54),
      24: pxToRem(56),
      25: pxToRem(58)
    },
    fontFamilly: {
      default: ['Inter', 'sans-serif'],
      second: ['Eina', 'sans-serif']
    }
  },
  plugins: [
    function (_a) {
      var addComponents = _a.addComponents,
        theme = _a.theme
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
}
