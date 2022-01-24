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

.i-flex-row-vertical-middle {
  @apply items-center;
}
.i-flex-row-vertical-top {
  @apply items-start;
}
.i-flex-row-vertical-bottom {
  @apply items-end;
}

.i-flex-row-horizontal-left {
  @apply justify-start;
}

.i-flex-row-horizontal-center {
  @apply justify-start;
}

.i-flex-row-horizontal-right {
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