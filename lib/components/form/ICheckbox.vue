<script lang="ts" setup>
import { PropType } from 'vue-demi'
defineProps({
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },
})


</script>
<template>
<div 
  class="i-checkbox"
  :class="[disabled ? 'i-checkbox-disabled' : '']"
>
  <label class="i-checkbox-label">
    <input class="i-checkbox-inner" type="checkbox" :disabled="disabled" v-bind="$attrs" />
    <span class="i-checkbox-text">
      <slot></slot>
    </span>
  </label>
</div>
</template>
<style>

.i-checkbox {
  @apply ;
}

.i-checkbox-disabled .i-checkbox-text {
  @apply text-gray-400;
}

.i-checkbox-label {
  @apply flex items-center;
}

.i-checkbox-inner {
  @apply focus:ring-0 text-sm text-gray-800 bg-white border rounded 
  text-indigo-500 border border-gray-300 disabled:bg-gray-50 disabled:cursor-not-allowed;
}

.i-checkbox-text {
  @apply text-sm ml-2;
}

</style>