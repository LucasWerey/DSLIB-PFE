<template>
  <Story title="Loader" group="indicators" :layout="{ type: 'grid', width: '100%' }">
    <template #controls>
      <ControlDescription>
        <HstSelect v-model="controls.color" :options="Object.values(LOADER_COLOR)" title="Color" />
      </ControlDescription>
      <ControlDescription>
        <HstSelect v-model="controls.size" :options="Object.values(LOADER_SIZE)" title="Size" />
      </ControlDescription>
    </template>

    <Variant title="Playground" auto-props-disabled>
      <Loader :color="controls.color" :size="controls.size" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import {
  LOADER_COLOR_DEFAULT,
  LOADER_COLOR,
  LOADER_SIZE_DEFAULT,
  LOADER_SIZE,
  type LoaderSize,
  type LoaderColor
} from './Loader.model'

interface Controls {
  color: LoaderColor
  size: LoaderSize
}

const controls = reactive<Controls>({
  color: LOADER_COLOR_DEFAULT,
  size: LOADER_SIZE_DEFAULT
})
</script>
