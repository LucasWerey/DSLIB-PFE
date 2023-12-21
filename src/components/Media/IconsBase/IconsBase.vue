<template>
  <component
    :is="IconComponent"
    :class="{ [iconSize]: true, 'inline-block': true }"
    :style="{ fill: props.name !== 'logo' ? iconColor : '', transform: iconTransform }"
  />
</template>

<script setup lang="ts">
import type { IconsName, IconsSize, IconsColor } from './IconsBase.model'
import { colorsPalette } from '../../../tailwind/presetConfig'
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
    default: ICONS_COLOR_DEFAULT
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

let IconComponent = computed(() => {
  return defineAsyncComponent(() => import(`../../../assets/icons/${props.name}.vue`))
})

watch(
  () => props.name,
  () => {
    IconComponent = defineAsyncComponent(() => import(`../../../assets/icons/${props.name}.vue`))
  }
)

const iconColor = computed(() => {
  return colorsPalette[props.color]
})

const iconTransform = computed(() => {
  return props.rotate ? `rotate(${props.rotate}deg)` : ''
})

const iconSize = computed(() => {
  switch (props.size) {
    case ICONS_SIZE.small:
      return 'h-4 w-4'
    case ICONS_SIZE.medium:
      return 'h-8 w-8'
    case ICONS_SIZE.large:
      return 'h-12 w-12'
    default:
      return 'h-8 w-8'
  }
})
</script>
