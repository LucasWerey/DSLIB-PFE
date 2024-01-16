<template>
  <Story title="Select Field" group="cta">
    <template #controls>
      <ControlDescription>
        <HstSelect v-model="controls.default" :options="options" title="Options" />
      </ControlDescription>
      <ControlDescription>
        <HstText v-model="controls.title" :options="title" title="Title" />
      </ControlDescription>
    </template>
    <Variant title="Playground" :auto-props-disabled="true">
      <div class="h-[30vh]">
        <SelectField
          :options="options"
          :default="controls.default"
          :title="controls.title"
          @update:modelValue="logEvent('update', $event)"
        />
      </div>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import type { SelectFieldOption } from './SelectField.model'
import { logEvent } from 'histoire/client'

interface Controls {
  options: SelectFieldOption[]
  default: string
  title: string
}

const controls = reactive<Controls>({
  options: [
    { value: 'Mois', label: 'Mois' },
    { value: 'Années', label: 'Années' },
    { value: 'Semaines', label: 'Semaines' },
    { value: 'Jours', label: 'Jours' }
  ],
  default: 'Mois',
  title: 'Date'
})

const options = computed(() => controls.options)
const title = computed(() => controls.title)
</script>
