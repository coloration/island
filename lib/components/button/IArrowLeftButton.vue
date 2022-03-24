<script lang="ts">
import { defineComponent } from 'vue'
import IconArrowLeft from '~icons/carbon/arrow-left'
import IButton from './IButton.vue'

export default defineComponent({
  components: { IconArrowLeft, IButton }
})
</script>
<template>
<IButton v-bind="$attrs">
  <IconArrowLeft class="w-4 h-4" :class="$slots.default ? 'mr-1' : ''" />
  <slot />
</IButton>
</template>