<script setup lang="ts">
import './assets/index.css'

const name = ref<'home' | 'test'>('home')
</script>

<template>
  <div class="w-10">
    <CheckBox :color="'error'" :size="'medium'" :form="'rounded'" :state="'unchecked'" />
  </div>
</template>
