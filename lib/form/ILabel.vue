<script lang="ts" setup>


import { PropType } from 'vue-demi'
import { Tooltip } from '../tooltip'
defineProps({
  
  tooltip: {
    type: String as PropType<string>,
  },
  required: {
    type: Boolean as PropType<boolean>,
    default: false
  },
})


</script>
<template>
<div>
<label 
  v-bind="$attrs"
  class="i-label" 
>
  <span class="i-label-name">
    <slot></slot>
    <span class="i-label-required" v-if="required">*</span>
  </span>
  <Tooltip v-if="tooltip" class="ml-2" bg="dark" size="md">
    <div class="text-sm text-gray-200">
      {{tooltip}}
    </div>
  </Tooltip>
</label>
</div>
</template>
<style>
.i-label {
  @apply block text-sm font-medium mb-1 flex text-gray-600;
}

.i-label-name {
  @apply flex-1;
}

.i-label-required {
  @apply text-red-500;
}
</style>