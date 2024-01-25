<template>
  <div class="h-60 max-h-60 w-80 max-w-80 overflow-hidden">
    <div
      v-if="isEmpty"
      class="flex h-full w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-primary-moonstone bg-primary-lightmoonstone text-primary-moonstone"
      data-test="create-offer"
      @click="emit('createOffer')"
    >
      <IconsBase name="plus" color="moonstone" size="large" />
      <h5 class="text-center uppercase">ajouter une offre</h5>
    </div>
    <div
      v-if="!isEmpty"
      class="flex h-full w-full flex-col items-center justify-between rounded-xl bg-basic-white p-4"
    >
      <div class="flex w-full flex-col gap-1">
        <IconsBase name="desktop" :color="desktopColor" />
        <h4 class="font-eina1 text-5 font-bold text-basic-black">{{ title }}</h4>
        <div class="flex w-full items-center gap-3 text-basic-black">
          <p>{{ location }}</p>
          <div class="flex gap-2">
            <ChipContainer :label="contractType" />
            <ChipContainer :label="contractDuration" />
          </div>
        </div>
      </div>
      <div class="flex w-full flex-col gap-2">
        <div class="flex w-full items-center justify-between">
          <div class="relative flex -space-x-5">
            <Avatar
              v-for="(name, i) in studentNames.slice(0, studentNames.length)"
              :key="i"
              data-test="avatar"
              :type="'photo'"
              :size="'small'"
              :src="`https://api.dicebear.com/7.x/micah/svg?seed=${name}&radius=50&mouth=pucker,smile,smirk,laughing&backgroundColor=b6e3f4,ffd5dc,d1d4f9,c0aede,ffdfbf`"
              alt="'avatar'"
              class="z-10 rounded-full border-2 border-basic-white"
            />
          </div>
          <p class="font-eina1 text-3 font-semibold text-basic-black">
            {{ nCandidates ?? 0 }} {{ (nCandidates ?? 0) > 1 ? 'candidats' : 'candidat' }}
          </p>
        </div>
        <Button
          :type="'default'"
          :state="'active'"
          class="w-full uppercase"
          :styled="'fill'"
          @click="emit('seeOffer', id)"
        >
          Consulter l’espace de l’offre
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { OFFER_CARD_TYPE_DEFAULT, OFFER_CARD_TYPE } from './OfferCard.model'
import type { OfferCardType } from './OfferCard.model'
import type { IconsColor } from '../../Media/IconsBase/IconsBase.model'
const props = defineProps({
  type: {
    type: String as PropType<OfferCardType>,
    required: true,
    default: OFFER_CARD_TYPE_DEFAULT,
    validator: (value: OfferCardType) => {
      return Object.values(OFFER_CARD_TYPE).includes(value)
    }
  },
  title: {
    type: String as PropType<string>
  },
  location: {
    type: String as PropType<string>
  },
  nCandidates: {
    type: Number as PropType<number>,
    validator: (value: number) => {
      return value >= 0
    }
  },
  contractType: {
    type: String as PropType<string>
  },
  contractDuration: {
    type: String as PropType<string>
  },
  id: {
    type: String as PropType<string>
  },
  studentNames: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  desktopColor: {
    type: String as PropType<IconsColor>
  }
})

const isEmpty = computed(() => props.type === OFFER_CARD_TYPE.empty)
const title = computed(() => props.title)
const location = computed(() => props.location)
const nCandidates = computed(() => props.nCandidates)
const contractType = computed(() => props.contractType)
const contractDuration = computed(() => props.contractDuration)
const id = computed(() => props.id)
const studentNames = computed(() => props.studentNames)
const desktopColor = computed(() => props.desktopColor)

const emit = defineEmits(['seeOffer', 'createOffer'])
</script>
