<script lang="ts" setup>
import { PropType } from 'vue-demi'
defineProps({
  type: {
    type: String as PropType<'vertical' | 'horizontal'>,
    default: 'vertical'
  },
})


</script>
<template>
<div 
  class="i-layout" 
  v-bind="$attrs"
  :class="['i-layout-' + type]"
>
  <slot />
</div>
</template>
<style>

.i-layout {
  @apply w-full h-full flex-1 flex items-stretch overflow-auto;
}

.i-layout-vertical {
  @apply flex-col;
}

.i-layout-horizontal {
  @apply flex-row;
}

</style>