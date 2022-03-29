<script lang="ts" setup>
import { PropType } from 'vue-demi'
defineProps({
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'>,
    default: 'md'
  },
  align: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'left'
  },
  italic: {
    type: Boolean,
    default: false
  },
  truncate: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
  uppercase: {
    type: Boolean,
    default: false
  },
  color: {
    type: String as PropType<'gray' | 'green' | 'indigo' | 'yellow' | 'red' | 'blue'>,
    default: 'gray'
  }
})


</script>
<template>
<div 
  class="i-text" 
  v-bind="$attrs"
  :class="[
    italic ? 'i-text-italic' : '',
    truncate ? 'i-text-truncate' : '',
    block ? 'i-text-block' : '',
    uppercase ? 'i-text-uppercase' : '',
    'i-text-' + size,
    'i-text-' + align,
    'i-text-' + color,
  ]"
  >
  <slot />
</div>
</template>
<style>

.i-text {
  @apply inline-block text-gray-900;
}

.dark .i-text {
  @apply text-gray-100;
}

.i-text.i-text-block {
  @apply block;
}

.i-text-italic {
  @apply italic;
}
.i-text-center {
  @apply text-center;
}
.i-text-right {
  @apply text-right;
}

.i-text-truncate {
  @apply truncate;
}

.i-text-uppercase {
  @apply uppercase;
}

.i-text-xs {
  @apply text-xs;
}
.i-text-md {
  @apply text-base;
}
.i-text-sm {
  @apply text-sm;
}
.i-text-lg {
  @apply text-lg;
}
.i-text-xl {
  @apply text-xl;
}
.i-text-xxl {
  @apply text-2xl;
}

.i-text-green {
  @apply text-green-600;
}

.i-text-indigo {
  @apply text-indigo-600;
}

.i-text-light-blue {
  @apply text-light-blue-600;
}

.i-text-yellow {
  @apply text-yellow-600;
}

.i-text-red {
  @apply text-red-600;
}

.i-text-blue {
  @apply text-blue-600;
}


</style>