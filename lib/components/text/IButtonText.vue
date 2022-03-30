<script lang="ts" setup>
import { PropType, ExtractPropTypes } from 'vue'
import IText from './IText.vue'
import { ITextProps } from './type'

const props: Readonly<ExtractPropTypes<ITextProps & { hoverUndeline: boolean }>> = defineProps({
  color: {
    type: String as PropType<'gray' | 'green' | 'indigo' | 'yellow' | 'red' | 'blue'>,
    default: 'indigo'
  },
  hoverUndeline: {
    type: Boolean,
    default: false
  }
})


</script>
<template>
<IText 
  class="i-button-text" 
  :class="[
    props.hoverUndeline ? 'i-button-text-hover-underline' : ''
  ]"
  :color="color"
  v-bind="$attrs"
  >
  <slot />
</IText>
</template>
<style>

.i-button-text {
  @apply font-medium cursor-pointer;
}

.i-button-text-hover-underline:hover {
  @apply underline;
}

</style>