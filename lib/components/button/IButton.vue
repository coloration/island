<script lang="ts" name="i-button">
import { PropType, defineComponent } from 'vue-demi'

export default defineComponent({
  props: {
    type: {
      type: String as PropType<'primary' | 'normal' | 'ghost'>,
      default: 'normal'
    },
    size: {
      type: String as PropType<'lg' | 'xs' | 'sm' | 'md'>,
      default: 'md'
    },
    block: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    loading: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    color: {
      type: String as PropType<'gray' | 'indigo' | 'red' | 'green'>,
      default: 'indigo'
    },
  }
})
</script>
<template>
<button 
  v-bind="$attrs"
  :data-type="type" 
  class="i-btn"
  :disabled="disabled"
  :class="[
    'i-btn-' + size,
    'i-btn-' + type,
    'i-btn-' + color,
    block ? 'i-btn-block' : '',
    disabled ? 'i-btn-disabled' : '',
    loading ? 'i-btn-loading' : '',
  ]"
>
  <span class="i-btn-content">
    <svg v-if="loading" class="w-4 h-4 fill-current animate-spin mr-1" viewBox="0 0 16 16">
      <path d="M8 16a7.928 7.928 0 01-3.428-.77l.857-1.807A6.006 6.006 0 0014 8c0-3.309-2.691-6-6-6a6.006 6.006 0 00-5.422 8.572l-1.806.859A7.929 7.929 0 010 8c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
    </svg>
    <slot></slot>
  </span>
</button>
</template>
<style>

.i-btn {
  @apply 
    font-medium text-sm appearance-none
    rounded transition duration-150 ease-in-out shadow-sm
    border border-transparent;
}

.i-btn-content svg {
  @apply inline-block align-text-bottom;
}

.i-btn-primary {
  @apply bg-current;
}

.i-btn-primary .i-btn-content {
  @apply text-white;
}

.dark .i-btn-primary .i-btn-content {
  @apply text-gray-800;
}

.i-btn-normal {
  @apply border-gray-200 hover:border-gray-300;
}

.dark .i-btn-normal {
  @apply border-gray-400 hover:border-gray-300;
}

.i-btn-normal .i-btn-content {
  
}

.i-btn-ghost {
  @apply border-current;
}

.i-btn-ghost .i-btn-content {
}

.i-btn-loading, .i-btn-loading:hover,
.i-btn-disabled, .i-btn-disabled:hover {
  @apply border-gray-200 bg-gray-100  cursor-not-allowed shadow-none;
}

.i-btn-loading .i-btn-content, 
.i-btn-loading:hover .i-btn-content,
.i-btn-disabled .i-btn-content, 
.i-btn-disabled:hover .i-btn-content {
  @apply text-gray-400;
}


.dark .i-btn-loading, 
.dark .i-btn-loading:hover,
.dark .i-btn-disabled, 
.dark .i-btn-disabled:hover {
  @apply border-gray-200 bg-gray-700;
}

.dark .i-btn-loading .i-btn-content, 
.dark .i-btn-loading:hover .i-btn-content,
.dark .i-btn-disabled .i-btn-content, 
.dark .i-btn-disabled:hover .i-btn-content {
  @apply text-gray-400;
}



.i-btn-red {
  @apply text-red-500 hover:text-red-600; 
}

.dark .i-btn-red {
  @apply text-red-700 hover:text-red-600; 
}

.i-btn-indigo {
  @apply text-indigo-500 hover:text-indigo-600;
}

.dark .i-btn-indigo {
  @apply text-indigo-500 hover:text-indigo-400;
}


.i-btn-green {
  @apply text-green-500 hover:text-green-600;
}

.dark .i-btn-green {
  @apply text-green-600 hover:text-green-500;
}

.i-btn-gray {
  @apply text-gray-600 hover:text-gray-700;
}

.dark .i-btn-gray {
  @apply text-gray-400 hover:text-gray-300;
}



.i-btn-block {
  @apply block w-full;
}

.i-btn-md {
  @apply px-3 py-2;
}

.i-btn.i-btn-lg {
  @apply px-4 py-3;
}

.i-btn.i-btn-sm {
  @apply px-2 py-1;
}

.i-btn.i-btn-xs {
  @apply px-2 py-0.5;
}

</style>