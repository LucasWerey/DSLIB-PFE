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
        <HstInput v-model="controls.title" title="Title" />
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
      />
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

const labelOptions = ['this is for testing the scroll container']
</script>
