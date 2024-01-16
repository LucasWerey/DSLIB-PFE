<template>
  <Story title="Chip Container" group="containment">
    <template #controls>
      <ControlDescription>
        <HstSelect
          v-model="controls.iconPosition"
          :options="Object.values(CHIP_CONTAINER_ICON_POSITION)"
          title="Icon Position"
        />
      </ControlDescription>
      <ControlDescription>
        <HstCheckbox v-model="controls.hasIcon" title="Has Icon" />
      </ControlDescription>
      <ControlDescription>
        <HstSelect v-model="controls.label" :options="labelOptions" title="Label" />
      </ControlDescription>
    </template>

    <Variant title="Playground" auto-props-disabled>
      <ChipContainer
        :iconPosition="controls.iconPosition"
        :hasIcon="controls.hasIcon"
        :label="controls.label"
      />
    </Variant>
    <Variant title="Default">
      <ChipContainer label="Default" />
    </Variant>
    <Variant title="With Icon" :auto-props-disabled="true">
      <ChipContainer
        label="With Icon"
        :hasIcon="true"
        @deleteChip="logEvent('deleteChip', $event)"
      />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { logEvent } from 'histoire/client'
import {
  CHIP_CONTAINER_ICON_POSITION_DEFAULT,
  CHIP_CONTAINER_ICON_POSITION,
  CHIP_CONTAINER_HAS_ICON_DEFAULT
} from './ChipContainer.model'

import type { ChipContainerIconPosition, ChipContainerHasIcon } from './ChipContainer.model'

interface Controls {
  iconPosition: ChipContainerIconPosition
  hasIcon: ChipContainerHasIcon
  label: string
}

const controls = reactive<Controls>({
  iconPosition: CHIP_CONTAINER_ICON_POSITION_DEFAULT,
  hasIcon: CHIP_CONTAINER_HAS_ICON_DEFAULT,
  label: 'Label 1'
})

const labelOptions = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5']
</script>
