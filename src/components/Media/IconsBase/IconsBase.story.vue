<template>
  <Story
    title="Icons"
    group="media"
    :layout="{
      type: 'grid',
      width: '100%'
    }"
  >
    <template #controls>
      <ControlDescription>
        <HstSelect v-model="controls.name" :options="Object.values(ICONS_NAME)" label="Name" />
      </ControlDescription>
      <ControlDescription>
        <HstSelect v-model="controls.size" :options="Object.values(ICONS_SIZE)" label="Size" />
      </ControlDescription>
      <ControlDescription>
        <HstSelect v-model="controls.color" :options="Object.keys(colorsPalette)" label="Color" />
      </ControlDescription>
      <ControlDescription>
        <HstText v-model="controls.title" label="Title" />
      </ControlDescription>
      <ControlDescription>
        <HstNumber v-model="controls.rotate" label="Rotate" />
      </ControlDescription>
    </template>

    <Variant title="Playground" auto-props-disabled>
      <IconsBase
        :name="controls.name"
        :size="controls.size"
        :color="controls.color"
        :title="controls.title"
        :rotate="controls.rotate"
      />
    </Variant>
  </Story>
</template>
<script setup lang="ts">
import {
  ICONS_COLOR_DEFAULT,
  ICONS_NAME,
  ICONS_SIZE,
  type IconsColor,
  type IconsName,
  type IconsSize
} from './IconsBase.model'

import { colorsPalette } from '@lib/tailwind/presetConfig'

interface Props {
  name: IconsName
  size: IconsSize
  color: IconsColor
  title: string
  rotate: number
}

const controls = reactive<Props>({
  name: ICONS_NAME.home,
  size: ICONS_SIZE.medium,
  color: ICONS_COLOR_DEFAULT,
  title: '',
  rotate: 0
})
</script>
