<template>
  <Story title="InputField" group="cta" :layout="{ type: 'grid', width: '50%' }">
    <template #controls>
      <ControlDescription>
        <HstText v-model="controls.modelValue" title="ModelValue" />
      </ControlDescription>
      <ControlDescription>
        <HstText v-model="controls.placeHolder" title="Placeholder" />
        <ControlDescription>
          <HstText v-model="controls.label" title="Label" />
        </ControlDescription>
        <ControlDescription>
          <HstText v-model="controls.hint" title="Hint" />
        </ControlDescription>
      </ControlDescription>
      <ControlDescription>
        <HstCheckbox v-model="controls.hasIcon" title="hasIcon" />
      </ControlDescription>
      <ControlDescription>
        <HstCheckbox v-model="controls.isDateInput" title="isDate" />
      </ControlDescription>
      <ControlDescription>
        <HstCheckbox v-model="controls.password" title="password" />
      </ControlDescription>
      <ControlDescription>
        <HstSelect
          v-model="controls.size"
          :options="Object.values(INPUTFIELD_SIZES)"
          title="Size"
        />
      </ControlDescription>
      <ControlDescription>
        <HstSelect
          v-model="controls.state"
          :options="Object.values(INPUTFIELD_STATES)"
          title="State"
        />
      </ControlDescription>
    </template>
    <Variant title="Playground" auto-props-disabled>
      <InputField
        v-model="controls.modelValue"
        :placeholder="controls.placeHolder"
        :label="controls.label"
        :hint="controls.hint"
        :hasIcon="controls.hasIcon"
        :isDateInput="controls.isDateInput"
        :size="controls.size"
        :state="controls.state"
        :password="controls.password"
        @blur="() => console.log('blur')"
      />
    </Variant>
    <Variant title="Date Input" auto-props-disabled>
      <InputField
        v-model="controls.modelValue"
        :placeholder="controls.placeHolder"
        :label="controls.label"
        :hint="controls.hint"
        isDateInput
        :size="controls.size"
        state="default"
      />
    </Variant>
    <Variant title="Date Input Disabled" auto-props-disabled>
      <InputField
        v-model="controls.modelValue"
        :placeholder="controls.placeHolder"
        :label="controls.label"
        :hint="controls.hint"
        isDateInput
        :size="controls.size"
        state="disabled"
      />
    </Variant>
    <Variant title="Disabled" auto-props-disabled>
      <InputField
        v-model="controls.modelValue"
        :placeholder="controls.placeHolder"
        :label="controls.label"
        :hint="controls.hint"
        :size="controls.size"
        state="disabled"
      />
    </Variant>
    <Variant title="Error with icon" auto-props-disabled>
      <InputField
        v-model="controls.modelValue"
        :placeholder="controls.placeHolder"
        :label="controls.label"
        :hint="controls.hint"
        hasIcon
        :isDateInput="controls.isDateInput"
        :size="controls.size"
        state="error"
      />
    </Variant>
    <Variant title="Error without icon" auto-props-disabled>
      <InputField
        v-model="controls.modelValue"
        :placeholder="controls.placeHolder"
        :label="controls.label"
        :hint="controls.hint"
        :isDateInput="controls.isDateInput"
        :size="controls.size"
        state="error"
      />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import type { InputFieldSize, InputFieldState } from './InputField.model'

import {
  INPUTFIELD_SIZES,
  INPUTFIELD_STATES,
  INPUTFIELD_SIZE_DEFAULT,
  INPUTFIELD_STATE_DEFAULT
} from './InputField.model'

interface Props {
  modelValue: string
  placeHolder: string
  label: string
  hint: string
  hasIcon: boolean
  isDateInput: boolean
  size: InputFieldSize
  state: InputFieldState
  password: boolean
}

const controls = reactive<Props>({
  modelValue: '',
  placeHolder: 'placeholder',
  label: 'label',
  hint: 'hint',
  hasIcon: false,
  isDateInput: false,
  size: INPUTFIELD_SIZE_DEFAULT,
  state: INPUTFIELD_STATE_DEFAULT,
  password: false
})
</script>
