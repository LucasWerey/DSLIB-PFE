<template>
  <div
    class="flex items-center justify-center overflow-hidden"
    :class="{
      'bg-primary': props.color === BULLET_POINT_COLOR.PRIMARY,
      'bg-secondary': props.color === BULLET_POINT_COLOR.SECONDARY,
      'h-3 w-3': props.size === BULLET_POINT_SIZE.SMALL,
      'h-4 w-4': props.size === BULLET_POINT_SIZE.MEDIUM,
      'h-5 w-5': props.size === BULLET_POINT_SIZE.LARGE,
      'rounded-full':
        props.type === BULLET_POINT_TYPE.CIRCLE || props.type === BULLET_POINT_TYPE.CHECK
    }"
  >
    <span
      v-if="props.type === BULLET_POINT_TYPE.CIRCLE || props.type === BULLET_POINT_TYPE.SQUARE"
      :class="{
        'DS-text-xs': props.size === BULLET_POINT_SIZE.SMALL,
        'DS-text-m': props.size === BULLET_POINT_SIZE.MEDIUM,
        'DS-text-l': props.size === BULLET_POINT_SIZE.LARGE,
        'text-primary': props.color === BULLET_POINT_COLOR.SECONDARY,
        'text-secondary': props.color === BULLET_POINT_COLOR.PRIMARY
      }"
    >
      {{ props.label }}
    </span>
  </div>
</template>

<script setup lang="ts">
import {
  BULLET_POINT_COLOR_DEFAULT,
  BULLET_POINT_COLOR,
  BULLET_POINT_SIZE_DEFAULT,
  BULLET_POINT_SIZE,
  BULLET_POINT_TYPE_DEFAULT,
  BULLET_POINT_TYPE
} from '../bulletPoints/bulletPoints.model'

import type {
  BulletPointSize,
  BulletPointColor,
  BulletPointType
} from '../bulletPoints/bulletPoints.model'

const props = defineProps({
  color: {
    type: String as PropType<BulletPointColor>,
    default: BULLET_POINT_COLOR_DEFAULT
  },
  size: {
    type: String as PropType<BulletPointSize>,
    default: BULLET_POINT_SIZE_DEFAULT
  },
  type: {
    type: String as PropType<BulletPointType>,
    default: BULLET_POINT_TYPE_DEFAULT
  },
  label: {
    type: [String, Number] as PropType<string | number>,
    default: 0
  }
})
</script>
