<script lang="ts" setup>
import IconPlus from '~icons/bytesize/plus'
import IButton from './IButton.vue'
</script>
<template>
<IButton v-bind="$attrs">
  <IconPlus class="w-4 h-4" :class="$slots.default ? 'mr-1' : ''" />
  <slot />
</IButton>
</template>