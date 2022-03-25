<script lang="ts" setup>
import { PropType } from 'vue-demi'

const emits = defineEmits<{
  (e: 'update:modelValue', v: any): void
}>()

defineProps({
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md'
  },
  color: {
    type: String as PropType<'red' | 'green' | 'gray'>,
    default: 'gray'
  },
  id: {
    type: String
  },
  suggest: {
    type: String as PropType<string>,
  },
  modelValue: {
  }
})

function handleModelValueChange (e: any) {
  emits('update:modelValue', e.target.value)
}

</script>
<template>
<div class="i-select" :class="['i-select-' + color,]">
  <select 
    v-bind="$attrs" 
    :id="id" 
    class="i-select-inner"
    :disabled="disabled"
    :value="modelValue"
    @input="handleModelValueChange"
    :class="[
      'i-select-' + size,
      disabled ? 'i-select-disabled' : '',
      
    ]"
  >
    <slot></slot>
  </select>
  <div class="i-select-suggest">{{ suggest }}</div>
</div>
</template>
<style>

.i-select {
  @apply w-full relative;
}

.i-select-inner {
  @apply w-full 
  focus:ring-0 
  border-gray-200 
  hover:border-gray-300 
  focus:border-indigo-300 
  shadow-sm
  text-sm 
  text-gray-800 
  bg-white 
  border 
  rounded 
  outline-transparent
  outline-none
  leading-5;
}

.i-select-sm {
  @apply px-2 py-1;
}

.i-select-md {
  @apply px-3 py-2;
}

.i-select-lg {
  @apply px-4 py-3;
}

.i-select-suggest {
  @apply text-xs mt-1 h-4;
}

.i-select-red .i-select-inner {
  @apply border-red-300;
}

.i-select-red .i-select-suggest {
  @apply text-red-500;
}

.i-select-green .i-select-inner {
  @apply border-green-300;
}

.i-select-green .i-select-suggest {
  @apply text-green-500;
}

</style>