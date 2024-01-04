<template>
  <Story
    title="CheckBox"
    group="cta"
    responsiveDisabled
    :layout="{
      type: 'grid'
    }"
  >
    <template #controls>
      <ControlDescription>
        <HstSelect v-model="controls.color" :options="Object.keys(colorsPalette)" title="Color" />
      </ControlDescription>
      <ControlDescription>
        <HstSelect v-model="controls.size" :options="Object.values(CHECKBOX_SIZES)" title="Size" />
      </ControlDescription>
      <ControlDescription>
        <HstSelect v-model="controls.form" :options="Object.values(CHECKBOX_FORMS)" title="Form" />
      </ControlDescription>
      <ControlDescription>
        <HstCheckbox v-model="controls.disabled" title="Disabled" />
      </ControlDescription>
    </template>

    <Variant title="Playground" auto-props-disabled>
      <CheckBox
        v-model="controls.state"
        :color="controls.color"
        :size="controls.size"
        :form="controls.form"
        :disabled="controls.disabled"
      />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { colorsPalette } from '../../../tailwind/presetConfig'

import type { CheckBoxColor, CheckBoxSize, CheckBoxForm, CheckBoxState } from './CheckBox.model'
import {
  CHECKBOX_FORMS,
  CHECKBOX_SIZES,
  CHECKBOX_COLOR_DEFAULT,
  CHECKBOX_SIZE_DEFAULT,
  CHECKBOX_FORM_DEFAULT,
  CHECKBOX_STATE_DEFAULT
} from './CheckBox.model'

interface Props {
  color: CheckBoxColor
  size: CheckBoxSize
  form: CheckBoxForm
  state: CheckBoxState
  disabled: boolean
}

const controls = reactive<Props>({
  color: CHECKBOX_COLOR_DEFAULT,
  size: CHECKBOX_SIZE_DEFAULT,
  form: CHECKBOX_FORM_DEFAULT,
  state: CHECKBOX_STATE_DEFAULT,
  disabled: false
})
</script>
