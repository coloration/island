<script lang="ts" setup>
import { PropType } from 'vue-demi'
defineProps({
  type: {
    type: String as PropType<'primary' | 'normal' | 'ghost'>,
    default: 'primary'
  },
  id: {
    type: String
  }
})


</script>
<template>
<div class="i-select">
  <select v-bind="$attrs" :id="id" class="i-select-inner">
    <slot></slot>
  </select>
</div>
</template>
<style>

.i-select {
  @apply ;
}

.i-select-inner {
  @apply w-full  py-2 px-3 focus:ring-0 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm
  text-sm text-gray-800 bg-white border rounded outline-transparent
    leading-5 ;
}

</style>