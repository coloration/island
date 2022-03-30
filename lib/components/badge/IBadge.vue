<script lang="ts" setup>
import { PropType } from 'vue'
import { ICloseIcon } from '../icon'

const emit = defineEmits<{
  (e: 'close'): void
}>()

const props = defineProps({
  type: {
    type: String as PropType<'light' | 'dark'>,
  },
  size: {
    type: String as PropType<'md' | 'lg'>,
    default: 'md'
  },
  color: {
    type: String as PropType<'gray' | 'green' | 'indigo' | 'light-blue' | 'yellow' | 'red' | 'blue'>,
    default: 'gray',
  },
  closable: {
    type: Boolean,
    default: false,
  }
})

function handleClose () {
  emit('close')
}

</script>
<template>
<div 
  v-bind="$attrs"
  class="i-badge" 
  :class="[
    'i-badge-' + size,
    type ? 'i-badge-' + type : '',
    color ? 'i-badge-' + color : '',
  ]">
  <slot></slot>
  <span v-if="closable" class="i-badge-closable" @click="handleClose">
    <ICloseIcon />
  </span>
</div>
</template>
<style>

.i-badge {
  @apply inline-flex font-medium rounded-full text-center items-center
  ;
}

.i-badge-closable {
  @apply cursor-pointer ml-1;
}



.i-badge-md {
  @apply text-xs px-2.5 py-1;
}

.i-badge-lg {
  @apply text-sm px-2.5 py-1;
}

.i-badge-dark.i-badge-green,
.dark .i-badge-green {
  @apply text-green-100 bg-green-600;
}
.i-badge-dark.i-badge-indigo,
.dark .i-badge-indigo {
  @apply text-indigo-100 bg-indigo-600;
}
.i-badge-dark.i-badge-light-blue,
.dark .i-badge-light-blue {
  @apply text-light-blue-100 bg-light-blue-600;
}
.i-badge-dark.i-badge-yellow,
.dark .i-badge-yellow {
  @apply text-yellow-100 bg-yellow-600;
}
.i-badge-dark.i-badge-red,
.dark .i-badge-red {
  @apply text-red-100 bg-red-600;
}
.i-badge-dark.i-badge-blue,
.dark .i-badge-blue {
  @apply text-blue-100 bg-blue-600;
}

.i-badge-dark.i-badge-gray,
.dark .i-badge-gary {
  @apply bg-gray-700 text-gray-100;
}

.i-badge-green,
.i-badge-light.i-badge-green {
  @apply bg-green-100 text-green-600;
}

.i-badge-indigo,
.i-badge-light.i-badge-indigo {
  @apply bg-indigo-100 text-indigo-600;
}

.i-badge-light-blue,
.i-badge-light.i-badge-light-blue {
  @apply bg-light-blue-100 text-light-blue-600;
}

.i-badge-yellow,
.i-badge-light.i-badge-yellow {
  @apply bg-yellow-100 text-yellow-600;
}

.i-badge-red,
.i-badge-light.i-badge-red {
  @apply bg-red-100 text-red-600;
}

.i-badge-blue,
.i-badge-light.i-badge-blue {
  @apply bg-blue-100 text-blue-600;
}

.i-badge-gray,
.i-badge-light.i-badge-gray {
  @apply bg-gray-100 text-gray-500;
}



</style>