<template>
  <Story
    title="Button"
    group="cta"
    responsiveDisabled
    :layout="{
      type: 'grid',
      width: '50%'
    }"
  >
    <template #controls>
      <ControlDescription>
        <HstSelect v-model="controls.type" :options="Object.values(BUTTON_TYPES)" title="Type" />
      </ControlDescription>
      <ControlDescription>
        <HstSelect v-model="controls.state" :options="Object.values(BUTTON_STATES)" title="State" />
      </ControlDescription>
      <ControlDescription>
        <HstSelect v-model="controls.style" :options="Object.values(BUTTON_STYLES)" title="Style" />
      </ControlDescription>
      <ControlDescription>
        <HstSelect v-model="controls.icon" :options="Object.values(BUTTON_ICONS)" title="Icon" />
      </ControlDescription>
      <ControlDescription>
        <HstSelect
          v-model="controls.iconPosition"
          :options="Object.values(BUTTON_ICON_POSITIONS)"
          title="Icon Position"
        />
      </ControlDescription>
    </template>
    <Variant title="Playground" auto-props-disabled>
      <Button
        :type="controls.type"
        :icon="controls.icon"
        :state="controls.state"
        :iconPosition="controls.iconPosition"
        :styled="controls.style"
        >Hello</Button
      >
    </Variant>
    <Variant title="Default fill">
      <Button type="default" state="active" styled="fill">Default</Button>
    </Variant>
    <Variant title="Default fill icon trailing">
      <Button type="default" state="active" styled="fill" icon-position="trailing">Default</Button>
    </Variant>
    <Variant title="Default fill icon leading">
      <Button type="default" state="active" styled="fill" icon-position="leading">Default</Button>
    </Variant>
    <Variant title="Default fill disabled">
      <Button type="default" state="disabled" styled="fill">disabled</Button>
    </Variant>
    <Variant title="Default fill disabled icon trailing">
      <Button type="default" state="disabled" styled="fill" icon-position="trailing"
        >Default</Button
      >
    </Variant>
    <Variant title="Default fill disabled icon leading">
      <Button type="default" state="disabled" styled="fill" icon-position="leading">Default</Button>
    </Variant>
    <Variant title="Outlined">
      <Button type="default" state="active" styled="outlined">Outlined</Button>
    </Variant>
    <Variant title="Outlined icon trailing">
      <Button type="default" state="active" styled="outlined" icon-position="trailing"
        >Outlined</Button
      >
    </Variant>
    <Variant title="Outlined icon leading">
      <Button type="default" state="active" styled="outlined" icon-position="leading"
        >Outlined</Button
      >
    </Variant>
    <Variant title="Outlined disabled">
      <Button type="default" state="disabled" styled="outlined">Outlined disabled</Button>
    </Variant>
    <Variant title="Outlined disabled icon trailing">
      <Button type="default" state="disabled" styled="outlined" icon-position="trailing"
        >Outlined Disabled</Button
      >
    </Variant>
    <Variant title="Outlined disabled icon leading">
      <Button type="default" state="disabled" styled="outlined" icon-position="leading"
        >Outlined Disabled</Button
      >
    </Variant>
    <Variant title="Off">
      <Button type="default" state="active" styled="off">Off</Button>
    </Variant>
    <Variant title="Off icon trailing">
      <Button type="default" state="active" icon-position="trailing" styled="off">Off</Button>
    </Variant>
    <Variant title="Off icon leading">
      <Button type="default" state="active" icon-position="leading" styled="off">Off</Button>
    </Variant>
    <Variant title="Off disabled">
      <Button type="default" state="disabled" styled="off">Off disabled</Button>
    </Variant>
    <Variant title="Off disabled icon trailing">
      <Button type="default" state="disabled" icon-position="trailing" styled="off">Off disabled</Button>
    </Variant>
    <Variant title="Off disabled icon leading">
      <Button type="default" state="disabled" icon-position="leading" styled="off">Off disabled</Button>
    </Variant>
    <Variant title="Linkedin leading">
      <Button type="socialMedia" icon="linkedin" icon-position="leading">LinkedIn</Button>
    </Variant>
    <Variant title="Linkedin trailing">
      <Button type="socialMedia" icon="linkedin" icon-position="trailing">LinkedIn</Button>
    </Variant>
    <Variant title="Google leading">
      <Button type="socialMedia" icon="google" icon-position="leading">Google</Button>
    </Variant>
    <Variant title="Google trailing">
      <Button type="socialMedia" icon="google" icon-position="trailing">Google</Button>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import type {
  ButtonType,
  ButtonIcon,
  ButtonState,
  ButtonIconPosition,
  ButtonStyle
} from './Button.model'

import {
  BUTTON_TYPES,
  BUTTON_ICONS,
  BUTTON_STATES,
  BUTTON_ICON_POSITIONS,
  BUTTON_STYLES,
  BUTTON_TYPE_DEFAULT,
  BUTTON_STATE_DEFAULT,
  BUTTON_STYLE_DEFAULT
} from './Button.model'

interface Props {
  type: ButtonType
  icon: ButtonIcon
  state: ButtonState
  iconPosition: ButtonIconPosition
  style: ButtonStyle
}

const controls = reactive<Props>({
  type: BUTTON_TYPE_DEFAULT,
  icon: 'none',
  state: BUTTON_STATE_DEFAULT,
  iconPosition: 'none',
  style: BUTTON_STYLE_DEFAULT
})
</script>
