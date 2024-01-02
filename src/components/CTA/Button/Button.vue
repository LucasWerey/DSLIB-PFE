<template>
  <button
    data-test="Button"
    class="inline-flex text-3 font-bold uppercase tracking-[0.42px] px-4 py-2 items-center"
    :class="{
      'w-[375px] h-12 rounded justify-center items-center gap-4  border-2':
        !isOffAndActive && !isOffAndDisabled,
      'bg-primary-moonstone text-basic-white border-primary-moonstone':
        isFilledAndActive && !isMediaButton,
      'bg-basic-grey text-basic-white cursor-not-allowed border-basic-grey':
        isFilledAndDisabled && !isMediaButton,
      'bg-basic-white text-primary-moonstone border-primary-moonstone':
        isOutlinedAndActive && !isMediaButton,
      'bg-basic-white text-basic-grey border-basic-grey cursor-not-allowed':
        isOutlinedAndDisabled && !isMediaButton,
      'bg-inherit text-primary-moonstone gap-2': isOffAndActive && !isMediaButton,
      'bg-inherit text-basic-grey cursor-not-allowed gap-2': isOffAndDisabled && !isMediaButton,
      'bg-inherit text-basic-black border-basic-grey normal-case font-normal':
        icon && isMediaButton,
      'flex-row-reverse': isIconTrailing
    }"
  >
    <IconsBase v-if="isMediaButton && iconName" :name="iconName" />
    <IconsBase v-if="!isMediaButton && hasIcon" name="moveRight" :color="iconColor" />
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
  }
})

const style = computed(() => props.styled)

const type = computed(() => props.type)

const state = computed(() => props.state)

const icon = computed(() => props.icon)

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
