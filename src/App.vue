<script setup lang="ts">
import './assets/index.css'
import SnackBar from './components/Indicators/SnackBar'
import Avatar from './components/Media/Avatar'
import VideoPlayer from './components/Media/VideoPlayer'

const isVisible = ref(true)

const consoleLog = (arg: boolean) => {
  isVisible.value = !arg
  return arg
}

const src = `https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm`
const src2 = `https://interactive-examples.mdn.mozilla.net/media/eazeaz-videos/fleazezaer.mp4`
</script>

<template>
  <div>
    <SnackBar
      type="info"
      size="medium"
      close="yes"
      @close="(arg) => consoleLog(arg)"
      :class="isVisible ? 'block' : 'translate-x-[100vw] ease-in-out duration-500'"
    >
      Lorem ipsum consectetur. Lorem ipsum consectetur.
    </SnackBar>
    <SnackBar
      type="validation"
      size="small"
      close="yes"
      @close="consoleLog"
      :class="isVisible ? 'block' : 'translate-x-[100vw] ease-in-out duration-500'"
      >Non</SnackBar
    >
    <SnackBar type="error" size="small" close="no">Oui</SnackBar>
  </div>

  <Avatar type="photo" size="xlarge" src="https://picsum.photos/200/300" alt="avatar" />
  <Avatar type="notConnected" size="xlarge" />
  <Avatar type="initial" size="xlarge">YO</Avatar>

  <div class="flex flex-col gap-2">
    <VideoPlayer size="md" :src="src2" autoplay />
    <VideoPlayer size="xs" :src="src" autoplay />
  </div>
</template>
