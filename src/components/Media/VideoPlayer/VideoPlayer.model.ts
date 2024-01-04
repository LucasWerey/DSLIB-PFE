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

export const VIDEO_PLAYER_SIZE = {
  xs: 'xs',
  sm: 'sm',
  md: 'md'
} as const

export const VIDEO_PLAYER_SIZES = Object.values(VIDEO_PLAYER_SIZE)
export type VideoPlayerSize = (typeof VIDEO_PLAYER_SIZES)[number]
export const VIDEO_PLAYER_SIZE_DEFAULT = VIDEO_PLAYER_SIZE.md

export const VIDEO_PLAYER_AUTOPLAY = {
  true: true,
  false: false
} as const

export const VIDEO_PLAYER_AUTOPLAYS = Object.values(VIDEO_PLAYER_AUTOPLAY)
export type VideoPlayerAutoplay = (typeof VIDEO_PLAYER_AUTOPLAYS)[number]
export const VIDEO_PLAYER_AUTOPLAY_DEFAULT = VIDEO_PLAYER_AUTOPLAY.false
