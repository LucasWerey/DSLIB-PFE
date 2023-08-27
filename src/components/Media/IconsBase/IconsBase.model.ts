import type { colorsPalette } from '@lib/tailwind/presetConfig'

export const ICONS_NAME = {
  home: 'home',
  test: 'test'
} as const

export const ICONS_NAMES = Object.values(ICONS_NAME)
export type IconsName = (typeof ICONS_NAMES)[number]

export const ICONS_SIZE = {
  small: 'small',
  medium: 'medium',
  large: 'large'
} as const

export const ICONS_SIZES = Object.values(ICONS_SIZE)
export type IconsSize = (typeof ICONS_SIZES)[number]

export const ICONS_COLOR_DEFAULT = 'current'
export type IconsColor = keyof typeof colorsPalette
