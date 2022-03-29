<script lang="ts" setup>
import { PropType, defineProps } from 'vue-demi'

const props = defineProps({
  type: {
    type: String as PropType<'primary' | 'normal' | 'ghost'>,
    default: 'primary'
  },
})


const slots = useSlots()
const attrs = useAttrs()

</script>
<template>
<div class="i-demo" v-bind="$attrs">
  <slot />
</div>
</template>
<style>

.i-demo {
  @apply block;
}

</style>