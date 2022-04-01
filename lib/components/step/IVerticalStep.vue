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
  }
})


</script>
<template>
<div class="i-v-step" v-bind="$attrs">
    <div class="i-v-step-deco-line" aria-hidden="true"></div>
    <div class="i-v-step-deco-circle" aria-hidden="true">
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
    <div class="pl-9">
      <div v-if="title" class="text-lg font-bold text-gray-800">{{ title }}</div>
  
      <slot />
    </div>
</div>
</template>
<style>

.i-v-step {
  @apply relative pb-4;
}

.i-v-step:last-of-type .i-v-step-deco-line {
  @apply hidden;
}

.i-v-step-deco-line {
  @apply absolute left-2.5 top-1 h-full w-0.5 -ml-px bg-gray-200 self-start;
}

.i-v-step-deco-circle {
  @apply absolute left-0 top-1 rounded-full overflow-hidden;
}
</style>