<template>
  <component :is="IconComponent" class="h-8 w-8 inline-block" :style="{ fill: iconColor, style }" />
</template>

<script setup lang="ts">
import type { IconsName, IconsSize, IconsColor } from './IconsBase.model'
import { colorsPalette } from '@lib/tailwind/presetConfig'
import { ICONS_SIZE, ICONS_COLOR_DEFAULT, ICONS_NAME } from './IconsBase.model'

const props = defineProps({
  name: {
    type: String as PropType<IconsName>,
    default: ICONS_NAME?.home ?? '',
    required: true,
    validator: (value: string) => Object.values(ICONS_NAME).includes(value as IconsName)
  },
  size: {
    type: String as PropType<IconsSize>,
    default: ICONS_SIZE.medium,
    validator: (value: string) => Object.values(ICONS_SIZE).includes(value as IconsSize)
  },
  color: {
    type: String as PropType<IconsColor>,
    default: ICONS_COLOR_DEFAULT,
    validator: (value: string) => Object.keys(colorsPalette).includes(value as IconsColor)
  },
  title: {
    type: String,
    default: undefined
  },
  rotate: {
    type: Number,
    default: undefined
  }
})

const IconComponent = computed(() => {
  props.name
  return defineAsyncComponent(() => import(`../../../assets/icons/${props.name}.svg`))
})

const style = computed(() => {
  return {
    transform: `rotate(${props.rotate}deg)`
  }
})

const iconColor = computed(() => {
  return colorsPalette[props.color]
})
</script>
