<script lang="ts" setup>
import { PropType, defineProps } from 'vue-demi'

const props = defineProps({
  direction: {
    type: String as PropType<'up' | 'down' | 'left' | 'right'>,
    default: 'down'
  },
})
</script>
<template>
<svg class="i-close-icon" v-bind="$attrs" width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z" />
</svg>
</template>
<style>
.i-close-icon {
  @apply fill-current transform origin-center;
}


</style>