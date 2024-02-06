<template>
  <div class="h-10 w-full overflow-hidden">
    <div
      class="flex h-full w-full shrink-0 flex-row items-center gap-3 rounded-[4px] border border-basic-grey bg-basic-white"
      :class="topRankClassBorder"
      data-test="container"
      @dragstart="$emit('dragstart', $event)"
      @dragover="$emit('dragover', $event)"
      @drop="$emit('drop', $event)"
    >
      <div
        class="flex h-full w-fit select-none items-center justify-center border-r border-basic-grey px-3 align-middle text-basic-grey"
        :class="[topRankClassBorder, draggableClass]"
        data-test="draggableIcon"
      >
        <p class="rotate-90" :class="topRankClassSeparator">|||</p>
      </div>
      <div class="flex h-full w-fit w-full min-w-0 flex-row items-center gap-1 sm:gap-5">
        <div
          class="flex items-center font-eina1 text-4 font-semibold text-basic-black sm:whitespace-nowrap"
          data-test="title"
        >
          {{ title }}
        </div>
        <div class="flex items-center text-4" :class="topRankClassSeparator">|</div>
        <div
          class="scrollbar-hide flex w-full cursor-grab select-none flex-row items-center gap-2 overflow-x-scroll pr-2"
          @mousedown="handleMouseDown"
          @mousemove="handleMouseMove"
          @mouseup="handleMouseUp"
          @mouseleave="handleMouseUp"
          ref="scrollContainer"
          data-test="scrollContainer"
        >
          <ChipContainer v-for="label in labels" :label="label" :key="label" data-test="label" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String as PropType<string>,
    default: '',
    required: true
  },
  labels: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  topRank: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  isDraggable: {
    type: Boolean as PropType<boolean>,
    default: false
  }
})

const title = computed(() => props.title)
const labels = computed(() => props.labels)
const topRank = computed(() => props.topRank)
const draggable = computed(() => props.isDraggable)

let isDragging = false
let startX: number, scrollLeft: number

const scrollContainer: Ref<HTMLElement | null> = ref(null)

const topRankClassBorder = computed(() =>
  topRank.value ? 'border-primary-moonstone' : 'border-basic-grey'
)

const topRankClassSeparator = computed(() =>
  topRank.value ? 'text-primary-moonstone' : 'text-basic-grey'
)

const draggableClass = computed(() => (draggable.value ? 'cursor-move' : 'cursor-default'))

const handleMouseDown = (e: MouseEvent) => {
  isDragging = true
  startX = e.pageX - (scrollContainer.value?.offsetLeft || 0)
  scrollLeft = scrollContainer.value?.scrollLeft || 0
}

const handleMouseMove = (e: MouseEvent) => {
  if (!isDragging) return
  e.preventDefault()
  const x = e.pageX - (scrollContainer.value?.offsetLeft || 0)
  const walk = (x - startX) * 1.2
  if (scrollContainer.value) {
    scrollContainer.value.scrollLeft = scrollLeft - walk
  }
}

const handleMouseUp = () => {
  isDragging = false
}
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
