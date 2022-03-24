<script lang="ts">
import { PropType, defineComponent } from 'vue-demi'
import { isFunction, isString } from '@coloration/kit'
import { IBreadcrumbOption } from '../../type'

export default defineComponent({
  emits: ['change'],
  props: {
    type: {
      type: String as PropType<'underline' | 'normal'>,
      default: 'normal'
    },
    options: {
      type: Array as PropType<IBreadcrumbOption[]>,
      default: () => ([])
    },
    split: {
      type: Object as PropType<any>,
      default: '/'
    },
    active: {
      type: Number as PropType<number>
    },
    activeAll: {
      type: Boolean as PropType<boolean>,
      default:false
    }
  },
  setup (_props, { emit }) {

    function handleClick (opt: IBreadcrumbOption, i: number) {
      emit('change', opt, i)
    }

    return {
      handleClick
    }
  }

})
</script>
<template>
<ul class="i-breadcrumb">
  <li v-for="(opt, i) in options" class="">
    <span v-if="i !== 0" class="i-breadcrumb-split">{{ split }}</span>
    <span 
      @click="handleClick(opt, i)"
      :class="[activeAll || i === active ? 'text-indigo-500' : 'text-gray-500']"
      class="hover:text-indigo-500 cursor-pointer" 
    >{{ opt.name }}</span>
  </li>
</ul>
</template>
<style>

.i-breadcrumb {
  @apply flex flex-wrap text-sm font-medium;
}

.i-breadcrumb-split {
  @apply text-gray-400 px-2;
}



</style>