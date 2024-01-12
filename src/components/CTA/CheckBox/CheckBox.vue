<template>
  <label
    class="flex align-middle justify-center w-fit"
    :class="{
      'cursor-not-allowed': props.disabled,
      'cursor-pointer': !props.disabled
    }"
  >
    <div
      v-if="props.form === 'rounded'"
      class="rounded-full flex justify-center align-middle items-center cursor-pointer overflow-hidden"
      :class="{
        'cursor-not-allowed opacity-30': props.disabled,
        'cursor-pointer': !props.disabled,
        'w-4 h-4': props.size === 'small',
        'w-6 h-6': props.size === 'medium',
        'w-8 h-8': props.size === 'large'
      }"
      :style="`background-color: ${colorsPalette[props.color]}`"
    >
      <div
        v-if="!isChecked"
        class="rounded-full bg-basic-white"
        :class="{
          'cursor-not-allowed': props.disabled,
          'cursor-pointer': !props.disabled,
          'w-3 h-3': props.size === 'small',
          'w-5 h-5': props.size === 'medium',
          'w-7 h-7': props.size === 'large'
        }"
      />
      <IconsBase
        v-if="isChecked"
        name="check"
        :size="props.size"
        color="white"
        class="overflow-hidden"
      />
    </div>
    <input
      type="checkbox"
      :checked="!isChecked"
      :disabled="props.disabled"
      @click="toggleChecked"
      :class="{
        hidden: props.form === 'rounded',
        'cursor-not-allowed': props.disabled,
        'cursor-pointer': !props.disabled,
        'w-4 h-4': props.size === 'small',
        'w-6 h-6': props.size === 'medium',
        'w-8 h-8': props.size === 'large'
      }"
      :style="`accent-color: ${colorsPalette[props.color]}`"
    />
    <slot />
  </label>
</template>

<script setup lang="ts">
import { colorsPalette } from '../../../tailwind/presetConfig'

import type { CheckBoxColor, CheckBoxSize, CheckBoxForm, CheckBoxState } from './CheckBox.model'
import {
  CHECKBOX_FORMS,
  CHECKBOX_STATES,
  CHECKBOX_SIZES,
  CHECKBOX_COLOR_DEFAULT,
  CHECKBOX_SIZE_DEFAULT,
  CHECKBOX_FORM_DEFAULT,
  CHECKBOX_STATE_DEFAULT
} from './CheckBox.model'

const props = defineProps({
  color: {
    type: String as PropType<CheckBoxColor>,
    default: CHECKBOX_COLOR_DEFAULT
  },
  size: {
    type: String as PropType<CheckBoxSize>,
    default: CHECKBOX_SIZE_DEFAULT,
    validator: (value: CheckBoxSize): boolean => CHECKBOX_SIZES.includes(value)
  },
  form: {
    type: String as PropType<CheckBoxForm>,
    default: CHECKBOX_FORM_DEFAULT,
    validator: (value: CheckBoxForm): boolean => CHECKBOX_FORMS.includes(value)
  },
  state: {
    type: String as PropType<CheckBoxState>,
    default: CHECKBOX_STATE_DEFAULT,
    validator: (value: CheckBoxState): boolean => CHECKBOX_STATES.includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const isChecked = ref(props.state === 'unchecked')
const emit = defineEmits(['update:state'])

const toggleChecked = () => {
  isChecked.value = !isChecked.value
  emit('update:state', isChecked.value)
}
</script>
