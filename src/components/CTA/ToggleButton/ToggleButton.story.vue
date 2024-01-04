<template>
  <Story
    title="Toggle Button"
    group="cta"
    responsiveDisabled
    :layout="{
      type: 'grid'
    }"
  >
    <template #controls>
      <ControlDescription>
        <HstSelect
          v-model="controls.state"
          :options="Object.values(TOGGLEBUTTON_STATES)"
          title="State"
        />
      </ControlDescription>
    </template>

    <Variant title="Playground" auto-props-disabled>
      <ToggleButton v-model:state="controls.state" />
    </Variant>
    <Variant title="Active" auto-props-disabled>
      <ToggleButton state="active" />
    </Variant>
    <Variant title="Inactive" auto-props-disabled>
      <ToggleButton state="inactive" />
    </Variant>
    <Variant title="Disabled" auto-props-disabled>
      <ToggleButton state="disabled" />
    </Variant>
  </Story>
</template>
<script setup lang="ts">
import type { ToggleButtonState } from './ToggleButton.model'
import { TOGGLEBUTTON_STATES, TOGGLEBUTTON_STATE_DEFAULT } from './ToggleButton.model'

interface Props {
  state: ToggleButtonState
}

const controls = reactive<Props>({
  state: TOGGLEBUTTON_STATE_DEFAULT
})
</script>
