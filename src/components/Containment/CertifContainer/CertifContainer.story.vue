<template>
  <Story
    title="Certification Container"
    group="containment"
    :layout="{
      type: 'grid',
      width: '80%'
    }"
  >
    <template #controls>
      <ControlDescription>
        <HstSelect
          v-model="controls.state"
          :options="Object.values(CERTIF_CONTAINER_STATE)"
          title="State"
        />
      </ControlDescription>
      <ControlDescription>
        <HstText v-model="controls.image" title="Image" />
      </ControlDescription>
      <ControlDescription>
        <HstText v-model="controls.title" title="Title" />
      </ControlDescription>
      <ControlDescription>
        <HstText v-model="controls.description" title="Description" />
      </ControlDescription>
      <ControlDescription>
        <HstText v-model="controls.date" title="Date" />
      </ControlDescription>
      <ControlDescription>
        <HstText v-model="controls.idCertif" title="IdCertif" />
      </ControlDescription>
    </template>

    <Variant title="Playground" auto-props-disabled>
      <div class="h-[50vh]">
        <CertifContainer
          :state="controls.state"
          :image="controls.image"
          :title="controls.title"
          :description="controls.description"
          :date="controls.date"
          :idCertif="controls.idCertif"
          :labels="controls.labels"
        />
      </div>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { CERTIF_CONTAINER_STATE_DEFAULT, CERTIF_CONTAINER_STATE } from './CertifContainer.model'
import type { CertifContainerState } from './CertifContainer.model'

interface Controls {
  state: CertifContainerState
  image: string
  title: string
  description: string
  date: string
  idCertif: string
  labels: string[]
}

const controls = reactive<Controls>({
  state: CERTIF_CONTAINER_STATE_DEFAULT,
  image:
    'https://images.pexels.com/photos/14983436/pexels-photo-14983436/free-photo-of-church-roof-with-a-cross-on-top.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  title: 'Title',
  description: 'Description',
  date: 'Date',
  idCertif: 'IdCertif',
  labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4']
})
</script>
