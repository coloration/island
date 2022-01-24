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
    default: false
  },
  align: {
    type: String as PropType<'left' | 'center' | 'right'>,
  },
})


</script>
<template>
<IText 
  class="i-button-text" 
  :size="size"
  :italic="italic"
  :align="align"
  v-bind="$attrs"
  >
  <slot />
</IText>
</template>
<style>

.i-button-text {
  @apply font-medium text-indigo-500 hover:text-indigo-600 cursor-pointer;
}

</style>