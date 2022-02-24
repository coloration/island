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
<svg class="i-direction-icon" :class="direction" width="1em" height="1em" viewBox="0 0 12 12">
  <path d="m5.9,10l-5.4,-5.4l1.4,-1.4l4,4l4,-4l1.4,1.4l-5.4,5.4z"/>
</svg>
</template>
<style>
.i-direction-icon {
  @apply fill-current transform origin-center;
}

.i-direction-icon.down {
  @apply rotate-0;
}

.i-direction-icon.up {
  @apply rotate-180;
}
.i-direction-icon.left {
  @apply rotate-90;
}
.i-direction-icon.right {
  @apply rotate-270;
}
</style>