<template>
  <Story
    title="Offer Card"
    group="containment"
    :layout="{
      type: 'grid',
      width: '50%'
    }"
  >
    <template #controls>
      <ControlDescription>
        <HstSelect v-model="controls.type" :options="Object.values(OFFER_CARD_TYPE)" title="Type" />
      </ControlDescription>
      <ControlDescription>
        <HstText v-model="controls.title" title="Title" />
      </ControlDescription>
      <ControlDescription>
        <HstText v-model="controls.location" title="Location" />
      </ControlDescription>
      <ControlDescription>
        <HstNumber v-model="controls.nCandidates" title="Number of candidates" />
      </ControlDescription>
      <ControlDescription>
        <HstText v-model="controls.contractType" title="Contract type" />
      </ControlDescription>
      <ControlDescription>
        <HstText v-model="controls.contractDuration" title="Contract duration" />
      </ControlDescription>
      <ControlDescription>
        <HstText v-model="controls.id" title="Id" />
      </ControlDescription>
      <ControlDescription>
        <HstText v-model="controls.studentNames" title="Student names" />
      </ControlDescription>
      <ControlDescription>
        <HstNumber v-model="controls.notification" title="Number of notif" />
      </ControlDescription>
      <ControlDescription>
        <HstSelect
          v-model="controls.desktopColor"
          :options="Object.keys(colorsPalette)"
          title="Desktop color"
        />
      </ControlDescription>
    </template>

    <Variant title="playground" auto-props-disabled>
      <OfferCard
        :type="controls.type"
        :title="controls.title"
        :location="controls.location"
        :n-candidates="controls.nCandidates"
        :contract-type="controls.contractType"
        :contract-duration="controls.contractDuration"
        :id="controls.id"
        :student-names="controls.studentNames"
        :desktop-color="controls.desktopColor"
        :notification="controls.notification"
        @seeOffer="() => {}"
        @createOffer="() => {}"
      />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { OFFER_CARD_TYPE_DEFAULT, OFFER_CARD_TYPE } from './OfferCard.model'
import { colorsPalette } from '../../../tailwind/presetConfig'
import type { OfferCardType } from './OfferCard.model'
import type { IconsColor } from '../../Media/IconsBase/IconsBase.model'

interface Controls {
  type: OfferCardType
  title: string
  location: string
  nCandidates: number
  contractType: string
  contractDuration: string
  id: string
  studentNames: string[]
  desktopColor: IconsColor
  notification: number
}

const controls = reactive<Controls>({
  type: OFFER_CARD_TYPE_DEFAULT,
  title: 'default',
  location: 'default',
  nCandidates: 0,
  contractType: 'default',
  contractDuration: 'default',
  id: '2323232',
  studentNames: ['Pierre', 'Paul', 'Jacques', 'Thiery'],
  desktopColor: 'warning',
  notification: 0
})
</script>
