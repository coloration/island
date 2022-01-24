<script lang="ts" setup>
import { PropType } from 'vue-demi'
const props = defineProps({
  vertical: {
    type: String as PropType<'top' | 'middle' | 'bottom'>,
    default: 'middle'
  },
  horizontal: {
    type: String as PropType<'left' | 'center' | 'right' | 'between' | 'around' | 'evenly'>,
    default: 'left'
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

.i-flex-column-horizontal-middle {
  @apply items-center;
}
.i-flex-column-horizontal-top {
  @apply items-start;
}
.i-flex-column-horizontal-bottom {
  @apply items-end;
}

.i-flex-column-vertical-left {
  @apply justify-start;
}

.i-flex-column-vertical-center {
  @apply justify-start;
}

.i-flex-column-vertical-right {
  @apply justify-start;
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