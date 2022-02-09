<script lang="ts" setup>
import { PropType } from 'vue-demi'
import { IBreadcrumbOption } from '../../type'



const emits = defineEmits(['change'])

defineProps({
  type: {
    type: String as PropType<'underline' | 'normal'>,
    default: 'normal'
  },
  options: {
    type: Array as PropType<IBreadcrumbOption[]>
  },
  split: {
    type: Object as PropType<any>,
    default: '/'
  },
  activeAll: {
    type: Boolean,
    default:false
  }
})

function handleClick (opt: IBreadcrumbOption, i: number) {

}


</script>
<template>
<ul class="inline-flex flex-wrap text-sm font-medium">
  <li v-for="(opt, i) in options" class="">
    <span v-if="i !== 0" class="text-gray-400 px-2">{{ split }}</span>
    <span 
      @click="handleClick(opt, i)"
      :class="[activeAll ? 'text-indigo-500' : 'text-gray-500']"
      class="hover:text-indigo-500 cursor-pointer" 
    >{{ opt.name }}</span>
  </li>
</ul>
</template>
<style>

.i-demo {
  @apply block;
}

</style>