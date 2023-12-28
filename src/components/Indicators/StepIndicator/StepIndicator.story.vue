<template>
  <Story
    title="StepIndicator"
    group="indicators"
    responsiveDisabled
    :layout="{
      type: 'grid',
      width: '100%'
    }"
  >
    <template #controls>
      <ControlDescription>
        <HstSelect v-model="controls.number" :options="Object.values(STEP_NUMBER)" title="Number" />
      </ControlDescription>
      <ControlDescription>
        <HstSelect
          v-model="controls.currentStep"
          :options="Object.values(STEP_NUMBER)"
          title="Current Step"
        />
      </ControlDescription>
    </template>

    <Variant title="Playground" auto-props-disabled>
      <StepIndicator :number="controls.number" :currentStep="controls.currentStep" />
    </Variant>
  </Story>
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

interface Props {
  number: StepNumber
  color: StepColor
  status: StepStatus
  currentStep: StepNumber
}

const controls = reactive<Props>({
  number: STEP_NUMBER.three,
  color: STEP_COLOR_DEFAULT,
  status: STEP_STATUS[0],
  currentStep: STEP_NUMBER.two
})
</script>
