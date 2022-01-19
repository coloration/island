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
  }
})


</script>
<template>
<div 
  class="i-badge" 
  :class="[
    'i-badge-' + size,
    'i-badge-' + type,
    color ? 'i-badge-' + color : ''
  ]">
  <slot></slot>
</div>
</template>
<style>

.i-badge {
  @apply inline-flex font-medium rounded-full text-center;
}

.i-badge-md {
  @apply text-xs px-2.5 py-1;
}

.i-badge-lg {
  @apply text-sm px-2.5 py-1;
}

.i-badge-light.i-badge-green {
  @apply bg-green-100 text-green-600;
}

.i-badge-light.i-badge-indigo {
  @apply bg-indigo-100 text-indigo-600;
}

.i-badge-light.i-badge-light-blue {
  @apply bg-light-blue-100 text-light-blue-600;
}

.i-badge-light.i-badge-yellow {
  @apply bg-yellow-100 text-yellow-600;
}

.i-badge-light.i-badge-red {
  @apply bg-red-100 text-red-600;
}

.i-badge-light.i-badge-blue {
  @apply bg-blue-100 text-blue-600;
}

.i-badge-light {
  @apply bg-gray-100 text-gray-500;
}

.i-badge-dark {
  @apply bg-gray-700 text-gray-100;
}


.i-badge-dark.i-badge-green {
  @apply bg-green-100 text-green-600;
}

.i-badge-dark.i-badge-indigo {
  @apply bg-indigo-100 text-indigo-600;
}

.i-badge-dark.i-badge-light-blue {
  @apply bg-light-blue-100 text-light-blue-600;
}

.i-badge-dark.i-badge-yellow {
  @apply bg-yellow-100 text-yellow-600;
}

.i-badge-dark.i-badge-red {
  @apply bg-red-100 text-red-600;
}

.i-badge-dark.i-badge-blue {
  @apply bg-blue-100 text-blue-600;
}





</style>