<script lang="ts" setup name="i-select">
import { PropType } from 'vue'
import IFromSuggest from './IFormSuggest.vue'

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
  <IFromSuggest :color="color">{{ suggest }}</IFromSuggest>
</div>
</template>
<style>

.i-select {
  @apply w-full relative;
}

.i-select-inner {
  @apply w-full 
  appearance-none
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
  bg-transparent 
  outline-transparent
  outline-none
  leading-5;
}

.dark .i-select-inner {
  @apply 
    bg-gray-800
    text-gray-200
    border-gray-500
    hover:border-gray-400
    focus:border-indigo-400;
}

.i-select-xs {
  @apply px-1 py-0.5;
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

.i-select-disabled {
  @apply border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed;
}

.dark .i-select-disabled {
  @apply bg-gray-700 border-gray-500 hover:border-gray-500;
}

.i-select-red .i-select-inner {
  @apply 
  border-red-300 
  hover:broder-red-500;
}

.dark .i-select-red .i-select-inner {
  @apply 
  border-red-500 
  hover:border-red-400;
}

.i-select-green .i-select-inner {
  @apply 
    border-green-300
    hover:border-green-500;
}

.dark .i-select-green .i-select-inner {
  @apply 
    border-green-500
    hover:border-green-400;
}
</style>