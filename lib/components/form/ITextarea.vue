<script lang="ts" setup>
import { PropType } from 'vue'
import IFromSuggest from './IFormSuggest.vue'

const emits = defineEmits<{
  (e: 'update:modelValue', v: any): void
}>()

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
  },
  modelValue: {
    type: [String, Number]
  }
})

function handleModelValueChange (e: any) {
  emits('update:modelValue', e.target.value)
}

</script>
<template>
  <div class="i-textarea" :class="['i-textarea-' + color,]">
    <div class="i-textarea-row">
      <textarea
        v-bind="$attrs"
        :id="id"
        class="i-textarea-inner"
        :disabled="disabled"
        :value="modelValue"
        @input="handleModelValueChange"
        :class="[
          'i-textarea-' + size,
          disabled ? 'i-textarea-disabled' : '',
        ]"
      />
    </div>
    <IFromSuggest :color="color">{{ suggest }}</IFromSuggest>
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
  @apply 
    w-full 
    focus:ring-0 
    text-gray-800 
    border-gray-200 
    hover:border-gray-300 
    focus:border-indigo-300 
    shadow-sm
    text-sm 
    bg-transparent 
    border rounded outline-transparent
    outline-none
    appearance-none
    leading-5
    min-h-10
    h-30;
}

.dark .i-textarea-inner {
  @apply 
    text-gray-200
    border-gray-500
    hover:border-gray-400
    focus:border-indigo-400
    ;
}

.i-textarea-inner:-webkit-autofill{
  -webkit-text-fill-color: rgb(31, 41, 55) !important;
}


.dark .i-textarea-inner:-webkit-autofill{
  -webkit-text-fill-color: rgb(229, 231, 235) !important;
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


.i-textarea-green .i-textarea-inner {
  @apply border-green-300;
}

</style>