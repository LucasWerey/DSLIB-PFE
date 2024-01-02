<template>
  <div
    data-test="SnackBar"
    class="w-[344px] rounded shadow-md px-4 py-3.5 justify-start items-center gap-2 inline-flex"
    :class="[height, color]"
  >
    <div class="grow shrink basis-0 text-basic-white text-3 font-normal leading-tight">
      <slot />
    </div>
    <div
      class="w-6 h-6 flex items-center justify-center align-middle overflow-hidden cursor-pointer"
      @click="$emit('close', true)"
    >
      <IconsBase v-if="close" name="close" color="white" size="medium" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SnackBarType, SnackBarSize, SnackBarClose } from './SnackBar.model'

import {
  SNACKBAR_TYPES,
  SNACKBAR_SIZES,
  SNACKBAR_CLOSES,
  SNACKBAR_TYPE_DEFAULT,
  SNACKBAR_SIZE_DEFAULT,
  SNACKBAR_CLOSE_DEFAULT
} from './SnackBar.model'

const props = defineProps({
  type: {
    type: String as PropType<SnackBarType>,
    required: true,
    default: SNACKBAR_TYPE_DEFAULT,
    validator: (value: SnackBarType): boolean => SNACKBAR_TYPES.includes(value)
  },
  size: {
    type: String as PropType<SnackBarSize>,
    required: true,
    default: SNACKBAR_SIZE_DEFAULT,
    validator: (value: SnackBarSize): boolean => SNACKBAR_SIZES.includes(value)
  },
  close: {
    type: String as PropType<SnackBarClose>,
    required: true,
    default: SNACKBAR_CLOSE_DEFAULT,
    validator: (value: SnackBarClose): boolean => SNACKBAR_CLOSES.includes(value)
  }
})

const type = computed(() => props.type)

const size = computed(() => props.size)

const close = computed(() => (props.close === 'yes' ? true : false))

const setColor = {
  info: 'bg-primary-moonstone',
  validation: 'bg-success',
  error: 'bg-error'
}

const color = computed(() => setColor[type.value])

const setSize = {
  small: 'h-12',
  medium: 'h-16'
}

const height = computed(() => setSize[size.value])
</script>
