export const BULLET_POINT_COLOR = {
    PRIMARY : 'primary',
    SECONDARY : 'secondary',
} as const;

export const BULLET_POINT_COLORS = Object.values(BULLET_POINT_COLOR);
export type BulletPointColor = (typeof BULLET_POINT_COLORS)[number];
export const BULLET_POINT_COLOR_DEFAULT = BULLET_POINT_COLOR.PRIMARY;

export const BULLET_POINT_SIZE = {
    SMALL : 'small',
    MEDIUM : 'medium',
    LARGE : 'large',
} as const;

export const BULLET_POINT_SIZES = Object.values(BULLET_POINT_SIZE);
export type BulletPointSize = (typeof BULLET_POINT_SIZES)[number];
export const BULLET_POINT_SIZE_DEFAULT = BULLET_POINT_SIZE.MEDIUM;

export const BULLET_POINT_TYPE = {
    CIRCLE : 'circle',
    SQUARE : 'square',
    CHECK : 'check',
} as const;

export const BULLET_POINT_TYPES = Object.values(BULLET_POINT_TYPE);
export type BulletPointType = (typeof BULLET_POINT_TYPES)[number];
export const BULLET_POINT_TYPE_DEFAULT = BULLET_POINT_TYPE.CIRCLE;
