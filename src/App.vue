<script setup lang="ts">
import './assets/index.css'
import ToggleButton from './components/CTA/ToggleButton'

const name = ref<'home' | 'test'>('home')
</script>

<template>
  <div class="w-10">
    <ToggleButton state="inactive" />
  </div>
</template>
