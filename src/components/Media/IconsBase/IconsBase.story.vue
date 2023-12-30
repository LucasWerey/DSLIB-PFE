<template>
  <Story
    title="Icons"
    group="media"
    responsiveDisabled
    :layout="{
      type: 'grid',
      width: '11%'
    }"
  >
    <template #controls>
      <ControlDescription>
        <HstSelect v-model="controls.name" :options="Object.values(ICONS_NAME)" title="Name" />
      </ControlDescription>
      <ControlDescription>
        <HstSelect v-model="controls.size" :options="Object.values(ICONS_SIZE)" title="Size" />
      </ControlDescription>
      <ControlDescription>
        <HstSelect v-model="controls.color" :options="Object.keys(colorsPalette)" title="Color" />
      </ControlDescription>
      <ControlDescription>
        <HstText v-model="controls.title" title="Title" />
      </ControlDescription>
      <ControlDescription>
        <HstNumber v-model="controls.rotate" title="Rotate" />
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
    <Variant title="Logo" auto-props-disabled>
      <IconsBase name="logo" :size="controls.size" />
    </Variant>
    <Variant title="moveRight" auto-props-disabled>
      <IconsBase name="moveRight" color="moonstone" :size="controls.size" />
    </Variant>
    <Variant title="moveLeft" auto-props-disabled>
      <IconsBase name="moveLeft" color="moonstone" :size="controls.size" />
    </Variant>
    <Variant title="close" auto-props-disabled>
      <IconsBase name="close" color="moonstone" :size="controls.size" />
    </Variant>
    <Variant title="logout" auto-props-disabled>
      <IconsBase name="logout" color="moonstone" :size="controls.size" />
    </Variant>
    <Variant title="warning" auto-props-disabled>
      <IconsBase name="warning" color="moonstone" :size="controls.size" />
    </Variant>
    <Variant title="upload" auto-props-disabled>
      <IconsBase name="upload" color="moonstone" :size="controls.size" />
    </Variant>
    <Variant title="chevronUp" auto-props-disabled>
      <IconsBase name="chevronUp" color="moonstone" :size="controls.size" />
    </Variant>
    <Variant title="chevronDown" auto-props-disabled>
      <IconsBase name="chevronDown" color="moonstone" :size="controls.size" />
    </Variant>
    <Variant title="calendar" auto-props-disabled>
      <IconsBase name="calendar" color="moonstone" :size="controls.size" />
    </Variant>
    <Variant title="check" auto-props-disabled>
      <IconsBase name="check" color="moonstone" :size="controls.size" />
    </Variant>
    <Variant title="pencil" auto-props-disabled>
      <IconsBase name="pencil" color="moonstone" :size="controls.size" />
    </Variant>
    <Variant title="plus" auto-props-disabled>
      <IconsBase name="plus" color="moonstone" :size="controls.size" />
    </Variant>
    <Variant title="trash" auto-props-disabled>
      <IconsBase name="trash" color="moonstone" :size="controls.size" />
    </Variant>
    <Variant title="info" auto-props-disabled>
      <IconsBase name="info" color="moonstone" :size="controls.size" />
    </Variant>
    <Variant title="linkedin" auto-props-disabled>
      <IconsBase name="linkedin" :size="controls.size" />
    </Variant>
    <Variant title="google" auto-props-disabled>
      <IconsBase name="google" :size="controls.size" />
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

import { colorsPalette } from '../../../tailwind/presetConfig'

interface Props {
  name: IconsName
  size: IconsSize
  color: IconsColor
  title: string
  rotate: number
}

const controls = reactive<Props>({
  name: ICONS_NAME.logo,
  size: ICONS_SIZE.large,
  color: ICONS_COLOR_DEFAULT,
  title: '',
  rotate: 0
})
</script>
