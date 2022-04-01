<script lang="ts" setup name="i-form-suggest">
import { PropType } from 'vue'
import { IText } from '../text'
const props = defineProps({
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg'>,
    default: 'xs'
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  color: {
    type: String as PropType<'red' | 'green' | 'gray'>,
    default: 'gray'
  },
})

</script>

<template>
<div 
  :class="[
    'i-form-suggest-' + size,
    disabled ? 'i-form-suggest-disabled' : ''
  ]"
  class="i-form-suggest"
>
  <IText :color="color" :size="size">
    <slot></slot>
  </IText>
</div>
</template>
<style>
.i-form-suggest {
  @apply pt-0.5 h-5;
}

.i-form-suggest-disabled {
  @apply text-gray-500;
}

</style>