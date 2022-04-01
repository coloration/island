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
  <path class="fill-current text-gray-600" :class="active && '!text-indigo-500'" d="M1 3h22v20H1z" />
  <path class="fill-current text-gray-400" :class="active && '!text-indigo-300'" d="M21 3h2v4H1V3h2V1h4v2h10V1h4v2Z" />
</svg>
</template>