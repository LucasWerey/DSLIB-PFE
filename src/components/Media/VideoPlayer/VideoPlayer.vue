<template>
  <div
    data-test="VideoPlayer"
    class="relative cursor-pointer"
    :style="{ width: videoWidth }"
    @mouseover.stop="(showPauseButton = isPlaying), (showControls = true)"
    @mouseleave.stop="(showPauseButton = false), (showControls = false)"
    @click="isPlaying && !autoplay ? pauseVideo() : playVideo()"
  >
    <video
      ref="videoRef"
      data-test="video"
      :loop="autoplay"
      :autoplay="autoplay"
      :muted="autoplay"
      class="flex items-center justify-center video-element object-cover"
      @pause="showPlayButton"
      @timeupdate.stop="updateProgress"
      :class="videoSizeClass"
      :style="{ filter: isPlaying || autoplay ? 'none' : 'brightness(0.6)' }"
    >
      <source :src="videoSource" />
    </video>
    <div
      data-test="playButton"
      v-if="!isPlaying && !autoplay"
      class="cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      :class="buttonSizeClass"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
        <ellipse cx="50" cy="50" rx="49.8638" ry="50" fill="#58A4B0" fill-opacity="0.6" />
        <path d="M79.9185 50L35.0411 75.9808V24.0192L79.9185 50Z" fill="white" />
      </svg>
    </div>
    <div
      data-test="pauseButton"
      v-if="isPlaying && showPauseButton && !autoplay"
      class="cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      :class="buttonSizeClass"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
        <rect x="30" y="20" width="15" height="60" fill="#58A4B0" fill-opacity="0.6" />
        <rect x="55" y="20" width="15" height="60" fill="#58A4B0" fill-opacity="0.6" />
      </svg>
    </div>
    <div
      data-test="controls"
      v-if="showControls && !autoplay"
      id="controls"
      class="w-full absolute top-full transform -translate-y-[100%] gap-10 px-4 flex flex-row-reverse justify-between"
    >
      <div
        id="volume"
        data-test="volumeButton"
        class="flex flex-row gap-2 py-4 cursor-pointer w-10 h-50"
        @click.stop="showVolumeSlider = !showVolumeSlider"
      >
        <div class="flex flex-col-reverse gap-2 align-middle justify-center items-center w-10 h-50">
          <div class="w-8 h-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#58a4b0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="cursor-pointer w-8"
            >
              <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15 9a5 5 0 0 1 0 6"></path>
            </svg>
          </div>
          <input
            v-if="showVolumeSlider"
            data-test="volumeSlider"
            type="range"
            class="volume-slider cursor-pointer"
            :class="size === 'xs' ? 'w-20 origin-bottom-center' : ''"
            min="0"
            max="1"
            step="0.1"
            :value="currentVolume"
            @input.stop="changeVolume(($event?.target as HTMLInputElement)?.value)"
            orient="vertical"
          />
        </div>
      </div>
      <div class="flex items-middle w-full h-full self-end mb-1" id="timer">
        <input
          data-test="progressSlider"
          type="range"
          class="progress-slider w-full"
          min="0"
          :max="videoDuration"
          :value="currentProgress"
          @input.stop="seekVideo(($event?.target as HTMLInputElement)?.value)"
          @click.stop=""
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { VideoPlayerSize, VideoPlayerAutoplay } from './VideoPlayer.model'
import {
  VIDEO_PLAYER_SIZES,
  VIDEO_PLAYER_AUTOPLAYS,
  VIDEO_PLAYER_SIZE_DEFAULT,
  VIDEO_PLAYER_AUTOPLAY_DEFAULT
} from './VideoPlayer.model'

const props = defineProps({
  size: {
    type: String as PropType<VideoPlayerSize>,
    required: true,
    default: VIDEO_PLAYER_SIZE_DEFAULT,
    validator: (value: VideoPlayerSize): boolean => VIDEO_PLAYER_SIZES.includes(value)
  },
  src: {
    type: String as PropType<string>,
    default: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm'
  },
  autoplay: {
    type: Boolean as PropType<VideoPlayerAutoplay>,
    default: VIDEO_PLAYER_AUTOPLAY_DEFAULT,
    validator: (value: VideoPlayerAutoplay): boolean => VIDEO_PLAYER_AUTOPLAYS.includes(value)
  }
})

const videoRef = ref(null)
const isPlaying = ref(false)
const showPauseButton = ref(false)
const showControls = ref(false)
const isSrcValid = ref(false)
const currentVolume = ref(1)
const showVolumeSlider = ref(false)
const currentProgress = ref(0)
const videoDuration = ref<number | undefined>(undefined)
const videoSource = ref('http://media.w3.org/2010/05/sintel/trailer.mp4')

const videoWidth = computed(() =>
  videoRef.value ? `${(videoRef.value as HTMLVideoElement).clientWidth}px` : 'auto'
)
const videoSizeClass = computed(() => setSizeClasses[props.size])
const buttonSizeClass = computed(() => setButtonSizeClasses[props.size])

const autoplay = computed(() => props.autoplay)

const setSizeClasses = {
  xs: 'w-[310px] h-[196.93px]',
  sm: 'w-[620px] h-[393.85px]',
  md: 'w-[732px] h-[465px]'
}

const setButtonSizeClasses = {
  xs: 'w-[42.23px] h-[42.35px]',
  sm: 'w-[84.47px] h-[84.70px]',
  md: 'w-[99.73px] h-[100px]'
}

const checkVideoValidity = async () => {
  try {
    const response = await fetch(props.src, { method: 'HEAD' })
    isSrcValid.value = response.ok
  } catch (error) {
    isSrcValid.value = false
  }

  videoSource.value =
    isSrcValid.value && props.src !== ''
      ? props.src
      : 'http://media.w3.org/2010/05/sintel/trailer.mp4'

  if (videoRef.value) {
    ;(videoRef.value as HTMLVideoElement).load()
  }
}

const getVideoDuration = () => {
  if (videoRef.value) {
    ;(videoRef.value as HTMLVideoElement).addEventListener('loadedmetadata', () => {
      videoDuration.value = (videoRef.value as unknown as HTMLVideoElement).duration
    })
  }
}

const playVideo = () => {
  if (videoRef.value) {
    try {
      const playPromise = (videoRef.value as HTMLVideoElement).play()
      if (playPromise !== undefined) {
        playPromise
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          .then((_) => {
            isPlaying.value = true
            togglePauseButton()
          })
          .catch((error) => {
            console.error('Play interrupted:', error)
          })
      }
    } catch (error) {
      console.error('Play failed:', error)
    }
  }
}

const pauseVideo = () => {
  if (videoRef.value) {
    try {
      const pausePromise = (videoRef.value as HTMLVideoElement).pause()
      if (pausePromise !== undefined) {
        pausePromise
        return (
          Promise.resolve()
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .then((_: any) => {
              isPlaying.value = false
              togglePauseButton()
            })
            .catch((error: any) => {
              console.error('Pause interrupted:', error)
            })
        )
      }
    } catch (error) {
      // Handle exceptions
      console.error('Pause failed:', error)
    }
  }
}

const showPlayButton = () => {
  isPlaying.value = false
  togglePauseButton()
}

const togglePauseButton = () => {
  showPauseButton.value = isPlaying.value && showPauseButton.value
}

const changeVolume = (value: string) => {
  const newVolume = parseFloat(value)
  if (videoRef.value) {
    ;(videoRef.value as HTMLVideoElement).volume = newVolume
    currentVolume.value = newVolume
  }
}

const seekVideo = (value: string) => {
  const newValue = parseFloat(value)
  if (videoRef.value) {
    ;(videoRef.value as HTMLVideoElement).currentTime = newValue
    currentProgress.value = newValue
  }
}

const updateProgress = () => {
  if (videoRef.value) {
    currentProgress.value = (videoRef.value as HTMLVideoElement).currentTime
  }
}

onMounted(() => {
  getVideoDuration()
})

watch(() => props.src, checkVideoValidity, { immediate: true })
</script>

<style scoped>
input[type='range'] {
  height: 36px;
  background-color: transparent;
  -webkit-appearance: none;
  appearance: none;
  margin: 10px 0;
}
.volume-slider {
  transform: translateY(-100%) rotate(-90deg);
  writing-mode: bt-lr;
}
input[type='range']:focus {
  outline: none;
}
input[type='range']::-webkit-slider-runnable-track {
  width: 100%;
  height: 13px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #58a4b0;
  background: #58a4b0;
  border-radius: 50px;
  border: 2px solid #58a4b0;
}
input[type='range']::-webkit-slider-thumb {
  box-shadow: 1px 1px 3px #58a4b0;
  border: 1px solid #58a4b0;
  height: 28px;
  width: 26px;
  border-radius: 15px;
  background: #ffffff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -9px;
}
input[type='range']:focus::-webkit-slider-runnable-track {
  background: #58a4b0;
}
input[type='range']::-moz-range-track {
  width: 100%;
  height: 13px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #58a4b0;
  background: #58a4b0;
  border-radius: 50px;
  border: 2px solid #58a4b0;
}
input[type='range']::-moz-range-thumb {
  box-shadow: 1px 1px 3px #58a4b0;
  border: 1px solid #58a4b0;
  height: 28px;
  width: 26px;
  border-radius: 15px;
  background: #ffffff;
  cursor: pointer;
}
input[type='range']::-ms-track {
  width: 100%;
  height: 13px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type='range']::-ms-fill-lower {
  background: #58a4b0;
  border: 2px solid #58a4b0;
  border-radius: 100px;
  box-shadow: 1px 1px 1px #58a4b0;
}
input[type='range']::-ms-fill-upper {
  background: #58a4b0;
  border: 2px solid #58a4b0;
  border-radius: 100px;
  box-shadow: 1px 1px 1px #58a4b0;
}
input[type='range']::-ms-thumb {
  margin-top: 1px;
  box-shadow: 1px 1px 3px #58a4b0;
  border: 1px solid #58a4b0;
  height: 28px;
  width: 26px;
  border-radius: 15px;
  background: #ffffff;
  cursor: pointer;
}
input[type='range']:focus::-ms-fill-lower {
  background: #58a4b0;
}
input[type='range']:focus::-ms-fill-upper {
  background: #58a4b0;
}
</style>
