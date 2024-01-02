/*
            Avaible colors:

                  basic:
                    black: '#1B1B1E',
                    darkgrey: '#787878',
                    grey: '#CDCDCD',
                    lightgrey: '#ECECEC',
                    verylightgrey: '#F6F6F6',
                    white: '#FAFAFA'
                  primary:
                    DEFAULT: '#000000',
                    light: '#00F2A5',
                    charcoal: '#373F51',
                    moonstone: '#58A4B0',
                    powder: '#A9BCD0',
                    platinum: '#D8DBE2'
                  transparent: 'transparent',
                  current: 'currentColor',
                  inherit: 'inherit',
                  error: '#FF5656',
                  warning: '#FFC85C',
                  success: '#7BC079',
                  info: '#333333'
            */

export const SNACKBAR_TYPE = {
  info: 'info',
  validation: 'validation',
  error: 'error'
} as const

export const SNACKBAR_TYPES = Object.values(SNACKBAR_TYPE)
export type SnackBarType = (typeof SNACKBAR_TYPES)[number]
export const SNACKBAR_TYPE_DEFAULT = SNACKBAR_TYPE.info

export const SNACKBAR_SIZE = {
  small: 'small',
  medium: 'medium'
} as const

export const SNACKBAR_SIZES = Object.values(SNACKBAR_SIZE)
export type SnackBarSize = (typeof SNACKBAR_SIZES)[number]
export const SNACKBAR_SIZE_DEFAULT = SNACKBAR_SIZE.small

export const SNACKBAR_CLOSE = {
  yes: 'yes',
  no: 'no'
} as const

export const SNACKBAR_CLOSES = Object.values(SNACKBAR_CLOSE)
export type SnackBarClose = (typeof SNACKBAR_CLOSES)[number]
export const SNACKBAR_CLOSE_DEFAULT = SNACKBAR_CLOSE.yes
