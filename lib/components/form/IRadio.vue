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
  class="i-radio"
  :class="[disabled ? 'i-radio-disabled' : '']"
>
  <label class="i-radio-label">
    <input class="i-radio-inner" type="radio" :disabled="disabled" v-bind="$attrs" />
    <span class="i-radio-text">
      <slot></slot>
    </span>
  </label>
</div>
</template>
<style>

.i-radio {
  @apply ;
}

.i-radio-disabled .i-radio-text {
  @apply text-gray-400;
}

.i-radio-label {

}

.i-radio-inner {
  @apply focus:ring-0 text-sm text-gray-800 bg-white 
  text-indigo-500 border border-gray-300 disabled:bg-gray-50 disabled:cursor-not-allowed;
}

.i-radio-text {
  @apply text-sm ml-2;
}

</style>