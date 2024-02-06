<script setup lang="ts">
import './assets/index.css'
const names = ['Lucasezaezazaeezaeazeza', 'Baptiste', 'Rose', 'Marine']
</script>

<template>
  <div class="flex h-[100vh] w-[100vw] flex-col gap-5 bg-basic-lightgrey p-2">
    <RankingContainer title="test" :labels="names" />
  </div>
</template>
