<script lang="ts">
import { PropType, defineComponent } from 'vue-demi'

export default defineComponent({
  props: {
    size: {
      type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'>,
      default: 'md'
    },
    border: {
      type: Boolean,
    },
    notice: {
      type: Boolean,
    },
    src: {
      type: String
    },
    name: {
      type: String
    }
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
  <span class="i-avatar-name">{{ name }}</span>
  <img v-if="src" class="i-avatar-img" :src="src" alt="avatar" />
  <span v-if="notice" class="i-avatar-notice" />
</div>
</template>
<style>

.i-avatar {
  @apply relative box-border;
  width: 1em;
  height: 1em;
}

.i-avatar-bordered {
  @apply border-2 border-white rounded-full;
}

.i-avatar-name {
  @apply absolute left-0 top-0 w-full h-full z-0 flex items-center justify-center 
  bg-gray-100 rounded-full font-semibold uppercase text-gray-500;
  font-size: 0.25em;
}

.i-avatar-img {
  @apply absolute rounded-full left-0 top-0 w-full h-full z-10;
}

.i-avatar-notice {
  @apply absolute bg-red-500 border-2 border-white rounded-full;
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
  @apply w-3 h-3 top-1 right-1;
}

.i-avatar-xxl { 
  font-size: 80px; 
}

.i-avatar-xxl .i-avatar-notice {
  @apply w-3 h-3 top-1 right-1;
}


</style>