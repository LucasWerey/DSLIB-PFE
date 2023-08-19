export default Object.freeze({
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
      14: '2.25rem'
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
})
