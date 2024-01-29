<template>
  <div class="h-60 max-h-60 w-80 max-w-80 overflow-hidden">
    <div
      v-if="isEmpty"
      class="flex h-full w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-primary-moonstone bg-primary-lightmoonstone text-primary-moonstone"
      data-test="create-demand"
      @click="emit('createDemand')"
    >
      <IconsBase name="plus" color="moonstone" size="large" />
      <h5 class="text-center uppercase">ajouter une demande</h5>
    </div>
    <div
      v-if="!isEmpty"
      class="relative flex h-full w-full flex-col items-center justify-between rounded-xl bg-basic-white p-4"
    >
      <div class="flex w-full flex-col gap-4">
        <div class="flex gap-4">
          <IconsBase name="desktop" :color="desktopColor" class="h-14 w-14" />
          <div class="flex flex-col">
            <h4 class="font-eina1 text-5 font-bold text-basic-black">{{ title }}</h4>
            <div class="flex items-start gap-1">
              <IconsBase name="mapPin" color="basic" size="small" />
              <p class="font-eina1 text-3">{{ location }}</p>
            </div>
          </div>
        </div>
        <div class="flex w-full items-center gap-3 text-basic-black">
          <div class="flex gap-2">
            <ChipContainer :label="contractType" />
            <ChipContainer :label="contractDuration" />
          </div>
        </div>
      </div>
      <div class="flex w-full flex-col gap-2">
        <div class="flex w-full items-center justify-between">
          <p class="font-eina1 text-3 text-basic-darkgrey">Matchs en cours : {{ nMatchs }}</p>
          <IconsBase name="calendar" class="cursor-pointer" size="small" color="darkgrey" />
        </div>
        <Button
          :type="'default'"
          :state="'active'"
          class="w-full uppercase"
          :styled="'fill'"
          @click="emit('seeDemand', id)"
        >
          Voir ma demande
        </Button>
      </div>
      <div
        class="absolute right-0 flex h-4 w-16 items-center justify-end rounded-l-md bg-error px-2 drop-shadow-md"
        v-if="hasNewNotifications"
      >
        <p class="text-nowrap font-eina1 text-1 text-basic-white">+ {{ notification }} match</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { OFFER_CARD_TYPE_DEFAULT, OFFER_CARD_TYPE } from '../OfferCard/OfferCard.model'
import type { OfferCardType } from '../OfferCard/OfferCard.model'
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
  contractType: {
    type: String as PropType<string>
  },
  contractDuration: {
    type: String as PropType<string>
  },
  id: {
    type: String as PropType<string>
  },
  desktopColor: {
    type: String as PropType<IconsColor>
  },
  notification: {
    type: Number as PropType<number>,
    default: 0
  },
  nMatchs: {
    type: Number as PropType<number>,
    default: 0
  }
})

const isEmpty = computed(() => props.type === OFFER_CARD_TYPE.empty)
const title = computed(() => props.title)
const location = computed(() => props.location)
const contractType = computed(() => props.contractType)
const contractDuration = computed(() => props.contractDuration)
const id = computed(() => props.id)
const desktopColor = computed(() => props.desktopColor)
const notification = computed(() => props.notification)
const hasNewNotifications = computed(() => notification.value > 0)
const nMatchs = computed(() => props.nMatchs)

const emit = defineEmits(['seeDemand', 'createDemand'])
</script>
