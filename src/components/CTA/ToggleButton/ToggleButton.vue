<template>
  <div
    class="w-12 h-[26px] m-2 rounded-full flex align-middle items-center"
    @click="toggleActive"
    :class="{
      'bg-primary-moonstone cursor-pointer': isActive && state !== TOGGLEBUTTON_STATE.disable,
      'bg-basic-grey cursor-pointer': !isActive || state === TOGGLEBUTTON_STATE.disable
    }"
  >
    <div
      class="flex items-center w-full h-full"
      :class="{ 'cursor-not-allowed opacity-50': state === TOGGLEBUTTON_STATE.disable }"
    >
      <div
        class="bg-basic-white w-5 h-5 rounded-full mx-1 flex items-center justify-center"
        :style="{
          transform: isActive ? 'translateX(100%)' : 'translateX(0%)'
        }"
        style="transition: transform 0.3s ease-out"
      >
        <IconsBase
          v-if="isActive && state !== TOGGLEBUTTON_STATE.disable"
          name="check"
          size="small"
          color="moonstone"
          class="overflow-hidden"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ToggleButtonState } from './ToggleButton.model'
import {
  TOGGLEBUTTON_STATES,
  TOGGLEBUTTON_STATE_DEFAULT,
  TOGGLEBUTTON_STATE
} from './ToggleButton.model'
import { ref, watch } from 'vue'

const props = defineProps({
  state: {
    type: String as PropType<ToggleButtonState>,
    default: TOGGLEBUTTON_STATE_DEFAULT,
    validator: (value: ToggleButtonState) => TOGGLEBUTTON_STATES.includes(value)
  }
})

const isActive = ref(props.state === TOGGLEBUTTON_STATE.active)
const emit = defineEmits(['update:state'])

const toggleActive = () => {
  if (props.state !== TOGGLEBUTTON_STATE.disable) {
    isActive.value = !isActive.value
    emit('update:state', isActive.value ? TOGGLEBUTTON_STATE.active : TOGGLEBUTTON_STATE.inactive)
  }
}

watch(
  () => props.state,
  (newValue) => {
    if (newValue === TOGGLEBUTTON_STATE.active) {
      isActive.value = true
    } else if (newValue === TOGGLEBUTTON_STATE.inactive) {
      isActive.value = false
    }
  }
)
</script>
