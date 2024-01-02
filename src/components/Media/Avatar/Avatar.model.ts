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

export const AVATAR_TYPE = {
  photo: 'photo',
  initial: 'initial',
  notConnected: 'notConnected'
} as const

export const AVATAR_TYPES = Object.values(AVATAR_TYPE)
export type AvatarType = (typeof AVATAR_TYPES)[number]
export const AVATAR_TYPE_DEFAULT = AVATAR_TYPE.notConnected

export const AVATAR_SIZE = {
  xxsmall: 'xxsmall',
  xsmall: 'xsmall',
  small: 'small',
  medium: 'medium',
  large: 'large',
  xlarge: 'xlarge'
} as const

export const AVATAR_SIZES = Object.values(AVATAR_SIZE)
export type AvatarSize = (typeof AVATAR_SIZES)[number]
export const AVATAR_SIZE_DEFAULT = AVATAR_SIZE.xlarge
