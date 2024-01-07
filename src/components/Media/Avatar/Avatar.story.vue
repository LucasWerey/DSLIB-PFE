<template>
  <Story
    title="Avatar"
    group="media"
    :layout="{
      type: 'grid',
      width: '50%'
    }"
  >
    <template #controls>
      <ControlDescription>
        <HstSelect v-model="controls.type" :options="Object.values(AVATAR_TYPES)" title="Type" />
      </ControlDescription>
      <ControlDescription>
        <HstSelect v-model="controls.size" :options="Object.values(AVATAR_SIZES)" title="Size" />
      </ControlDescription>
      <ControlDescription>
        <HstText v-model="controls.src" title="Src (needed if photo)" />
      </ControlDescription>
      <ControlDescription>
        <HstText v-model="controls.alt" title="Alt (needed if photo)" />
      </ControlDescription>
    </template>

    <Variant title="Playground" auto-props-disabled>
      <Avatar :type="controls.type" :size="controls.size" :src="controls.src" :alt="controls.alt">
        TT</Avatar
      >
    </Variant>
    <Variant title="All sizes photo" auto-props-disabled>
      <div class="flex flew-row gap-1 w-full justify-center">
        <Avatar type="photo" size="xlarge" :src="avartarUrl" alt="avatar photo" />
        <Avatar type="photo" size="large" :src="avartarUrl" alt="avatar photo" />
        <Avatar type="photo" size="medium" :src="avartarUrl" alt="avatar photo" />
        <Avatar type="photo" size="small" :src="avartarUrl" alt="avatar photo" />
        <Avatar type="photo" size="xsmall" :src="avartarUrl" alt="avatar photo" />
        <Avatar type="photo" size="xxsmall" :src="avartarUrl" alt="avatar photo" />
      </div>
    </Variant>
    <Variant title="All sizes initial" auto-props-disabled>
      <div class="flex flew-row gap-1 w-full justify-center">
        <Avatar type="initial" size="xlarge">CH</Avatar>
        <Avatar type="initial" size="large">CH</Avatar>
        <Avatar type="initial" size="medium">CH</Avatar>
        <Avatar type="initial" size="small">CH</Avatar>
        <Avatar type="initial" size="xsmall">CH</Avatar>
        <Avatar type="initial" size="xxsmall">CH</Avatar>
      </div>
    </Variant>
    <Variant title="All sizes Not Connected" auto-props-disabled>
      <div class="flex flew-row gap-1 w-full justify-center">
        <Avatar type="notConnected" size="xlarge" />
        <Avatar type="notConnected" size="large" />
        <Avatar type="notConnected" size="medium" />
        <Avatar type="notConnected" size="small" />
        <Avatar type="notConnected" size="xsmall" />
        <Avatar type="notConnected" size="xxsmall" />
      </div>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import type { AvatarType, AvatarSize } from './Avatar.model'
import {
  AVATAR_TYPES,
  AVATAR_SIZES,
  AVATAR_TYPE_DEFAULT,
  AVATAR_SIZE_DEFAULT
} from './Avatar.model'

const avartarUrl: string =
  'https://api.dicebear.com/7.x/micah/svg?seed=Lucas&radius=50&mouth=pucker,smile,smirk,laughing&backgroundColor=b6e3f4,ffd5dc,d1d4f9,c0aede,ffdfbf'

interface Props {
  type: AvatarType
  size: AvatarSize
  src: string
  alt: string
}

const controls = reactive<Props>({
  type: AVATAR_TYPE_DEFAULT,
  size: AVATAR_SIZE_DEFAULT,
  src: '',
  alt: ''
})
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
