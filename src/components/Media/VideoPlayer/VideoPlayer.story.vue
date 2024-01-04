<template>
  <Story title="VideoPlayer" group="media" :layout="{ type: 'grid', width: '70%' }">
    <template #controls>
      <ControlDescription>
        <HstSelect
          v-model="controls.size"
          :options="Object.values(VIDEO_PLAYER_SIZES)"
          title="Size"
        />
      </ControlDescription>
      <ControlDescription>
        <HstCheckbox
          v-model="controls.autoplay"
          :options="Object.values(VIDEO_PLAYER_AUTOPLAYS)"
          title="Autoplay"
        />
      </ControlDescription>
      <ControlDescription>
        <HstText v-model="controls.src" title="Src" />
      </ControlDescription>
    </template>

    <Variant title="Playground" auto-props-disabled>
      <VideoPlayer :size="controls.size" :src="controls.src" :autoplay="controls.autoplay" />
    </Variant>
    <Variant title="Auto play with bad src small" auto-props-disabled>
      <VideoPlayer size="sm" autoplay />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import type { VideoPlayerSize, VideoPlayerAutoplay } from './VideoPlayer.model'
import {
  VIDEO_PLAYER_SIZES,
  VIDEO_PLAYER_AUTOPLAYS,
  VIDEO_PLAYER_SIZE_DEFAULT,
  VIDEO_PLAYER_AUTOPLAY_DEFAULT
} from './VideoPlayer.model'

interface Props {
  size: VideoPlayerSize
  src: string
  autoplay: VideoPlayerAutoplay
}

const controls = reactive<Props>({
  size: VIDEO_PLAYER_SIZE_DEFAULT,
  src: '',
  autoplay: VIDEO_PLAYER_AUTOPLAY_DEFAULT
})
</script>
