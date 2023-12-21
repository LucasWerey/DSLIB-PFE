<template>
  <span class="loader" />
</template>

<script setup lang="ts">
import {
  LOADER_COLOR_DEFAULT,
  LOADER_COLOR,
  LOADER_SIZE_DEFAULT,
  LOADER_SIZE
} from './Loader.model'

import type { LoaderSize, LoaderColor } from './Loader.model'

const props = defineProps({
  color: {
    type: String as PropType<LoaderColor>,
    default: LOADER_COLOR_DEFAULT
  },
  size: {
    type: String as PropType<LoaderSize>,
    default: LOADER_SIZE_DEFAULT
  }
})

const bgColorSecond = computed(() => {
  if (props.color === LOADER_COLOR.PRIMARY) {
    return '#373F51'
  } else {
    return '#ECECEC'
  }
})

const bgColorFirst = computed(() => {
  if (props.color === LOADER_COLOR.PRIMARY) {
    return '#ECECEC'
  } else {
    return '#373F51'
  }
})

const loaderSize = computed(() => {
  if (props.size === LOADER_SIZE.SMALL) {
    return '36px'
  } else if (props.size === LOADER_SIZE.MEDIUM) {
    return '48px'
  } else {
    return '60px'
  }
})
</script>

<style scoped>
.loader {
  display: block;
  height: v-bind(loaderSize);
  width: v-bind(loaderSize);
  margin: 15px auto;
  position: relative;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;
}
.loader::after,
.loader::before {
  content: '';
  box-sizing: border-box;
  position: absolute;
  width: calc(v-bind(loaderSize) / 2);
  height: calc(v-bind(loaderSize) / 2);
  top: 50%;
  left: 50%;
  background-color: v-bind(bgColorFirst);
  transform: scale(0.5) translate(0, 0);
  border-radius: 50%;
  animation: animloader 2s infinite ease-in-out;
}
.loader::before {
  background-color: v-bind(bgColorSecond);
  transform: scale(0.5) translate(calc(v-bind(loaderSize) * -1), calc(v-bind(loaderSize) * -1));
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes animloader {
  50% {
    transform: scale(1) translate(-50%, -50%);
  }
}
</style>
