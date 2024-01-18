<template>
  <div
    class="flex h-[22px] min-w-[69px] max-w-[95px] items-center justify-between gap-2 overflow-hidden rounded-lg border-[0.25px] border-primary-moonstone bg-primary-light bg-opacity-10 px-2 py-1 text-2 font-normal leading-5 text-primary-moonstone"
    :class="setIconPosition"
  >
    <div class="flex cursor-default overflow-hidden overflow-ellipsis whitespace-nowrap">
      {{ label }}
    </div>
    <div
      v-if="hasIcon"
      class="flex h-[18px] w-[18px] cursor-pointer items-center overflow-y-hidden"
      @click="emit('deleteChip')"
    >
      <IconsBase name="close" class="h-full w-full" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  CHIP_CONTAINER_ICON_POSITION_DEFAULT,
  CHIP_CONTAINER_ICON_POSITION,
  CHIP_CONTAINER_HAS_ICON_DEFAULT,
  CHIP_CONTAINER_HAS_ICON
} from './ChipContainer.model'

import type { ChipContainerIconPosition, ChipContainerHasIcon } from './ChipContainer.model'

const props = defineProps({
  iconPosition: {
    type: String as PropType<ChipContainerIconPosition>,
    default: CHIP_CONTAINER_ICON_POSITION_DEFAULT,
    validator: (value: ChipContainerIconPosition) => {
      return Object.values(CHIP_CONTAINER_ICON_POSITION).includes(value)
    }
  },
  hasIcon: {
    type: Boolean as PropType<ChipContainerHasIcon>,
    default: CHIP_CONTAINER_HAS_ICON_DEFAULT,
    validator: (value: ChipContainerHasIcon) => {
      return Object.values(CHIP_CONTAINER_HAS_ICON).includes(value)
    }
  },
  label: {
    type: String as PropType<string>,
    default: '',
    required: true
  }
})

const label = computed(() => props.label)
const hasIcon = computed(() => props.hasIcon)

const setIconPosition = computed(() => {
  return props.iconPosition === CHIP_CONTAINER_ICON_POSITION.trailing
    ? 'flex-row'
    : 'flex-row-reverse'
})

const emit = defineEmits(['deleteChip'])
</script>
