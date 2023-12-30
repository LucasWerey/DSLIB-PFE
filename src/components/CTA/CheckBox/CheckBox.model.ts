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

export const CHECKBOX_COLOR_DEFAULT = 'moonstone'
export type CheckBoxColor = keyof typeof colorsPalette

export const CHECKBOX_FORM = {
  rounded: 'rounded',
  square: 'square'
} as const

export const CHECKBOX_FORMS = Object.values(CHECKBOX_FORM)
export type CheckBoxForm = (typeof CHECKBOX_FORMS)[number]
export const CHECKBOX_FORM_DEFAULT = CHECKBOX_FORM.square

export const CHECKBOX_SIZE = {
  small: 'small',
  medium: 'medium',
  large: 'large'
} as const

export const CHECKBOX_SIZES = Object.values(CHECKBOX_SIZE)
export type CheckBoxSize = (typeof CHECKBOX_SIZES)[number]
export const CHECKBOX_SIZE_DEFAULT = CHECKBOX_SIZE.medium

export const CHECKBOX_STATE = {
  checked: 'checked',
  unchecked: 'unchecked',
  disabled: 'disabled'
} as const

export const CHECKBOX_STATES = Object.values(CHECKBOX_STATE)
export type CheckBoxState = (typeof CHECKBOX_STATES)[number]
export const CHECKBOX_STATE_DEFAULT = CHECKBOX_STATE.unchecked
