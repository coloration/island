<script lang="ts" setup name="i-avatar">
import { PropType } from 'vue'

const props = defineProps({
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'>,
    default: 'md'
  },
  border: {
    type: Boolean as PropType<boolean>,
    default:false,
  },
  notice: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  src: {
    type: String as PropType<string>
  },
  name: {
    type: String as PropType<string>
  }
})
</script>
<template>
<div 
  class="i-avatar" 
  :class="[
    'i-avatar-' + size,
    border ? 'i-avatar-bordered' : ''
  ]"
  v-bind="$attrs">
    <img v-if="src" class="i-avatar-img" :src="src" :alt="name" />
    <span class="i-avatar-name">
      <slot>{{ name }}</slot>
    </span>
  
  <span v-if="notice" class="i-avatar-notice" />
</div>
</template>
<style>

.i-avatar {
  @apply relative cursor-default inline-block flex items-center justify-center;
  width: 1em;
  height: 1em;
}

.i-avatar-bordered {
  @apply border-2 border-gray-400 rounded-full;
}

.dark .i-avatar-bordered {
  @apply border-gray-300;
}

.i-avatar-name {
  @apply absolute left-0 top-0 w-full h-full z-0 flex items-center justify-center 
  bg-gray-100 rounded-full font-semibold uppercase text-gray-500;
  font-size: 0.25em;
}

.dark .i-avatar-name {
  @apply bg-gray-500 text-gray-200;
}

.i-avatar-img {
  @apply absolute rounded-full left-0 top-0 w-full h-full z-10;
}

.i-avatar-notice {
  @apply absolute bg-red-500 border-2 border-white rounded-full z-20;
}

.dark .i-avatar-notice {
  @apply border-gray-300;
}

.i-avatar-xs { 
  font-size: 24px; 
} 

.i-avatar-xs .i-avatar-notice {
  @apply w-2 h-2 top-0 right-0;
}

.i-avatar-sm { 
  font-size: 28px; 
} 

.i-avatar-sm .i-avatar-notice {
  @apply w-2.5 h-2.5 top-0 right-0;
}

.i-avatar-md { 
 font-size: 32px; 
} 

.i-avatar-md .i-avatar-notice {
  @apply w-2.5 h-2.5 top-0 right-0;
}

.i-avatar-lg { 
  font-size: 40px; 
} 

.i-avatar-lg .i-avatar-notice {
  @apply w-3 h-3 top-0 right-0;
}

.i-avatar-xl { 
  font-size: 64px; 
}

.i-avatar-xl .i-avatar-notice {
  @apply w-4 h-4 top-0 right-0;
}

.i-avatar-xxl { 
  font-size: 80px; 
}

.i-avatar-xxl .i-avatar-notice {
  @apply w-5 h-5 top-0 right-0;
}


</style>