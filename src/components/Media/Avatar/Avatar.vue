<template>
  <div class="flex items-center justify-center" data-test="Avatar">
    <div
      class="flex items-center justify-center rounded-full overflow-hidden"
      :class="[avatarSize, bgColor]"
    >
      <img
        v-if="isPhotoType && src && alt"
        :src="src"
        :alt="alt"
        class="rounded-full object-fit"
        :class="avatarSize"
      />
      <div v-if="isInitialType" class="text-basic-white" :class="textSize"><slot /></div>
      <img
        v-if="isNotConnectedType"
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        alt="not connected avatar"
        class="rounded-full object-fit"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AvatarType, AvatarSize } from './Avatar.model'
import {
  AVATAR_TYPES,
  AVATAR_SIZES,
  AVATAR_TYPE_DEFAULT,
  AVATAR_SIZE_DEFAULT
} from './Avatar.model'

const props = defineProps({
  type: {
    type: String as PropType<AvatarType>,
    required: true,
    default: AVATAR_TYPE_DEFAULT,
    validator: (value: AvatarType): boolean => AVATAR_TYPES.includes(value)
  },
  size: {
    type: String as PropType<AvatarSize>,
    required: true,
    default: AVATAR_SIZE_DEFAULT,
    validator: (value: AvatarSize): boolean => AVATAR_SIZES.includes(value)
  },
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  }
})

const type = computed(() => props.type)

const alt = computed(() => props.alt)

const src = computed(() => props.src)

const size = computed(() => props.size)

const setSize = {
  xxsmall: 'w-4 h-4',
  xsmall: 'w-6 h-6',
  small: 'w-8 h-8',
  medium: 'h-10 w-10',
  large: 'h-16 w-16',
  xlarge: 'w-[88px] h-[88px]'
}

const avatarSize = computed(() => setSize[size.value])

const isPhotoType = computed(() => type.value === AVATAR_TYPES[0])

const isInitialType = computed(() => type.value === AVATAR_TYPES[1])

const isNotConnectedType = computed(() => type.value === AVATAR_TYPES[2])

if (isPhotoType.value) {
  if (!src.value || !alt.value || src.value === '' || alt.value === '') {
    throw new Error('Avatar type photo needs src and alt prop')
  }
}

const bgColor = computed(() =>
  isNotConnectedType.value ? 'bg-basic-grey' : 'bg-primary-moonstone'
)

const setText = {
  xxsmall: 'text-1',
  xsmall: 'text-2',
  small: 'text-3',
  medium: 'text-4',
  large: 'text-8',
  xlarge: 'text-12'
}

const textSize = computed(() => setText[size.value])
</script>
