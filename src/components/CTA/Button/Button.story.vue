<template>
  <Story
    title="Button"
    group="cta"
    responsiveDisabled
    :layout="{
      type: 'grid',
      width: '45%'
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
      <ControlDescription>
        <HstCheckbox v-model="controls.isLight" title="isLight" />
      </ControlDescription>
    </template>
    <Variant title="Playground" auto-props-disabled>
      <Button
        :type="controls.type"
        :icon="controls.icon"
        :state="controls.state"
        :iconPosition="controls.iconPosition"
        :styled="controls.style"
        :isLight="controls.isLight"
        >Hello</Button
      >
    </Variant>
    <Variant title="Default fill" auto-props-disabled>
      <Button type="default" state="active" styled="fill">Default</Button>
    </Variant>
    <Variant title="Default fill icon trailing" auto-props-disabled>
      <Button type="default" state="active" styled="fill" icon-position="trailing">Default</Button>
    </Variant>
    <Variant title="Default fill icon leading" auto-props-disabled>
      <Button type="default" state="active" styled="fill" icon-position="leading">Default</Button>
    </Variant>
    <Variant title="Default fill disabled" auto-props-disabled>
      <Button type="default" state="disabled" styled="fill">disabled</Button>
    </Variant>
    <Variant title="Default fill disabled icon trailing" auto-props-disabled>
      <Button type="default" state="disabled" styled="fill" icon-position="trailing"
        >Default</Button
      >
    </Variant>
    <Variant title="Default fill disabled icon leading" auto-props-disabled>
      <Button type="default" state="disabled" styled="fill" icon-position="leading">Default</Button>
    </Variant>
    <Variant title="Outlined" auto-props-disabled>
      <Button type="default" state="active" styled="outlined">Outlined</Button>
    </Variant>
    <Variant title="Outlined icon trailing" auto-props-disabled>
      <Button type="default" state="active" styled="outlined" icon-position="trailing"
        >Outlined</Button
      >
    </Variant>
    <Variant title="Outlined icon leading" auto-props-disabled>
      <Button type="default" state="active" styled="outlined" icon-position="leading"
        >Outlined</Button
      >
    </Variant>
    <Variant title="Outlined disabled" auto-props-disabled>
      <Button type="default" state="disabled" styled="outlined">Outlined disabled</Button>
    </Variant>
    <Variant title="Outlined disabled icon trailing" auto-props-disabled>
      <Button type="default" state="disabled" styled="outlined" icon-position="trailing"
        >Outlined Disabled</Button
      >
    </Variant>
    <Variant title="Outlined disabled icon leading" auto-props-disabled>
      <Button type="default" state="disabled" styled="outlined" icon-position="leading"
        >Outlined Disabled</Button
      >
    </Variant>
    <Variant title="Off" auto-props-disabled>
      <Button type="default" state="active" styled="off">Off</Button>
    </Variant>
    <Variant title="Off icon trailing" auto-props-disabled>
      <Button type="default" state="active" icon-position="trailing" styled="off">Off</Button>
    </Variant>
    <Variant title="Off icon leading" auto-props-disabled>
      <Button type="default" state="active" icon-position="leading" styled="off">Off</Button>
    </Variant>
    <Variant title="Off disabled" auto-props-disabled>
      <Button type="default" state="disabled" styled="off">Off disabled</Button>
    </Variant>
    <Variant title="Off disabled icon trailing" auto-props-disabled>
      <Button type="default" state="disabled" icon-position="trailing" styled="off"
        >Off disabled</Button
      >
    </Variant>
    <Variant title="Off disabled icon leading" auto-props-disabled>
      <Button type="default" state="disabled" icon-position="leading" styled="off"
        >Off disabled</Button
      >
    </Variant>
    <Variant title="Linkedin leading" auto-props-disabled>
      <Button type="socialMedia" icon="linkedin" icon-position="leading">LinkedIn</Button>
    </Variant>
    <Variant title="Linkedin trailing" auto-props-disabled>
      <Button type="socialMedia" icon="linkedin" icon-position="trailing">LinkedIn</Button>
    </Variant>
    <Variant title="Google leading" auto-props-disabled>
      <Button type="socialMedia" icon="google" icon-position="leading">Google</Button>
    </Variant>
    <Variant title="Google trailing" auto-props-disabled>
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
  isLight: boolean
}

const controls = reactive<Props>({
  type: BUTTON_TYPE_DEFAULT,
  icon: 'none',
  state: BUTTON_STATE_DEFAULT,
  iconPosition: 'none',
  style: BUTTON_STYLE_DEFAULT,
  isLight: false
})
</script>
