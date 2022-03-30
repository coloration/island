<script lang="ts" setup name="i-banner">
import { PropType } from 'vue'
import { ICloseIcon } from '../icon'

const emit = defineEmits<{
  (e: 'close'): void
}>()

const props = defineProps({
  type: {
    type: String as PropType<'light' | 'dark'>,
  },
  // size: {
  //   type: String as PropType<'md' | 'lg'>,
  //   default: 'md'
  // },
  color: {
    type: String as PropType<'gray' | 'green' | 'indigo' | 'light-blue' | 'yellow' | 'red' | 'blue'>,
    default: 'gray',
  },
  icon: {
    type: String as PropType<'warning' | 'error' | 'success' | 'info'>

  },

  truncate: {
    type: Boolean as PropType<boolean>,
    default: false
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
  class="i-banner" 
  :class="[
    // 'i-banner-' + size,
    type ? 'i-banner-' + type : '',
    color ? 'i-banner-' + color : '',
    truncate ? 'i-banner-truncate'  : '',
  ]">
  <div class="i-banner-inner">
    <div class="flex w-full justify-between items-start flex-nowrap gap-3">
      <slot name="icon">
        <div class="mt-[3px]" v-if="icon">
          <svg v-if="icon === 'warning'" class="w-4 h-4 shrink-0 fill-current opacity-80" viewBox="0 0 16 16">
            <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z" />
          </svg>
          <svg v-else-if="icon === 'error'" class="w-4 h-4 shrink-0 fill-current opacity-80" viewBox="0 0 16 16">
            <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z" />            
          </svg>
          <svg v-else-if="icon === 'success'" class="w-4 h-4 shrink-0 fill-current opacity-80" viewBox="0 0 16 16">
            <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z" />
          </svg>
          <svg v-else-if="icon === 'info'" class="w-4 h-4 shrink-0 fill-current opacity-80" viewBox="0 0 16 16">
              <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
          </svg>
        </div>
      </slot>
      <div class="i-banner-content">
        <slot />
      </div>
      <button v-if="closable" class="i-banner-closable" @click="handleClose">
        <div class="sr-only">Close</div>
        <ICloseIcon />
      </button>
    </div>
  </div>
</div>
</template>
<style>
.i-banner {
  @apply block;
}

.i-banner-inner {
  @apply px-4 py-2 text-sm border;
}

.i-banner-closable {
  @apply opacity-70 hover:opacity-80 ml-3 mt-[3px];
}

.i-banner-content {
  @apply flex-1;
}

.i-banner-truncate .i-banner-content {
  @apply truncate;
}

.i-banner-dark.i-banner-green,
.dark .i-banner-green {
  @apply text-green-100 bg-green-600;
}
.i-banner-dark.i-banner-indigo,
.dark .i-banner-indigo {
  @apply text-indigo-100 bg-indigo-600;
}
.i-banner-dark.i-banner-light-blue,
.dark .i-banner-light-blue {
  @apply text-light-blue-100 bg-light-blue-600;
}
.i-banner-dark.i-banner-yellow,
.dark .i-banner-yellow {
  @apply text-yellow-100 bg-yellow-600;
}
.i-banner-dark.i-banner-red,
.dark .i-banner-red {
  @apply text-red-100 bg-red-600;
}
.i-banner-dark.i-banner-blue,
.dark .i-banner-blue {
  @apply text-blue-100 bg-blue-600;
}

.i-banner-dark.i-banner-gray,
.dark .i-banner-gray {
  @apply bg-gray-700 text-gray-100;
}

.i-banner-green,
.i-banner-light.i-banner-green {
  @apply bg-green-100 text-green-600;
}

.i-banner-indigo,
.i-banner-light.i-banner-indigo {
  @apply bg-indigo-100 text-indigo-600;
}

.i-banner-light-blue,
.i-banner-light.i-banner-light-blue {
  @apply bg-light-blue-100 text-light-blue-600;
}

.i-banner-yellow,
.i-banner-light.i-banner-yellow {
  @apply bg-yellow-100 text-yellow-600;
}

.i-banner-red,
.i-banner-light.i-banner-red {
  @apply bg-red-100 text-red-600;
}

.i-banner-blue,
.i-banner-light.i-banner-blue {
  @apply bg-blue-100 text-blue-600;
}

.i-banner-gray,
.i-banner-light.i-banner-gray {
  @apply bg-gray-100 text-gray-500;
}

</style>