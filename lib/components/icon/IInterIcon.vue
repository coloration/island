<script lang="ts" setup>
import { PropType } from 'vue'

const props = defineProps({
  active: {
    type: Boolean as PropType<boolean>,
    default: false
  }
})
</script>
<template>

<svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
  <circle class="fill-current text-gray-600" :class="active && '!text-indigo-500'" cx="16" cy="8" r="8" />
  <circle class="fill-current text-gray-400" :class="active && '!text-indigo-300'" cx="8" cy="16" r="8" />                      
</svg>
</template>