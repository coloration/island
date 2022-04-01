<script lang="ts" setup name="i-line">
// import { PropType } from 'vue'
// defineProps({
  
// })


</script>
<template>
<div class="i-line" v-bind="$attrs">
  <slot />
</div>
</template>
<style>

.i-line {
  @apply border-b border-gray-200;
}

.dark .i-line {
  @apply border-gray-600;
}

</style>