<script lang="ts">
import { defineComponent } from 'vue'
import IconArrowRight from '~icons/carbon/arrow-right'
import IButton from './IButton.vue'

export default defineComponent({
  components: { IconArrowRight, IButton }
})
</script>
<template>
<IButton v-bind="$attrs">
  <slot />
  <IconArrowRight class="w-4 h-4" :class="$slots.default ? 'ml-1' : ''" />
</IButton>
</template>