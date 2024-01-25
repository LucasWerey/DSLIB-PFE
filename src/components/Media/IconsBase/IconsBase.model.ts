import type { colorsPalette } from '../../../tailwind/presetConfig'

export const ICONS_NAME = {
  logo: 'logo',
  moveRight: 'moveRight',
  moveLeft: 'moveLeft',
  close: 'close',
  warning: 'warning',
  logout: 'logout',
  upload: 'upload',
  google: 'google',
  linkedin: 'linkedin',
  chevronUp: 'chevronUp',
  chevronDown: 'chevronDown',
  calendar: 'calendar',
  check: 'check',
  pencil: 'pencil',
  plus: 'plus',
  trash: 'trash',
  info: 'info',
  copy: 'copy',
  audioLines: 'audioLines',
  award: 'award',
  bellRing: 'bellRing',
  bookHeart: 'bookHeart',
  brain: 'brain',
  briefcase: 'briefcase',
  building: 'building',
  eye: 'eye',
  fileQuestion: 'fileQuestion',
  file: 'file',
  gem: 'gem',
  graduationCap: 'graduationCap',
  guitar: 'guitar',
  keyRound: 'keyRound',
  link: 'link',
  lockKeyhole: 'lockKeyhole',
  mail: 'mail',
  mapPin: 'mapPin',
  moreVertical: 'moreVertical',
  notif: 'notif',
  personStanding: 'personStanding',
  phone: 'phone',
  play: 'play',
  roundFemale: 'roundFemale',
  roundMale: 'roundMale',
  search: 'search',
  userCog: 'userCog',
  userRoundx: 'userRoundx',
  video: 'video',
  dribble: 'dribble',
  desktop: 'desktop'
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

export const ICONS_COLOR_DEFAULT = 'moonstone'
export type IconsColor = keyof typeof colorsPalette
