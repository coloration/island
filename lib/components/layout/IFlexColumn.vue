<script lang="ts" setup>
import { PropType } from 'vue'
const props = defineProps({
  horizontal: {
    type: String as PropType<'start' | 'center' | 'end'>,
    default: 'center'
  },
  vertical: {
    type: String as PropType<'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'>,
    default: 'start'
  }
})




</script>
<template>
<div 
  class="i-flex-column" 
  v-bind="$attrs"
  :class="[
    'i-flex-column-vertical-' + vertical,
    'i-flex-column-horizontal-' + horizontal,
  ]"
>
  <slot />
</div>
</template>
<style>

.i-flex-column {
  @apply flex flex-col;
}

.i-flex-column-horizontal-center {
  @apply items-center;
}
.i-flex-column-horizontal-start {
  @apply items-start;
}
.i-flex-column-horizontal-end {
  @apply items-end;
}

.i-flex-column-vertical-start {
  @apply justify-start;
}

.i-flex-column-vertical-center {
  @apply justify-center;
}
.i-flex-column-vertical-end {
  @apply justify-end;
}
.i-flex-column-vertical-between {
  @apply justify-between;
}
.i-flex-column-vertical-around {
  @apply justify-around;
}
.i-flex-column-vertical-evenly {
  @apply justify-evenly;
}

</style>