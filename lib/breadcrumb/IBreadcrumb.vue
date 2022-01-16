<script lang="ts" setup>
import { PropType } from 'vue-demi'
import { IPlainOption } from '../type'

type BreadcrumbOption = IPlainOption<string, string | Function> & { icon: any }

const emits = defineEmits(['change'])

defineProps({
  type: {
    type: String as PropType<'underline' | 'normal'>,
    default: 'normal'
  },
  options: {
    type: Array as PropType<BreadcrumbOption[]>
  },
  split: {
    type: Object as PropType<any>,
    default: '/'
  }
})

function handleClick (opt: BreadcrumbOption, i: number) {

}


</script>
<template>
<ul class="inline-flex flex-wrap text-sm font-medium">
  <li v-for="(opt, i) in options" class="">
    <span v-if="i !== 0" class="text-gray-400 px-2">{{ split }}</span>
    <span 
      @click="handleClick(opt, i)"
      class="text-gray-500 hover:text-indigo-500 cursor-pointer" 
    >{{ opt.name }}</span>
  </li>
</ul>
</template>
<style>

.i-demo {
  @apply block;
}

</style>