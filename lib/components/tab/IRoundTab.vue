<script lang="ts" setup>
import { PropType, ref } from 'vue-demi'
import { ITabOption } from '../../type'



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
<div class="mb-8">
  <ul class="text-sm font-medium flex flex-nowrap overflow-x-auto gap-2">
    <li 
      v-for="(opt, i) in options" 
      class="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border shadow-sm"
      :class="[
          i === curr 
            ? 'bg-indigo-500 text-white border-transparent'
            : 'text-gray-500 hover:text-gray-600 border-gray-200 hover:border-gray-300']">
      <span 
        @click="handleClick(opt, i)" 
        class="whitespace-nowrap cursor-pointer flex items-center gap-2"
        >
        {{ opt.icon }} {{ opt.name }}
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