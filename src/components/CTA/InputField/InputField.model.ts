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

export const INPUTFIELD_SIZE = {
  default: 'default',
  big: 'big'
} as const

export const INPUTFIELD_SIZES = Object.values(INPUTFIELD_SIZE)
export type InputFieldSize = (typeof INPUTFIELD_SIZES)[number]
export const INPUTFIELD_SIZE_DEFAULT = INPUTFIELD_SIZE.default

export const INPUTFIELD_STATE = {
  default: 'default',
  active: 'active',
  filled: 'filled',
  disabled: 'disabled',
  error: 'error'
} as const

export const INPUTFIELD_STATES = Object.values(INPUTFIELD_STATE)
export type InputFieldState = (typeof INPUTFIELD_STATES)[number]
export const INPUTFIELD_STATE_DEFAULT = INPUTFIELD_STATE.default
