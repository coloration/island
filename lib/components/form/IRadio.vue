<script lang="ts" setup name="i-radio">
import { isBoolean, isDefind, isNumber, isString } from '@coloration/kit'
import { PropType, ref, watchEffect } from 'vue'

const emits = defineEmits<{
  (e: 'update:modelValue', v: any): void
}>()

const props = defineProps({
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  modelValue: {
    type: [String, Boolean, Number],
    default: undefined
  },
  value: {
    type: [String, Boolean, Number],
    default: undefined,
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
    checkStatus = mv === props.value
  }


  if (_check.value !== checkStatus) _check.value = checkStatus
})


function handleModelValueChange (e: any) {
  const mv: any = props.modelValue
  let selfValue: any = e.target?.value

  if (isString(mv)) {
    if (mv !== selfValue) {
      emits('update:modelValue', selfValue)
    }
  }
  else if (isNumber(mv)) {
    selfValue = Number(selfValue)
    if (mv !== selfValue) {
      emits('update:modelValue', selfValue)
    }
  }
  else if (isBoolean(mv)) {
    
    try {
      selfValue = JSON.parse(selfValue)
    }
    catch {
      // 
    }
    if (isBoolean(selfValue) && mv !== selfValue) {
      emits('update:modelValue', selfValue)
    }
 
  }
}


</script>
<template>
<div 
  class="i-radio"
  :class="[disabled ? 'i-radio-disabled' : '']"
>
  <label class="i-radio-label">
    <input 
      class="i-radio-inner" 
      type="radio" 
      @change="handleModelValueChange"
      :disabled="disabled" 
      :checked="_check"
      :value="value"
      v-bind="$attrs" />
    <span class="i-radio-text">
      <slot></slot>
    </span>
  </label>
</div>
</template>
<style>

.i-radio {
  @apply inline-block;
}

.i-radio-disabled .i-radio-text {
  @apply text-gray-400 cursor-not-allowed;
}

.dark .i-radio-disabled .i-radio-text {
  @apply text-gray-500;
}

.dark .i-radio-text {
  @apply text-gray-200;
}

.i-radio-text {
  @apply text-sm mx-2 text-gray-800;
}

.i-radio-label {
  @apply flex items-center;
}

.i-radio-inner {
  @apply 
    focus:ring-0 
    text-sm 
    text-gray-800
    appearance-none 
    bg-white 
    outline-none 
    outline-transparent
  text-indigo-500 
  border 
  border-gray-300 
  disabled:text-gray-400 
  disabled:cursor-not-allowed;
}

.dark .i-radio-inner {
  @apply disabled:text-gray-500 bg-opacity-20 disabled:bg-opacity-50;
}



</style>