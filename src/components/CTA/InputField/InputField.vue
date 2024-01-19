<template>
  <div class="flex w-[375px] flex-col items-start gap-2" data-test="InputField">
    <p
      class="h-4 pl-1 text-2 font-bold uppercase tracking-tight text-basic-black"
      data-test="Label"
    >
      {{ label + (isRequired ? ' ' : '') }}<span class="text-error" v-if="isRequired">*</span>
    </p>
    <div v-if="!isBigSize" class="relative h-12 w-full">
      <div v-if="!hasDateInput" class="relative h-12 w-full">
        <input
          @blur="emit('blur')"
          data-test="InputText"
          :disabled="isDisabled"
          :type="inputType"
          :placeholder="placeholder"
          :value="modelValue"
          @input="handleInput($event as InputEvent)"
          class="bold-placeholder h-full w-full resize-none items-start rounded-md border-2 px-4 py-3 align-middle focus:border-primary-charcoal"
          :class="{
            'border-error': hasError,
            'border-basic-grey': !hasError,
            'bg-basic-verylightgrey text-basic-darkgrey': isDisabled,
            'bg-basic-white text-primary-moonstone': !isDisabled
          }"
          :autocomplete="isAutoComplete ? 'new-password' : 'off'"
        />
        <span v-if="hasErrorIcon" class="absolute right-4 top-1/2 -translate-y-1/2 transform">
          <IconsBase data-test="IconInput" name="warning" color="error" />
        </span>
      </div>
      <div v-else-if="hasDateInput">
        <input
          data-test="InputDate"
          :disabled="isDisabled"
          type="date"
          :placeholder="placeholder"
          :value="modelValue"
          @input="handleInput($event as InputEvent)"
          class="h-full w-full resize-none items-start rounded-md border-2 border-basic-grey px-4 py-2.5 align-middle text-primary-moonstone focus:border-primary-charcoal"
          :class="{
            'bg-basic-verylightgrey text-basic-darkgrey': isDisabled,
            'bg-basic-white text-primary-moonstone ': !isDisabled
          }"
        />
      </div>
    </div>
    <textarea
      v-else-if="isBigSize"
      data-test="TextArea"
      :disabled="isDisabled"
      :placeholder="placeholder"
      :value="modelValue"
      @input="handleInput($event as InputEvent)"
      class="h-24 w-full resize-none items-start rounded-md border-2 bg-basic-white px-4 py-3 text-primary-moonstone focus:border-primary-charcoal"
      :class="hasError ? 'border-error' : 'border-basic-grey'"
    />
    <p v-if="hasError" data-test="Hint" class="pl-1 text-3 font-normal leading-tight text-error">
      {{ hint }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { InputFieldSize, InputFieldState } from './InputField.model'

import {
  INPUTFIELD_SIZES,
  INPUTFIELD_STATES,
  INPUTFIELD_SIZE_DEFAULT,
  INPUTFIELD_STATE_DEFAULT,
  INPUTFIELD_STATE,
  INPUTFIELD_SIZE
} from './InputField.model'

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: 'Placeholder'
  },
  label: {
    type: String,
    default: 'Label'
  },
  hint: {
    type: String,
    default: 'Hint'
  },
  hasIcon: {
    type: Boolean,
    default: false
  },
  isDateInput: {
    type: Boolean,
    default: false
  },
  size: {
    type: String as PropType<InputFieldSize>,
    default: INPUTFIELD_SIZE_DEFAULT,
    validator: (value: InputFieldSize): boolean => INPUTFIELD_SIZES.includes(value)
  },
  state: {
    type: String as PropType<InputFieldState>,
    default: INPUTFIELD_STATE_DEFAULT,
    validator: (value: InputFieldState): boolean => INPUTFIELD_STATES.includes(value)
  },
  password: {
    type: Boolean,
    default: false
  },
  inputType: {
    type: String,
    default: 'text',
    validator: function (value) {
      return ['text', 'password', 'number', 'email'].includes(value as string)
    }
  },
  isRequired: {
    type: Boolean,
    default: false
  }
})

const modelValue = computed(() => props.modelValue)
const placeholder = computed(() => props.placeholder)
const label = computed(() => props.label)
const hint = computed(() => props.hint)
const hasIcon = computed(() => props.hasIcon)
const isDateInput = computed(() => props.isDateInput)
const state = computed(() => props.state)
const size = computed(() => props.size)
const inputType = computed(() => props.inputType)
const isAutoComplete = computed(() => inputType.value === 'password')

const isDisabled = computed(() => state.value === INPUTFIELD_STATE.disabled)
const hasError = computed(() => state.value === INPUTFIELD_STATE.error)
const hasErrorIcon = computed(() => hasError.value && hasIcon.value && !isBigSize.value)
const hasDateInput = computed(() => isDateInput.value && !isBigSize.value)
const isBigSize = computed(() => size.value === INPUTFIELD_SIZE.big)
const isRequired = computed(() => props.isRequired)

const emit = defineEmits(['update:modelValue', 'blur'])

const handleInput = (event: InputEvent) => {
  emit('update:modelValue', (event.target as HTMLInputElement)?.value)
}
</script>

<style scoped>
.bold-placeholder::placeholder {
  font-weight: 400;
  font-family: Eina1;
}
</style>
