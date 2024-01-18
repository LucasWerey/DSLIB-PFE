<template>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 3L19 12L5 21V3Z"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    default: '#000000'
  }
})
</script>
