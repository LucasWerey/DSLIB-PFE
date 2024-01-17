<script setup lang="ts">
import './assets/index.css'
import CertifContainer from './components/Containment/CertifContainer'

const handleUpdate = (value: string) => {
  console.log(value)
}
</script>

<template>
  <div class="h-[100vh] w-[100vw] bg-basic-lightgrey p-2">
    <CertifContainer
      :labels="['Bonjour', 'Yo']"
      title="Certification en Développement de Logiciels Embarqués"
      description="Institut de Certification en Technologies de l'Information (ICTI)"
      date="Juillet 2023"
      idCertif="ICTI-DEV-EMB-2023"
      image="https://images.pexels.com/photos/14983436/pexels-photo-14983436/free-photo-of-church-roof-with-a-cross-on-top.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    />
  </div>
</template>
