<script lang="ts" setup>
import { PropType } from 'vue-demi'
import IText from './IText.vue'

defineProps({
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg'>,
    default: 'md'
  },
  bold: {
    type: Boolean,
    default: false
  },
  italic: {
    type: Boolean,
    default: false
  },
  align: {
    type: String as PropType<'left' | 'center' | 'right'>,
  },
})


</script>
<template>
<IText 
  class="i-paragraph-text" 
  :size="size"
  v-bind="$attrs"
  :italic="italic"
  :align="align"
  :class="bold ? 'i-paragraph-text-bold' : ''"
  >
  <slot />
</IText>
</template>
<style>

.i-paragraph-text {
  @apply text-gray-700;
}

.i-paragraph-text-bold {
  @apply text-gray-800 font-medium;
}

</style>