<script lang="ts" setup>
import { PropType, computed } from 'vue-demi'
import { IButton } from '../button'
const props = defineProps({
  type: {
    type: String as PropType<'primary' | 'normal' | 'ghost'>,
    default: 'primary'
  },
  total: {
    type: Number,
    default: 1
  },
  size: {
    type: Number,
    default: 10
  },
  page: {
    type: Number,
    default: 1
  }
})

const allPage = computed(() => Math.ceil(props.total/props.size))

const startCount = computed(() => {
  const start = (props.page - 1) * props.size + 1
  return start > props.total ? props.total : start
})
const finalCount = computed(() => {
  const final = props.page * (props.size + 1) - 1
  return final > props.total ? props.total : final
})

</script>
<template>
<div class="flex justify-center">
  <nav class="flex" role="navigation" aria-label="Navigation">
    <div class="mr-2">
      <span 
        class="inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white border border-gray-200"
        :class="[startCount <= 1 ? 'text-gray-400' : 'hover:text-white hover:bg-indigo-500 cursor-pointer']"
      >
        
        <span class="sr-only">Previous</span><wbr />
        <svg class="h-4 w-4 fill-current" viewBox="0 0 16 16">
          <path d="M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z" />
        </svg>
      </span>
    </div>
    <ul class="inline-flex text-sm font-medium -space-x-px shadow-sm">
      <li v-for="n in allPage">
        <span 
          class="inline-flex items-center justify-center rounded-l leading-5 px-3.5 py-2 bg-white border border-gray-200"
          :class="[n === page ? 'text-indigo-500' : 'cursor-pointer']"  
        >{{ n }}</span>
      </li>
      
      <!-- <li>
        <span class="inline-flex items-center justify-center leading-5 px-3.5 py-2 bg-white border border-gray-200 text-gray-400">…</span>
      </li> -->
    </ul>
    <div class="ml-2">
      <span 
        class="inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white border border-gray-200 shadow-sm"
        :class="[finalCount >= total ? 'text-gray-400' : 'hover:text-white hover:bg-indigo-500 cursor-pointer']"
      >
        <span class="sr-only">Next</span><wbr />
        <svg class="h-4 w-4 fill-current" viewBox="0 0 16 16">
          <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
        </svg>
      </span>
    </div>
  </nav>
  </div>
</template>
<style>

.i-demo {
  @apply block;
}

</style>