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

import type { colorsPalette } from '../../../tailwind/presetConfig'

export const STEP_NUMBER = {
  one: 1,
  two: 2,
  three: 3,
  four: 4
} as const

export const STEP_NUMBERS = Object.values(STEP_NUMBER)
export type StepNumber = (typeof STEP_NUMBERS)[number]

export const STEP_COLOR_DEFAULT = 'moonstone'
export type StepColor = keyof typeof colorsPalette

export const STEP_STATU = {
  current: 'current',
  done: 'done'
} as const

export const STEP_STATUS = Object.values(STEP_STATU)
export type StepStatus = (typeof STEP_STATUS)[number]
