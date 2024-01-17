<template>
  <div class="flex min-h-32 w-full flex-col rounded-3xl shadow sm:w-[432px]">
    <div
      class="flex h-32 w-full items-center justify-between gap-2 rounded-3xl bg-basic-white p-6 sm:gap-4"
      :class="{ 'rounded-b-[0px]': isOpen }"
    >
      <Avatar type="photo" size="large" :src="image" alt="Certif Photo" />
      <div class="font-eina1 text-2 font-bold text-basic-black sm:text-4">
        {{ title }}
      </div>
      <div class="h-6 w-6 cursor-pointer" @click="handleClick">
        <IconsBase name="chevronDown" color="darkgrey" :rotate="isOpen ? 180 : 0" />
      </div>
    </div>
    <div v-show="isOpen" class="flex w-full flex-col gap-4 rounded-b-3xl bg-basic-white p-6 pt-0">
      <div class="flex flex-col gap-1">
        <div class="font-eina1 text-2 font-normal text-basic-black sm:text-4">
          {{ description }}
        </div>
        <div class="font-eina1 text-2 font-normal italic text-basic-darkgrey sm:text-4">
          Date de délivrance : {{ date }}
        </div>
        <div class="font-eina1 text-2 font-normal italic text-basic-darkgrey sm:text-4">
          Identifiant de la certification : {{ idCertif }}
        </div>
      </div>
      <div class="flex w-full items-center gap-2">
        <ChipContainer v-for="(label, index) in labels.slice(0, 4)" :key="index" :label="label" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CERTIF_CONTAINER_STATE_DEFAULT, CERTIF_CONTAINER_STATE } from './CertifContainer.model'
import type { CertifContainerState } from './CertifContainer.model'

const props = defineProps({
  state: {
    type: String as PropType<CertifContainerState>,
    default: CERTIF_CONTAINER_STATE_DEFAULT,
    validator: (value: CertifContainerState) => {
      return Object.values(CERTIF_CONTAINER_STATE).includes(value)
    }
  },
  image: {
    type: String as PropType<string>,
    default:
      'https://images.pexels.com/photos/14983436/pexels-photo-14983436/free-photo-of-church-roof-with-a-cross-on-top.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  title: {
    type: String as PropType<string>,
    default: 'Title'
  },
  description: {
    type: String as PropType<string>,
    default: 'Description'
  },
  date: {
    type: String as PropType<string>,
    default: 'Date'
  },
  idCertif: {
    type: String as PropType<string>,
    default: 'IdCertif'
  },
  labels: {
    type: Array as PropType<string[]>,
    default: () => [],
    validator: (labels: string[]) => labels.length <= 4
  }
})

const state = computed(() => props.state)
const image = computed(() => props.image)
const title = computed(() => props.title)
const description = computed(() => props.description)
const date = computed(() => props.date)
const idCertif = computed(() => props.idCertif)
const labels = computed(() => props.labels)

const isOpenBydefault = computed(() => {
  return state.value === CERTIF_CONTAINER_STATE.opened
})

const isOpen = ref(isOpenBydefault.value)

const handleClick = () => {
  isOpen.value = !isOpen.value
  emit('update:state', isOpen.value ? CERTIF_CONTAINER_STATE.opened : CERTIF_CONTAINER_STATE.closed)
}

const emit = defineEmits(['update:state'])
</script>
