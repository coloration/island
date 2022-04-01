<script lang="ts" name="i-step" setup>
import { PropType } from 'vue'
defineProps({
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal'
  },
  checked: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  step: {
    type: [Number, String]
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md'
  },
  alignEnd: {
    type: Boolean as PropType<boolean>,
    default: false
  }
})


</script>
<template>
<div 
  class="i-step" 
  :class="[
    'i-step-' + direction,
    'i-step-' + size,
    alignEnd ? 'i-step-align-end' : '',
  ]"
  v-bind="$attrs">
  <div class="i-step-line" ariaidden="true"></div>
  <div class="i-step-circle">
    <div v-if="checked">
      <div v-if="step" class="i-step-circle-check">{{step}}</div>
      <svg v-else class="i-step-check-icon" viewBox="0 0 20 20">
        <path  d="M14.4 8.4L13 7l-4 4-2-2-1.4 1.4L9 13.8z" />
      </svg>
    </div>
    <div v-else class="i-step-circle-uncheck">
      <span>{{step}}</span>
    </div>
  </div>
  <div class="i-step-content">
    <slot />
  </div>
</div>

</template>

<style>
.i-step {
  @apply relative flex-1;
}

.i-step-align-end.i-step {
  @apply flex-none;
}
.i-step-align-end.i-step-horizontal {
  @apply  w-5;
}
.i-step-align-end.i-step-vertical {
  @apply  h-6;
}

.i-step:last-of-type .i-step-line {
  @apply hidden;
}


.i-step-line {
  @apply absolute bg-gray-200;
}

.dark .i-step-line {
  @apply bg-gray-600;
}

.i-step-horizontal .i-step-line {
  @apply left-0 top-2.5 w-full h-0.5 -mt-px;
}

.i-step-vertical .i-step-line {
  @apply left-2.5 top-1 h-full w-0.5 -ml-px self-start;
}

.i-step-circle {
  @apply absolute rounded-full overflow-hidden cursor-default;
}

.i-step-vertical .i-step-circle {
  @apply left-0 top-1;
}

.i-step-horizontal .i-step-circle {
  @apply left-0 top-0;
}


.i-step-circle-uncheck {
  @apply 
    w-5 
    h-5 
    bg-white 
    text-gray-400 
    border-2 
    border-gray-400 
    rounded-full 
    overflow-hidden  
    flex 
    justify-center 
    items-center 
    text-xs 
    font-semibold;
}

.dark .i-step-circle-uncheck {
  @apply bg-gray-600 border-gray-400 text-gray-200;
}

.i-step-circle-check {
  @apply 
    w-5 
    h-5 
    fill-current 
    text-white 
    bg-indigo-500 
    flex 
    justify-center 
    items-center 
    text-xs font-semibold;
}

.i-step-check-icon {
  @apply w-5 h-5 fill-current text-white bg-indigo-500;
}


.i-step-horizontal .i-step-content {
  @apply pt-9 pl-2;
}

.i-step-vertical .i-step-content {
  @apply pl-9;
}


</style>