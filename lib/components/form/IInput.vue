<script lang="ts" setup>


import { PropType } from 'vue-demi'
const emits = defineEmits<{
  (e: 'update:modelValue', v: any): void
}>()
const props = defineProps({
  suggest: {
    type: String as PropType<string>,
  },
  prefix: {
    type: String as PropType<string>,
  },
  suffix: {
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
  type: {
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
  <div class="i-input" :class="['i-input-' + color,]">
    <div class="i-input-row">
      <span v-if="prefix" class="i-input-fix i-input-prefix">
        <span class="i-input-fix-text">{{ prefix }}</span>
      </span>
      <input
        v-bind="$attrs"
        :id="id"
        :type="type"
        class="i-input-inner"
        :disabled="disabled"
        :value="modelValue"
        @input="handleModelValueChange"
        :class="[
          suffix ? 'i-input-inner-suf' : '',
          prefix ? 'i-input-inner-pre' : '',
          
          'i-input-' + size,
          disabled ? 'i-input-disabled' : '',
          
        ]"
      />
      <div v-if="suffix" class="i-input-fix i-input-suffix">
        <span class="i-input-fix-text">{{ suffix }}</span>
      </div>
    </div>
    <div class="i-input-suggest">{{ suggest }}</div>
  </div>
</template>
<style>
.i-input {
  @apply w-full relative;
}

.i-input-row {
  @apply flex relative;
}
.i-input-inner {
  @apply w-full 
  focus:ring-0 
  border-gray-200 
  hover:border-gray-300 
  focus:border-indigo-300 
  shadow-sm
  text-sm 
  text-gray-800 
  bg-white 
  border rounded outline-transparent
  outline-none
  leading-5;
}



.i-input-fix {
  @apply absolute inset-0 flex items-center pointer-events-none;
}

.i-input-suffix {
  @apply left-auto;
}

.i-input-prefix {
  @apply right-auto;
}

.i-input-fix-text {
  @apply text-sm text-gray-400 font-medium px-3;
}

.i-input-suggest {
  @apply text-xs mt-1 h-4;
}

.i-input-sm {
  @apply px-2 py-1;
}

.i-input-md {
  @apply px-3 py-2;
}

.i-input-lg {
  @apply px-4 py-3;
}

/** suf pre 之后需要动态计算 */
.i-input-sm.i-input-inner-suf {
  @apply pr-12;
}

.i-input-sm.i-input-inner-pre {
  @apply pl-12;
}

.i-input-md.i-input-inner-suf {
  @apply pr-13;
}

.i-input-md.i-input-inner-pre {
  @apply pl-13;
}

.i-input-lg.i-input-inner-suf {
  @apply pr-14;
}

.i-input-lg.i-input-inner-pre {
  @apply pl-14;
}

.i-input-disabled {
  @apply border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed;
}

.i-input-red .i-input-inner {
  @apply border-red-300;
}

.i-input-red .i-input-suggest {
  @apply text-red-500;
}

.i-input-green .i-input-inner {
  @apply border-green-300;
}

.i-input-green .i-input-suggest {
  @apply text-green-500;
}
</style>