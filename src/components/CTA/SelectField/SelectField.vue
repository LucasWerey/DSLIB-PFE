<template>
  <div class="flex h-[72px] w-[200px] flex-col gap-2">
    <h1 class="font-eina1 text-2 font-bold uppercase text-basic-black">
      {{ title }}
    </h1>
    <div class="relative h-full w-full text-left outline-none">
      <div
        class="full flex h-[48px] w-full cursor-pointer select-none items-center justify-between rounded-[4px] border border-basic-grey bg-basic-white px-[16px] py-[13px] font-eina1 text-4 lowercase text-basic-darkgrey"
        :class="{ 'h-[48px] rounded-b-[0px] ': open }"
        @click="open = !open"
        @blur="open = false"
      >
        {{ selected }}
        <IconsBase
          :rotate="open ? 180 : 0"
          name="chevronDown"
          class="h-[24px] w-[24px] bg-basic-white"
          color="darkgrey"
        />
      </div>
      <div class="items absolute z-10 w-full" v-show="open">
        <div
          v-for="(option, i) of options"
          :key="i"
          @click="handleClick(option)"
          :class="[
            'flex h-[48px] w-full cursor-pointer border-b border-l border-r border-basic-grey px-[16px] py-[13px] font-eina1 text-4 lowercase text-basic-darkgrey hover:border-basic-lightgrey hover:bg-basic-lightgrey',
            { 'rounded-b-[4px]': i === (options?.length ?? 0) - 1 },
            {
              ' border-basic-lightgrey bg-basic-lightgrey font-bold  text-basic-darkgrey':
                option.value === selectedValue
            },
            {
              ' bg-basic-white': option.value != selectedValue
            }
          ]"
        >
          {{ option.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SelectFieldOption } from './SelectField.model'

const props = defineProps({
  options: {
    type: Array as PropType<SelectFieldOption[]>,
    required: true
  },
  default: { String, required: true },
  title: { String, required: true }
})

const selectedValue: Ref<string> = ref('')
const selected = computed(() => {
  if (selectedValue.value) return selectedValue.value
  if (props.default) return props.default
  if (props.options.length > 0) return props.options[0].value
  return null
})
const open = ref(false)

onMounted(() => {
  emit('update:modelValue', selected.value)
})

const handleClick = (option: SelectFieldOption) => {
  selectedValue.value = option.value
  open.value = false
  emit('update:modelValue', option.value)
}

const emit = defineEmits(['update:modelValue'])
</script>
