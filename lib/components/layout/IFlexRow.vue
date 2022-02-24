<script lang="ts" setup>
import { PropType } from 'vue-demi'
const props = defineProps({
  vertical: {
    type: String as PropType<'start' | 'center' | 'end' | 'stretch'>,
    default: 'center'
  },
  horizontal: {
    type: String as PropType<'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'>,
    default: 'start'
  }
})




</script>
<template>
<div 
  class="i-flex-row" 
  v-bind="$attrs"
  :class="[
    'i-flex-row-vertical-' + vertical,
    'i-flex-row-horizontal-' + horizontal,
  ]"
>
  <slot />
</div>
</template>
<style>

.i-flex-row {
  @apply flex;
}

.i-flex-row-vertical-center {
  @apply items-center;
}
.i-flex-row-vertical-start {
  @apply items-start;
}
.i-flex-row-vertical-end {
  @apply items-end;
}

.i-flex-row-vertical-stretch {
  @apply items-stretch;
}

.i-flex-row-horizontal-start {
  @apply justify-start;
}

.i-flex-row-horizontal-center {
  @apply justify-center;
}

.i-flex-row-horizontal-end {
  @apply justify-end;
}
.i-flex-row-horizontal-between {
  @apply justify-between;
}
.i-flex-row-horizontal-around {
  @apply justify-around;
}
.i-flex-row-horizontal-evenly {
  @apply justify-evenly;
}

</style>