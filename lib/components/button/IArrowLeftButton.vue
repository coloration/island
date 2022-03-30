<script lang="ts" setup name="i-arrow-left-button">
import IconArrowLeft from '~icons/carbon/arrow-left'
import IButton from './IButton.vue'
</script>
<template>
<IButton v-bind="$attrs">
  <IconArrowLeft class="w-4 h-4" :class="$slots.default ? 'mr-1' : ''" />
  <slot />
</IButton>
</template>