<script setup lang="ts">
import './assets/index.css'
import SnackBar from './components/Indicators/SnackBar'
import Avatar from './components/Media/Avatar'
import InputField from './components/CTA/InputField'

const isVisible = ref(true)

const consoleLog = (arg: boolean) => {
  isVisible.value = !arg
  return arg
}

const parentModel = ref('')
const parentModel2 = ref('')
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

  <InputField
    v-model="parentModel"
    placeholder="Email Address"
    label="Email"
    hint="Please enter without mistakes"

  />

  <InputField
    v-model="parentModel2"
    placeholder="Email Address"
    label="Email"
    hint="Please enter without mistakes"
    size="big"
  />
</template>
