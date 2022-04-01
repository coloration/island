<script lang="ts" setup>
import { IText } from '../text'

import { PropType } from 'vue'
import { ITooltip } from '../tooltip'
const props = defineProps({
  
  tooltip: {
    type: String as PropType<string>,
  },
  required: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  for: {
    type: String as PropType<string>
  }
})


</script>
<template>
<div 
  v-bind="$attrs"
  class="i-label" 
>
  <span class="i-label-header">
    <span class="i-label-name">
      <label :for="props.for">
        <IText size="sm">
          <slot />
        </IText>
      </label>
      <span class="i-label-required" v-if="required">*</span>
    </span>
    <ITooltip v-if="tooltip" class="ml-2" bg="dark" size="md">
      <div class="text-sm text-gray-200">
        {{tooltip}}
      </div>
    </ITooltip>
  </span>
</div>
</template>
<style>
.i-label {
}

.i-label-header {
  @apply block text-sm font-medium mb-1 flex;
}

.i-label-name {
  @apply flex-1;
}

.i-label-required {
  @apply text-red-500 ml-1;
}
</style>