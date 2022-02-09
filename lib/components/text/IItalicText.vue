<script lang="ts" setup>
import { PropType } from 'vue-demi'
import IText from './IText.vue'

defineProps({
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg'>,
    default: 'sm'
  },
  italic: {
    type: Boolean,
    default: true
  },
  align: {
    type: String as PropType<'left' | 'center' | 'right'>,
  },
})


</script>
<template>
<IText 
  class="i-italic-text" 
  :size="size"
  :italic="italic"
  :align="align"
  v-bind="$attrs"
  >
  <slot />
</IText>
</template>
<style>

.i-italic-text {
  @apply text-gray-500;
}

</style>