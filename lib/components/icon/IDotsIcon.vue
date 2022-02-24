<script lang="ts" setup>
import { PropType, defineProps } from 'vue-demi'

const props = defineProps({
  active: {
    type: Boolean as PropType<boolean>,
    default: false
  }
})
</script>
<template>
<svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
  <circle class="fill-current text-gray-400" :class="active && '!text-indigo-300'" cx="18.5" cy="5.5" r="4.5" />
  <circle class="fill-current text-gray-600" :class="active && '!text-indigo-500'" cx="5.5" cy="5.5" r="4.5" />
  <circle class="fill-current text-gray-600" :class="active && '!text-indigo-500'" cx="18.5" cy="18.5" r="4.5" />
  <circle class="fill-current text-gray-400" :class="active && '!text-indigo-300'" cx="5.5" cy="18.5" r="4.5" />                    
</svg>
</template>