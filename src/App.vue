<script setup lang="ts">
import './assets/index.css'

import RankingContainer from './components/Containment/RankingContainer'
</script>

<template>
  <div class="flex h-[100vh] w-[100vw] flex-col gap-5 bg-basic-lightgrey p-2">
    <RankingContainer title="Mots clés" :labels="['Yo', 'Suuuu']" />
    <RankingContainer
      title="Transports utilisés"
      :labels="[
        'Yo',
        'Suuuu',
        'Yo',
        'Yo',
        'Yo',
        'Yo',
        'Yo',
        'Yo',
        'Yo',
        'Yo',
        'Yo',
        'Yo',
        'Yo',
        'Yo',
        'Yo',
        'Yo',
        'Yo',
        'Yo',
        'Yo',
        'Yo',
        'Yo',
        'Yo',
        'Yo',
        'Yo',
        'Yo',
        'Yo',
        'Yo',
        'Yo'
      ]"
      top-rank
      draggable
    />
  </div>
</template>
