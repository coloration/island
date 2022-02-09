<script lang="ts" setup>
import { PropType } from 'vue-demi'
defineProps({
  type: {
    type: String as PropType<'light' | 'dark'>,
    default: 'light'
  },
  size: {
    type: String as PropType<'md' | 'lg'>,
    default: 'md'
  },
  color: {
    type: String,
    default: 'gray'
  }
})


</script>
<template>
<div 
  class="i-prue-badge" 
  :class="[
    color ? 'i-prue-badge-' + color : ''
  ]">
  <span><slot></slot></span>
</div>
</template>
<style>

.i-prue-badge {
  @apply inline-flex text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full;
}


.i-prue-badge-green {
  @apply bg-green-500;
}

.i-prue-badge-indigo {
  @apply bg-indigo-500;
}

.i-prue-badge-yellow {
  @apply bg-yellow-500;
}

.i-prue-badge-red {
  @apply bg-red-500;
}

.i-prue-badge-blue {
  @apply bg-blue-500;
}

.i-prue-badge-gray {
  @apply bg-gray-500;
}






</style>