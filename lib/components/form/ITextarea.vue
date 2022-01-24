<script lang="ts" setup>


import { PropType } from 'vue-demi'

const props = defineProps({
  suggest: {
    type: String as PropType<string>,
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md'
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  color: {
    type: String as PropType<'red' | 'green' | 'gray'>,
    default: 'gray'
  },
  id: {
    type: String
  }
})


</script>
<template>
  <div class="i-textarea" :class="['i-textarea-' + color,]">
    <div class="i-textarea-row">
      <textarea
        v-bind="$attrs"
        :id="id"
        class="i-textarea-inner"
        :disabled="disabled"
        :class="[
          'i-textarea-' + size,
          disabled ? 'i-textarea-disabled' : '',
        ]"
      />
    </div>
    <div class="i-textarea-suggest">{{ suggest }}</div>
  </div>
</template>
<style>
.i-textarea {
  @apply w-full relative;
}

.i-textarea-row {
  @apply flex relative;
}
.i-textarea-inner {
  @apply focus:ring-0 w-full text-sm text-gray-800 bg-white border rounded 
  leading-5 border-gray-200 
  hover:border-gray-300 focus:border-indigo-300 shadow-sm
  placeholder-gray-400 outline-transparent;
}

.i-textarea-suggest {
  @apply text-xs mt-1 h-4;
}

.i-textarea-sm {
  @apply px-2 py-1;
}

.i-textarea-md {
  @apply py-2 px-3;
}

.i-textarea-lg {
  @apply px-4 py-3;
}

.i-textarea-disabled {
  @apply border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed;
}

.i-textarea-red .i-textarea-inner {
  @apply border-red-300;
}

.i-textarea-red .i-textarea-suggest {
  @apply text-red-500;
}

.i-textarea-green .i-textarea-inner {
  @apply border-green-300;
}

.i-textarea-green .i-textarea-suggest {
  @apply text-green-500;
}
</style>