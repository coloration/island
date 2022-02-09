<script lang="ts" setup>
import { PropType, computed, ref, watch, onMounted } from 'vue-demi'
import { isBoolean } from '@coloration/kit'

const emits = defineEmits({
  'update:modelValue': (val: boolean) => isBoolean(val)
})

const props = defineProps({
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  label: {
    type: [Boolean, Array] as PropType<boolean | string[]>,
    default: true,
  },
  labelOrder: {
    type: Number as PropType<number>,
    default: 0
  },
  modelValue: {
    type: Boolean,
  }
})

const checked = ref(props.modelValue)
const labels = computed(() => 
  Array.isArray(props.label) 
    ? props.label 
    : !!props.label 
      ? ['Off', 'On']
      : ['', '']
)

function handleChange (_: Event) {
  if (props.disabled) return
  emits('update:modelValue', !checked.value)
  checked.value = !checked.value
}


</script>
<template>
<div 
  class="i-switch"
  :class="[
    disabled ? 'i-switch-disabled' : '',
    checked ? 'i-switch-checked' : ''
  ]"

  @click="handleChange"
>
  <label class="i-switch-wrapper" :style="{ order: labelOrder }">
    <span 
      class="i-switch-rounded" 
      aria-hidden="true"></span>
    <span class="sr-only">Toggle</span>
  </label>
  <div v-if="labels[checked ? 1 : 0]" class="i-switch-label">{{labels[checked ? 1 : 0]}}</div>
</div>
</template>
<style>

.i-switch {
  @apply select-none flex items-center gap-2;
}

.i-switch-wrapper {
  @apply relative bg-gray-400 block border border-transparent box-border overflow-hidden cursor-pointer h-6 w-11 rounded-full;
}

.i-switch-rounded {
  @apply bg-white shadow-sm absolute block rounded-full w-5 h-5 transition-transform transform-gpu translate-x-0;
  top: 0.0625rem;
  left: 0.0625rem;
}

.i-switch-inner {
  @apply invisible absolute;
  z-index: -1;
}

.i-switch-checked .i-switch-wrapper {
  @apply bg-indigo-500;
}

.i-switch-checked .i-switch-rounded {
  transform: translateX(1.25rem);
}

.i-switch-disabled .i-switch-wrapper {
  @apply cursor-not-allowed bg-gray-100 border-gray-200;
}

.i-switch-disabled .i-switch-rounded {
  @apply bg-gray-400;
}

.i-switch-label {
  @apply text-sm text-gray-400 italic;
}

</style>