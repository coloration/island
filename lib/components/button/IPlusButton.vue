<script lang="ts">
import { defineComponent } from 'vue'
import IconPlus from '~icons/bytesize/plus'
import IButton from './IButton.vue'

export default defineComponent({
  components: { IconPlus, IButton }
})
</script>
<template>
<IButton v-bind="$attrs">
  <IconPlus class="w-4 h-4" :class="$slots.default ? 'mr-1' : ''" />
  <slot />
</IButton>
</template>