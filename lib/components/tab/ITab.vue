<script lang="ts" setup>
import { PropType, ref } from 'vue-demi'
import { IPlainOption, ITabOption } from '../../type'



const emits = defineEmits(['change'])

defineProps({
  type: {
    type: String as PropType<'underline' | 'normal'>,
    default: 'normal'
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
<div class="mb-8 border-b border-gray-200">
  <ul class="text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar">
    <li 
      v-for="(opt, i) in options" 
      class="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
      <span 
        @click="handleClick(opt, i)" 
        class="whitespace-nowrap cursor-pointer"
        :class="[
          i === curr ? 
            type === 'underline' 
              ? 'text-indigo-500 border-b-2 border-indigo-500'
              : 'text-indigo-500' 
            : 'text-gray-500 hover:text-gray-600']">
        {{ opt.name }}
      </span>
    </li>
  </ul>
</div>
</template>
<style>

.i-demo {
  @apply block;
}

</style>