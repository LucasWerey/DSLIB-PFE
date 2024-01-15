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
export const BUTTON_TYPE = {
  default: 'default',
  socialMedia: 'socialMedia'
} as const

export const BUTTON_TYPES = Object.values(BUTTON_TYPE)
export type ButtonType = (typeof BUTTON_TYPES)[number]
export const BUTTON_TYPE_DEFAULT = BUTTON_TYPE.default

export const BUTTON_ICON = {
  linkedin: 'linkedin',
  google: 'google',
  moveRight: 'moveRight',
  moveLeft: 'moveLeft',
  none: 'none'
} as const

export const BUTTON_ICONS = Object.values(BUTTON_ICON)
export type ButtonIcon = (typeof BUTTON_ICONS)[number]

export const BUTTON_STATE = {
  active: 'active',
  disabled: 'disabled'
} as const

export const BUTTON_STATES = Object.values(BUTTON_STATE)
export type ButtonState = (typeof BUTTON_STATES)[number]
export const BUTTON_STATE_DEFAULT = BUTTON_STATE.active

export const BUTTON_ICON_POSITION = {
  trailing: 'trailing',
  leading: 'leading',
  none: 'none'
} as const

export const BUTTON_ICON_POSITIONS = Object.values(BUTTON_ICON_POSITION)
export type ButtonIconPosition = (typeof BUTTON_ICON_POSITIONS)[number]

export const BUTTON_STYLE = {
  fill: 'fill',
  outlined: 'outlined',
  off: 'off'
} as const

export const BUTTON_STYLES = Object.values(BUTTON_STYLE)
export type ButtonStyle = (typeof BUTTON_STYLES)[number]
export const BUTTON_STYLE_DEFAULT = BUTTON_STYLE.fill
