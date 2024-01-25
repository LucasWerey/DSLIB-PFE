<script setup lang="ts">
import './assets/index.css'
const names = ['Lucas', 'Baptiste', 'Rose', 'Marine']
</script>

<template>
  <div class="flex h-[100vh] w-[100vw] flex-col gap-5 bg-basic-lightgrey p-2">
    <OfferCard type="empty" />
    <OfferCard
      type="fill"
      contractDuration="2 mois"
      contractType="stage"
      title="Dév web"
      location="Paris"
      :nCandidates="38"
      :studentNames="names"
      desktopColor="warning"
    />
  </div>
</template>
