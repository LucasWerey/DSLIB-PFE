<template>
  <Story
    title="SnackBar"
    group="indicators"
    responsiveDisabled
    :layout="{
      type: 'grid',
      width: '50%'
    }"
  >
    <template #controls>
      <ControlDescription>
        <HstSelect v-model="controls.type" :options="Object.values(SNACKBAR_TYPES)" title="Type" />
      </ControlDescription>
      <ControlDescription>
        <HstSelect v-model="controls.size" :options="Object.values(SNACKBAR_SIZES)" title="Size" />
      </ControlDescription>
      <ControlDescription>
        <HstSelect
          v-model="controls.close"
          :options="Object.values(SNACKBAR_CLOSES)"
          title="Close"
        />
      </ControlDescription>
    </template>

    <Variant title="Playground" auto-props-disabled>
      <SnackBar
        :type="controls.type"
        :size="controls.size"
        :close="controls.close"
        @close="(arg) => logEvent('Close', arg)"
      >
        Lorem ipsum consectetur. Lorem ipsum consectetur.
      </SnackBar>
    </Variant>
    <Variant title="Info medium close" auto-props-disabled>
      <SnackBar type="info" size="medium" close="yes" @close="(arg) => logEvent('Close', arg)">
        Lorem ipsum consectetur. Lorem ipsum consectetur.
      </SnackBar>
    </Variant>
    <Variant title="Info small" auto-props-disabled>
      <SnackBar type="info" size="small" close="no">
        Lorem ipsum consectetur. Lorem ipsum consectetur.
      </SnackBar>
    </Variant>
    <Variant title="Validation" auto-props-disabled>
      <SnackBar type="validation" size="small" close="yes" @close="(arg) => logEvent('Close', arg)">
        Lorem ipsum consectetur. Lorem ipsum consectetur.
      </SnackBar>
    </Variant>
    <Variant title="Error" auto-props-disabled>
      <SnackBar type="error" size="small" close="no">
        Lorem ipsum consectetur. Lorem ipsum consectetur.
      </SnackBar>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import type { SnackBarType, SnackBarSize, SnackBarClose } from './SnackBar.model'

import {
  SNACKBAR_TYPES,
  SNACKBAR_SIZES,
  SNACKBAR_CLOSES,
  SNACKBAR_TYPE_DEFAULT,
  SNACKBAR_SIZE_DEFAULT,
  SNACKBAR_CLOSE_DEFAULT
} from './SnackBar.model'

import { logEvent } from 'histoire/client'

interface Props {
  type: SnackBarType
  size: SnackBarSize
  close: SnackBarClose
}

const controls = reactive<Props>({
  type: SNACKBAR_TYPE_DEFAULT,
  size: SNACKBAR_SIZE_DEFAULT,
  close: SNACKBAR_CLOSE_DEFAULT
})
</script>
