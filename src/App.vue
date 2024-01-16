<script setup lang="ts">
import './assets/index.css'

const handleUpdate = (value: string) => {
  console.log(value)
}
</script>

<template>
  <SelectField
    title="Date"
    :options="[
      { value: 'Mois', label: 'Mois' },
      { value: 'Années', label: 'Années' },
      { value: 'Semaines', label: 'Semaines' },
      { value: 'Jours', label: 'Jours' }
    ]"
    :default="'go'"
    @update:modelValue="handleUpdate"
  />
</template>
