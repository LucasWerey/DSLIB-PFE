<template>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.4 14.9C20.2 16.4 21 17 21 17H3C3 17 6 15 6 8C6 4.7 8.7 2 12 2C12.7 2 13.3 2.1 13.9 2.3"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.2998 21C10.4672 21.3044 10.7133 21.5583 11.0123 21.7352C11.3113 21.912 11.6524 22.0053 11.9998 22.0053C12.3472 22.0053 12.6883 21.912 12.9873 21.7352C13.2864 21.5583 13.5324 21.3044 13.6998 21"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8C15 9.65685 16.3431 11 18 11Z"
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
