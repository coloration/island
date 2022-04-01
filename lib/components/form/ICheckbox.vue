<script lang="ts" setup name="i-checkbox">
import { PropType, ref, watchEffect } from 'vue'
import { isBoolean, isDefind, isString } from '@coloration/kit'
const emits = defineEmits<{
  (e: 'update:modelValue', v: any): void
}>()

const props = defineProps({
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  modelValue: {
    type: [String, Boolean, Number, Array]
  },
  value: {
    type: [String, Boolean, Number]
  },
  checked: {
    type: [Boolean],
    default: undefined
  }
})


const _check = ref(props.checked || false)

watchEffect(() => {
  const mv: any = props.modelValue
  let checkStatus = false

  if (isBoolean(props.checked)) {
    checkStatus = props.checked as boolean

  }
  else if (isDefind(mv)) {
    if (isBoolean(mv)) {
      checkStatus = mv
    }
    else if (mv === props.value || mv?.findIndex?.((v: any) => v === props.value) >= 0) {
      checkStatus = true
    }
  }

  if (_check.value !== checkStatus) _check.value = checkStatus
})


function handleModelValueChange (e: any) {
  const modelValue: any = props.modelValue

  if (isString(modelValue)) {

    const value = modelValue === e.target.value ? '' : e.target.value
    emits('update:modelValue', value)
  }
  else if (isBoolean(modelValue)) {
    emits('update:modelValue', e.target.checked)
  }
  else if (modelValue.findIndex) {
    const newValue = modelValue.slice()
    const idx = newValue?.findIndex((v: any) => v === e.target.value)
    if (idx < 0) {
      newValue.push(e.target.value)
      
    }
    else {
      newValue.splice(idx, 1)
    }

    emits('update:modelValue', newValue)
  }
}
</script>
<template>
<div 
  class="i-checkbox"
  :class="[disabled ? 'i-checkbox-disabled' : '']"
>
  <label class="i-checkbox-label">
    <input 
      @change="handleModelValueChange"
      class="i-checkbox-inner" 
      type="checkbox" 
      :value="value"
      :checked="_check"
      :disabled="disabled" 
      v-bind="$attrs" />
    <span class="i-checkbox-text">
      <slot></slot>
    </span>
  </label>
</div>
</template>
<style>

.i-checkbox {
  @apply select-none inline-block;
}

.i-checkbox-disabled .i-checkbox-text {
  @apply text-gray-400 cursor-not-allowed;
}

.dark .i-checkbox-disabled .i-checkbox-text {
  @apply text-gray-500;
}

.dark .i-checkbox-text {
  @apply text-gray-200;
}

.i-checkbox-text {
  @apply text-gray-800 text-sm mx-2;
}

.i-checkbox-label {
  @apply flex items-center;
}

.i-checkbox-inner {
  
  @apply 
    focus:ring-0 
    text-sm 
    text-gray-800 
    bg-white 
    rounded  
    appearance-none
  text-indigo-500 
    border 
    border-gray-300 
    outline-none 
    outline-transparent
    disabled:text-gray-400
    disabled:cursor-not-allowed;
}

.dark .i-checkbox-inner {
  @apply disabled:text-gray-500 bg-opacity-20 disabled:bg-opacity-50;
}


</style>