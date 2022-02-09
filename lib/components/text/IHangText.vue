<script lang="ts" setup>
import { PropType } from 'vue-demi'
import IText from './IText.vue'

defineProps({
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg'>,
    default: 'xs'
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
  class="i-hang-text" 
  :size="size"
  :italic="italic"
  :align="align"
  v-bind="$attrs"
  >
  <slot />
</IText>
</template>
<style>

.i-hang-text {
  @apply font-semibold uppercase text-gray-400 xl:leading-8;
}

</style>