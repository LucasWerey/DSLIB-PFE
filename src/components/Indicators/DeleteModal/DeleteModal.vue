<template>
  <div
    class="flex min-h-44 w-[300px] flex-col items-center gap-8 overflow-hidden rounded-3xl bg-basic-white p-6 shadow sm:w-[400px]"
  >
    <div class="flex w-full flex-col items-center gap-4">
      <div class="text-center font-inter text-8">{{ title }}</div>
      <div v-show="description" class="text-center font-eina1 text-3 font-normal">
        {{ description }}
      </div>
    </div>
    <div class="flex w-full flex-row gap-3 text-3">
      <Button
        class="overflow-hidden"
        type="default"
        state="active"
        styled="outlined"
        style="border-color: #d1d1d1; color: #000000"
        @click="emit('FirstButtonClicked')"
      >
        {{ labelFirstButton }}
      </Button>
      <Button
        class="overflow-hidden"
        type="default"
        state="active"
        styled="fill"
        style="border-color: #ff5656; background-color: #ff5656"
        @click="emit('SecondButtonClicked')"
      >
        {{ labelSecondButton }}
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String as PropType<string>,
    default: 'Title'
  },
  description: {
    type: String as PropType<string>
  },
  labelFirstButton: {
    type: String as PropType<string>,
    default: 'LabelButton'
  },
  labelSecondButton: {
    type: String as PropType<string>,
    default: 'LabelButton'
  }
})

const title = computed(() => props.title)
const description = computed(() => props.description)
const labelFirstButton = computed(() => props.labelFirstButton)
const labelSecondButton = computed(() => props.labelSecondButton)

const emit = defineEmits(['FirstButtonClicked', 'SecondButtonClicked'])
</script>
