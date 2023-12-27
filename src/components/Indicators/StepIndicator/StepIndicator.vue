<template>
  <div class="flex flex-row gap-1 flex-shrink-0 w-1/4">
    <div
      v-for="step in stepNumber"
      id="step"
      :class="[
        'w-1/2 h-1 rounded-lg',
        { 'bg-primary-moonstone': step <= currentStep },
        { 'bg-basic-lightgrey': step > currentStep }
      ]"
    ></div>
  </div>
</template>

<script setup lang="ts">
import {
  STEP_NUMBER,
  STEP_COLOR_DEFAULT,
  STEP_STATUS,
  type StepNumber,
  type StepColor,
  type StepStatus
} from './StepIndicator.model'

const props = defineProps({
  number: {
    type: Number as PropType<StepNumber>,
    default: STEP_NUMBER.one,
    validator: (value: number) => Object.values(STEP_NUMBER).includes(value as StepNumber)
  },
  color: {
    type: String as PropType<StepColor>,
    default: STEP_COLOR_DEFAULT
  },
  status: {
    type: String as PropType<StepStatus>,
    validator: (value: string) => Object.values(STEP_STATUS).includes(value as StepStatus)
  },
  currentStep: {
    type: Number as PropType<StepNumber>,
    default: STEP_NUMBER.one,
    validator: (value: number) => Object.values(STEP_NUMBER).includes(value as StepNumber)
  }
})

const stepNumber = computed(() => {
  return props.number
})

const currentStep = computed(() => {
  return props.currentStep
})
</script>
