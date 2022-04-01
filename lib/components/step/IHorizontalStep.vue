<script lang="ts" setup>
import { PropType } from 'vue'
defineProps({
  title: {
    type: String,
  },
  checked: {
    type: Boolean,
    default: false
  },
  step: {
    type: [Number, String]
  },
  size: {
    type: String as PropType<string>,
    default: 'md'
  }
})


</script>
<template>
<div class="i-h-step" v-bind="$attrs">
    <div class="i-h-step-deco-line" aria-hidden="true"></div>
    <div class="i-h-step-deco-circle" aria-hidden="true">
      <div v-if="checked">
        <div v-if="step" class="w-5 h-5 fill-current text-white bg-indigo-500 flex justify-center items-center text-xs font-semibold">{{step}}</div>
        <svg v-else class="w-5 h-5 fill-current text-white bg-indigo-500" viewBox="0 0 20 20">
          <path  d="M14.4 8.4L13 7l-4 4-2-2-1.4 1.4L9 13.8z" />
        </svg>
      </div>
      <div v-else class="w-5 h-5 bg-white text-gray-400 border-2 border-gray-400 rounded-full overflow-hidden  flex justify-center items-center text-xs font-semibold">
        <span>{{step}}</span>
      </div>
    </div>
    
</div>
</template>
<style>

.i-h-step {
  @apply relative inline-block h-5 select-none;
}

.i-h-step:last-of-type {
  @apply w-5;
}

.i-h-step:not(:last-of-type) {
  @apply flex-1;
}

.i-h-step:last-of-type .i-h-step-deco-line {
  @apply hidden;
}

.i-h-step-deco-line {
  @apply absolute left-0 top-2.5 w-full h-0.5 -mt-px bg-gray-200;
}

.i-h-step-deco-circle {
  @apply absolute left-0 top-0 rounded-full overflow-hidden;
}
</style>