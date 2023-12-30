<template>
  <Story title="Bullet Points" group="indicators" :layout="{ type: 'grid', width: '100%' }">
    <template #controls>
      <ControlDescription>
        <HstSelect
          v-model="controls.color"
          :options="Object.values(BULLET_POINT_COLOR)"
          title="Color"
        />
      </ControlDescription>
      <ControlDescription>
        <HstSelect
          v-model="controls.size"
          :options="Object.values(BULLET_POINT_SIZE)"
          title="Size"
        />
      </ControlDescription>
      <ControlDescription>
        <HstSelect
          v-model="controls.type"
          :options="Object.values(BULLET_POINT_TYPES)"
          title="Type"
        />
      </ControlDescription>
      <ControlDescription>
        <HstNumber v-model="controls.label" title="Label" />
      </ControlDescription>
    </template>

    <Variant title="Playground" auto-props-disabled>
      <BulletPoints
        :color="controls.color"
        :size="controls.size"
        :type="controls.type"
        :label="controls.label"
      />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import {
  BULLET_POINT_COLOR_DEFAULT,
  BULLET_POINT_COLOR,
  BULLET_POINT_SIZE_DEFAULT,
  BULLET_POINT_SIZE,
  BULLET_POINT_TYPE_DEFAULT,
  BULLET_POINT_TYPES,
  type BulletPointType,
  type BulletPointColor,
  type BulletPointSize
} from './bulletPoints.model'

interface Controls {
  color: BulletPointColor
  size: BulletPointSize
  type: BulletPointType
  label: number
}

const controls = reactive<Controls>({
  color: BULLET_POINT_COLOR_DEFAULT,
  size: BULLET_POINT_SIZE_DEFAULT,
  type: BULLET_POINT_TYPE_DEFAULT,
  label: 1
})
</script>
