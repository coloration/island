<script lang="ts" setup name="i-tab">
import { PropType, ref } from 'vue'
import { ITabOption } from '../../type'
import { IText } from '../text'



const emits = defineEmits(['change'])

defineProps({
  type: {
    type: String as PropType<'underline' | 'normal'>,
    default: 'normal'
  },
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg'>,
    default: 'md'
  },
  options: {
    type: Array as PropType<ITabOption[]>
  },
})

const curr = ref(0)

function handleClick (opt: ITabOption, idx: number) {
  emits('change', opt, idx)
  curr.value = idx
}


</script>
<template>
<div 
  class="i-tab"
  :class="[
    `i-tab-${size}`,
    type === 'underline' ? 'i-tab-underline' : ''
  ]">
  <div 
    v-for="(opt, i) in options" 
    class="i-tab-item"
    @click="handleClick(opt, i)"
    :class="[i === curr ? 'i-tab-item-active' : '']">
    <IText color="current" size="current">
      {{ opt.name }}
    </IText>
  </div>
</div>
</template>
<style>

.i-tab {
  @apply 
  mb-8 
  text-base 
  font-medium 
  gap-6
  border-b 
  border-gray-200 
  flex 
  flex-nowrap 
  overflow-x-auto 
  ;
}

.dark .i-tab {
  @apply border-gray-600;
}


.i-tab-sm {
  @apply 
  mb-6 
  text-sm 
  gap-4;
}

.i-tab-lg {
  @apply 
  mb-8 
  text-lg 
  gap-6;
}




.i-tab-item {
  @apply pb-3 text-gray-500 hover:text-gray-600 box-border whitespace-nowrap cursor-pointer;
}

.i-tab-sm .i-tab-item {
  @apply pb-2;
}

.i-tab-lg .i-tab-item {
  @apply pb-3;
}


.dark .i-tab-item {
  @apply text-gray-300 hover:text-gray-200;
}

.i-tab-item.i-tab-item-active {
  @apply text-indigo-500;
}

.dark .i-tab-item.i-tab-item-active {
  @apply text-indigo-400;
}

.i-tab-underline .i-tab-item-active {
  @apply border-b-2 border-current;
}
</style>