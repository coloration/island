<script lang="ts" setup>
import { PropType } from 'vue-demi'
defineProps({
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
    default: 'md'
  },
  border: {
    type: [String, Boolean],
    default: false
  },
  notice: {
    type: [String, Boolean],
  },
  src: {
    type: String
  },
  name: {
    type: String
  }
})


</script>
<template>
<div 
  class="i-avatar" 
  :class="[
    'i-avatar-' + size,
  ]"
  v-bind="$attrs">
  <span class="i-avatar-name">{{ name }}</span>
  <img v-if="src" class="i-avatar-img" :src="src" alt="avatar" />
  <span v-if="notice" class="i-avatar-notice" />
</div>
</template>
<style>

.i-avatar {
  @apply relative;
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
  @apply absolute w-3 h-3 bg-red-500 border-2 border-white rounded-full;
}

.i-avatar-xs { 
  width: 24px; height: 24px; font-size: 24px; } 
.i-avatar-sm { 
  width: 28px; height: 28px; font-size: 28px; } 
.i-avatar-md { 
  width: 32px; height: 32px; font-size: 32px; } 
.i-avatar-lg { 
  width: 40px; height: 40px; font-size: 40px; } 
.i-avatar-xl { 
  width: 64px; height: 64px; font-size: 64px; }

</style>