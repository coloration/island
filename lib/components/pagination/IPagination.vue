<script lang="ts" setup>
import { PropType, computed } from 'vue'
import { IButton } from '../button'
const props = defineProps({
  type: {
    type: String as PropType<'primary' | 'normal' | 'ghost'>,
    default: 'primary'
  },
  total: {
    type: Number,
    default: 1
  },
  size: {
    type: Number,
    default: 10
  },
  page: {
    type: Number,
    default: 1
  }
})

const startCount = computed(() => {
  const start = (props.page - 1) * props.size + 1
  return start > props.total ? props.total : start
})
const finalCount = computed(() => {
  const final = props.page * (props.size + 1) - 1
  return final > props.total ? props.total : final
})

</script>
<template>
<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
  <nav class="mb-4 sm:mb-0 sm:order-1 flex gap-4" role="navigation" aria-label="Navigation">
    <IButton type="normal" :disabled="startCount <= 1">&lt;- Previous</IButton>
    <IButton type="normal" :disabled="finalCount >= total">Next -&gt;</IButton>
  </nav>
  <div class="text-sm text-gray-500 text-center sm:text-left">
    Showing <span class="font-medium text-gray-600">{{ startCount }}</span> to <span class="font-medium text-gray-600">{{ finalCount }}</span> of <span class="font-medium text-gray-600">{{ total }}</span> results
  </div>
</div>
</template>
<style>

.i-demo {
  @apply block;
}

</style>