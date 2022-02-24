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
<svg class="i-arrow-icon" :class="direction" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="m10.7,18.7l1.4,-1.4l-4.3,-4.3l12.2,0l0,-2l-12.2,0l4.3,-4.3l-1.4,-1.4l-6.7,6.7l6.7,6.7z"/>
</svg>
</template>
<style>
.i-arrow-icon {
  @apply fill-current transform origin-center;
}

.i-arrow-icon.down {
  @apply rotate-270;
}

.i-arrow-icon.up {
  @apply rotate-90;
}
.i-arrow-icon.left {
  @apply rotate-0;
}
.i-arrow-icon.right {
  @apply rotate-180;
}
</style>