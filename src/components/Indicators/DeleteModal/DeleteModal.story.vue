<template>
  <Story
    title="Delete Modal"
    group="indicators"
    :layout="{
      type: 'grid',
      width: '80%'
    }"
  >
    <template #controls>
      <ControlDescription>
        <HstText v-model="controls.title" title="Title" />
      </ControlDescription>
      <ControlDescription>
        <HstText v-model="controls.description" title="Description" />
      </ControlDescription>
      <ControlDescription>
        <HstText v-model="controls.labelFirstButton" title="LabelFirstButton" />
      </ControlDescription>
      <ControlDescription>
        <HstText v-model="controls.labelSecondButton" title="LabelSecondButton" />
      </ControlDescription>
    </template>

    <Variant title="Playground" auto-props-disabled>
      <DeleteModal
        :title="controls.title"
        :description="controls.description"
        :labelFirstButton="controls.labelFirstButton"
        :labelSecondButton="controls.labelSecondButton"
        @FirstButtonClicked="logEvent('FirstButtonClicked', $event)"
        @SecondButtonClicked="logEvent('SecondButtonClicked', $event)"
      />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { logEvent } from 'histoire/client'
interface Controls {
  title: string
  description: string
  labelFirstButton: string
  labelSecondButton: string
}

const controls = reactive<Controls>({
  title: 'Title',
  description: '',
  labelFirstButton: 'LabelButton',
  labelSecondButton: 'LabelButton'
})
</script>
