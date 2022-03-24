<script lang="ts" setup>
import { PropType } from 'vue-demi'
defineProps({
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg'>,
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
    'i-text-' + size,
    'i-text-' + align,
  ]"
  >
  <slot />
</div>
</template>
<style>

.i-text {
  @apply inline-block;
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

</style>