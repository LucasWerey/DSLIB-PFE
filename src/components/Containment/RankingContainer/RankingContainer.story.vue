<template>
  <Story
    title="Ranking Container"
    group="containment"
    :layout="{
      type: 'grid',
      width: '80%'
    }"
  >
    <template #controls>
      <ControlDescription>
        <HstText v-model="controls.title" title="Title" />
      </ControlDescription>
      <ControlDescription>
        <HstSelect v-model="controls.labels" :options="labelOptions" title="Labels" multiple />
      </ControlDescription>
      <ControlDescription>
        <HstCheckbox v-model="controls.topRank" title="Top Rank" />
      </ControlDescription>
      <ControlDescription>
        <HstCheckbox v-model="controls.draggable" title="Draggable" />
      </ControlDescription>
    </template>

    <Variant title="Playground" auto-props-disabled>
      <RankingContainer
        :title="controls.title"
        :labels="controls.labels"
        :topRank="controls.topRank"
        :draggable="controls.draggable"
        :is-draggable="controls.draggable"
      />
    </Variant>
    <Variant title="MultipleContainers" auto-props-disabled>
      <div class="space-y-4">
        <RankingContainer
          v-for="(container, index) in controls2.values()"
          :key="index"
          :title="container.title"
          :labels="container.labels"
          :topRank="container.topRank"
          draggable="true"
          isDraggable
          @dragstart="(event: DragEvent) => handleDragStart(event, index)"
          @dragover="handleDragOver"
          @drop="(event: DragEvent) => handleDrop(event, index)"
        />
      </div>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
interface Controls {
  title: string
  labels: string[]
  topRank: boolean
  draggable: boolean
}

const controls = reactive<Controls>({
  title: 'Ranking Container',
  labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
  topRank: false,
  draggable: false
})

const controls2 = ref([
  { title: 'Container 1', labels: ['Label 1'], topRank: false, draggable: true },
  { title: 'Container 2', labels: ['Label 2'], topRank: false, draggable: true },
  { title: 'Container 3', labels: ['Label 3'], topRank: false, draggable: true }
])

const labelOptions = ['this is for testing the scroll container']

let draggedItem: Ref<number | null> = ref(null)

const handleDragStart = async (event: any, index: number) => {
  event.stopPropagation()
  await new Promise(resolve => setTimeout(resolve, 0))
  draggedItem.value = index
  console.log(`Drag started from position: ${index}`)
}

const handleDragOver = (event: any) => {
  event.preventDefault()
  event.stopPropagation()
}

const handleDrop = (event: any, index: number) => {
  event.stopPropagation()
  if (draggedItem.value !== null) {
    const controlsCopy = [...controls2.value]
    const draggedContainer = controlsCopy[draggedItem.value]
    controlsCopy.splice(draggedItem.value, 1)
    controlsCopy.splice(index, 0, draggedContainer)
    controlsCopy[0].topRank = index === 0
    for (let i = 1; i < controlsCopy.length; i++) {
      controlsCopy[i].topRank = false
    }
    controls2.value = controlsCopy
    console.log(`Dropped at position: ${index}`)
    console.log(
      'New order of items:',
      controls2.value.map((item, index) => `Position ${index}: ${item.title}`)
    )
  }
}
</script>
