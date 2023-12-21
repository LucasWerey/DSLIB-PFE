<script setup lang="ts">
import './assets/index.css'

const name = ref<'home' | 'test'>('home')
</script>

<template>
  <IconsBase :name="name" color="error" />
  <button @click="name = 'test'">Change icon</button>
</template>
