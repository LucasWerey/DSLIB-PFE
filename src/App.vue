<script setup lang="ts">
import './assets/index.css'
import CertifContainer from './components/Containment/CertifContainer'
import DeleteModal from './components/Indicators/DeleteModal'

const handleUpdate = (value: string) => {
  console.log(value)
}
</script>

<template>
  <div class="h-[100vh] w-[100vw] bg-basic-lightgrey p-2">
    <DeleteModal
      description="Lorem ipsum dolor sit amet consectetur. Quis aliquet eget id quis lectus pellentesque. Porttitor."
      title="Voulez-vous vraiment supprimer cet élément ?"
      labelFirstButton="Annuler"
      labelSecondButton="Oui, Supprimer"
    />
  </div>
</template>
