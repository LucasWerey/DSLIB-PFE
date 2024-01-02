<script setup lang="ts">
import './assets/index.css'
import SnackBar from './components/Indicators/SnackBar'

const isVisible = ref(true)

const consoleLog = (arg: boolean) => {
  isVisible.value = !arg
  return arg
}
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
</template>
