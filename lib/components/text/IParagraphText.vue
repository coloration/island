<script lang="ts" setup>
import { computed, ExtractPropTypes, PropType } from 'vue'
import { textPropsDefaults, ITextProps } from './type'
import IText from './IText.vue'

const props: Readonly<ExtractPropTypes<ITextProps & { clamp: number, top: number, bottom: number }>> = defineProps({
  block: {
    type: Boolean,
    default: true
  },
  clamp: {
    type: Number,
    default: 0
  },
  top: {
    type: Number,
    default: 0
  },
  bottom: {
    type: Number,
    default: 0
  }

})


const style = computed(() => {
  const sty: any = {}
  if (props.clamp) {
    sty.WebkitLineClamp = props.clamp
    sty.LineClamp = props.clamp
  }

  props.bottom && (sty.paddingBottom = props.bottom + 'rem')
  props.top && (sty.paddingTop = props.top + 'rem')

  return sty
})


</script>
<template>
<IText 
  v-bind="$attrs" 
  :block="block"
  class="i-paragraph-text" 
  :style="style"
>
  <slot />
</IText>
</template>
<style>

.i-paragraph-text {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  box-orient: vertical;
  -webkit-line-clamp: 0;
  line-clamp: 0;
}


</style>