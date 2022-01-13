<script lang="ts" setup>


import { ref, PropType } from 'vue-demi'
const props = defineProps({
  type: {
    type: String as PropType<'primary' | 'normal | danger | success'>,
    default: 'primary'
  },
  size: {
    type: String as PropType<'lg' | 'xs' | 'sm' | 'md'>,
    default: 'md'
  },
  block: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  glost: {
    type: Boolean as PropType<boolean>,
    default: false
  }
})


</script>
<template>
<button 
  type="button" 
  :data-type="props.type" 
  class="l-btn"
  :class="[
    'l-btn-' + props.size,
    'l-btn-' + props.type,
    props.block && 'l-btn-block',
    props.glost && 'l-btn-glost'
  ]"
>
  <slot></slot>
</button>
</template>
<style>
.l-btn {
  @apply px-3 py-2;
  @apply 
  font-medium text-sm inline-flex items-center justify-center border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out;
}

.l-btn.l-btn-block {
  @apply block;
}

.l-btn-md {
  
}

.l-btn.l-btn-lg {
  @apply px-4 py-3;
}

.l-btn.l-btn-sm {
  @apply px-2 py-1;
}

.l-btn.l-btn-xs {
  @apply px-2 py-0.5;
}

.l-btn.l-btn-normal {
  @apply border-gray-200 hover:border-gray-300 text-gray-600;
}

.l-btn.l-btn-primary {
  @apply bg-indigo-500 hover:bg-indigo-600 text-white;
}

.l-btn.l-btn-primary.l-btn-glost {
  @apply border-gray-200 hover:border-gray-300 text-indigo-500;
}

.l-btn.l-btn-danger {
  @apply bg-red-500 hover:bg-red-600 text-white;
}

.l-btn.l-btn-danger.l-btn-glost {
  @apply border-gray-200 hover:border-gray-300 text-red-500;
}

.l-btn.l-btn-success {
  @apply bg-green-500 hover:bg-green-600 text-white;
}

.l-btn.l-btn-success.l-btn-glost {
  @apply border-gray-200 hover:border-gray-300 text-green-500;
}

.l-btn.l-btn-glost {
  @apply bg-transparent;
}
</style>