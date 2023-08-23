export const LOADER_COLOR = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
} as const

export const LOADER_COLORS = Object.values(LOADER_COLOR)
export type LoaderColor = (typeof LOADER_COLORS)[number];
export const LOADER_COLOR_DEFAULT = LOADER_COLOR.PRIMARY

export const LOADER_SIZE = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
} as const;

export const LOADER_SIZES = Object.values(LOADER_SIZE);
export type LoaderSize = (typeof LOADER_SIZES)[number];
export const LOADER_SIZE_DEFAULT = LOADER_SIZE.MEDIUM;
