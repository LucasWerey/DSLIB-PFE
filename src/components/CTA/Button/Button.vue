<template>
  <button
    data-test="Button"
    class="inline-flex items-center px-4 py-2 text-3 font-bold tracking-[0.42px]"
    :class="{
      'h-12 w-[375px] items-center justify-center gap-4 rounded  border-2':
        !isOffAndActive && !isOffAndDisabled,
      'border-primary-moonstone bg-primary-moonstone text-basic-white':
        isFilledAndActive && !isMediaButton && !isLight,
      'border-0 bg-primary-lightmoonstone text-primary-moonstone':
        isFilledAndActive && !isMediaButton && isLight,
      'cursor-not-allowed border-basic-grey bg-basic-grey text-basic-white':
        isFilledAndDisabled && !isMediaButton && !isLight,
      'border-primary-moonstone bg-transparent text-primary-moonstone':
        isOutlinedAndActive && !isMediaButton && !isLight,
      'cursor-not-allowed border-basic-grey bg-transparent text-basic-grey':
        isOutlinedAndDisabled && !isMediaButton && !isLight,
      'gap-2 bg-inherit text-primary-moonstone': isOffAndActive && !isMediaButton,
      'cursor-not-allowed gap-2 bg-inherit text-basic-grey':
        isOffAndDisabled && !isMediaButton && !isLight,
      'border-basic-grey bg-inherit font-normal normal-case text-basic-black':
        icon && isMediaButton && !isLight,
      'flex-row-reverse': isIconTrailing
    }"
  >
    <IconsBase v-if="isMediaButton && iconName" :name="iconName" />
    <IconsBase v-if="!isMediaButton && hasIcon && iconName" :name="iconName" :color="iconColor" />
    <slot />
  </button>
</template>

<script setup lang="ts">
import type {
  ButtonType,
  ButtonIcon,
  ButtonState,
  ButtonIconPosition,
  ButtonStyle
} from './Button.model'

import {
  BUTTON_TYPES,
  BUTTON_ICONS,
  BUTTON_STATES,
  BUTTON_ICON_POSITIONS,
  BUTTON_STYLES,
  BUTTON_TYPE_DEFAULT,
  BUTTON_STATE_DEFAULT,
  BUTTON_STYLE_DEFAULT
} from './Button.model'

const props = defineProps({
  type: {
    type: String as PropType<ButtonType>,
    required: true,
    default: BUTTON_TYPE_DEFAULT,
    validator: (value: ButtonType): boolean => BUTTON_TYPES.includes(value)
  },
  state: {
    type: String as PropType<ButtonState>,
    required: true,
    default: BUTTON_STATE_DEFAULT,
    validator: (value: ButtonState): boolean => BUTTON_STATES.includes(value)
  },
  styled: {
    type: String as PropType<ButtonStyle>,
    required: true,
    default: BUTTON_STYLE_DEFAULT,
    validator: (value: ButtonStyle): boolean => BUTTON_STYLES.includes(value)
  },
  icon: {
    type: String as PropType<ButtonIcon>,
    required: false,
    validator: (value: ButtonIcon): boolean => BUTTON_ICONS.includes(value)
  },
  iconPosition: {
    type: String as PropType<ButtonIconPosition>,
    required: false,
    validator: (value: ButtonIconPosition): boolean => BUTTON_ICON_POSITIONS.includes(value)
  },
  isLight: {
    type: Boolean,
    required: false,
    default: false
  }
})

const style = computed(() => props.styled)

const type = computed(() => props.type)

const state = computed(() => props.state)

const icon = computed(() => props.icon)

const isLight = computed(() => props.isLight)

const iconPosition = computed(() => props.iconPosition)

const isFilledAndActive = computed(() => style.value === 'fill' && state.value === 'active')

const isFilledAndDisabled = computed(() => style.value === 'fill' && state.value === 'disabled')

const isOutlinedAndActive = computed(() => style.value === 'outlined' && state.value === 'active')

const isOutlinedAndDisabled = computed(
  () => style.value === 'outlined' && state.value === 'disabled'
)

const isOffAndActive = computed(() => style.value === 'off' && state.value === 'active')

const isOffAndDisabled = computed(() => style.value === 'off' && state.value === 'disabled')

const isMediaButton = computed(() => type.value === 'socialMedia')

const isIconTrailing = computed(() => iconPosition.value === 'trailing')

const iconColor = computed(() => {
  if (isFilledAndActive.value || isFilledAndDisabled.value) return 'white'
  if (isOutlinedAndActive.value || isOffAndActive.value) return 'moonstone'
  if (isOutlinedAndDisabled.value || isOffAndDisabled.value) return 'grey'
})

const iconName = computed(() => {
  if (icon.value !== 'none' && iconPosition.value !== 'none') {
    return icon.value
  } else {
    return null
  }
})

const hasIcon = computed(() => {
  if (icon.value || iconPosition.value) {
    if (icon.value !== 'none' || iconPosition.value !== 'none') {
      return true
    } else {
      return false
    }
  }
})
</script>
