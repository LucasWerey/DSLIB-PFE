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

export const CHIP_CONTAINER_ICON_POSITION = {
  leading: 'leading',
  trailing: 'trailing'
} as const

export const CHIP_CONTAINER_ICON_POSITIONS = Object.values(CHIP_CONTAINER_ICON_POSITION)
export type ChipContainerIconPosition = (typeof CHIP_CONTAINER_ICON_POSITIONS)[number]
export const CHIP_CONTAINER_ICON_POSITION_DEFAULT = CHIP_CONTAINER_ICON_POSITION.trailing

export const CHIP_CONTAINER_HAS_ICON = {
  true: true,
  false: false
} as const

export const CHIP_CONTAINER_HAS_ICONS = Object.values(CHIP_CONTAINER_HAS_ICON)
export type ChipContainerHasIcon = (typeof CHIP_CONTAINER_HAS_ICONS)[number]
export const CHIP_CONTAINER_HAS_ICON_DEFAULT = CHIP_CONTAINER_HAS_ICON.false
