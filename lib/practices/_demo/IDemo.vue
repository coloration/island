<script lang="ts" setup>
import { PropType } from 'vue-demi'
defineProps({
  type: {
    type: String as PropType<'primary' | 'normal' | 'ghost'>,
    default: 'primary'
  },
})


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