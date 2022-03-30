<script lang="ts" setup>
import { PropType, ExtractPropTypes } from 'vue'
import IText from './IText.vue'
import { ITextProps } from './type'

const props: Readonly<ExtractPropTypes<ITextProps>> = defineProps({
  uppercase: {
    type: Boolean,
    default: true
  },
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'>,
    default: 'xs'
  }
})



</script>
<template>
<IText 
  class="i-hang-text" 
  v-bind="$attrs"
  :size="size"
  :uppercase="uppercase"
  >
  <slot />
</IText>
</template>
<style>

.i-hang-text {
  @apply font-semibold text-gray-400 xl:leading-8;
}

.dark .i-hang-text {
  @apply text-gray-500;
}

</style>