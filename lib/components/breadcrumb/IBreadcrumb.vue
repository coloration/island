<script lang="ts" setup name="i-breadcrumb">
import { PropType, defineComponent } from 'vue'
import { isObject, isString } from '@coloration/kit'
import { IBreadcrumbOption } from '../../type'

const emit = defineEmits<{
  (e: 'change', option: IBreadcrumbOption, i: number) : void
}>()

const props = defineProps({
  options: {
    type: Array as PropType<IBreadcrumbOption[]>,
    default: () => ([])
  },
  split: {
    type: [String, Object] as PropType<any>,
    default: '/'
  },
  splitProps: {
    type: [Object] as PropType<any>
  },
  active: {
    type: Number as PropType<number>
  },
  activeAll: {
    type: Boolean as PropType<boolean>,
    default:false
  }
})

function handleClick (opt: IBreadcrumbOption, i: number) {
  emit('change', opt, i)
}

</script>
<template>
<div 
  class="i-breadcrumb" 
  v-bind="$attrs"
>
  <template v-for="(opt, i) in options">
    <div v-if="i !== 0" class="i-breadcrumb-split">
      <component v-if="isObject(split)" :is="split" v-bind="splitProps" />
      <span v-else>{{ split }}</span>
    </div>
    <div 
      @click="handleClick(opt, i)"
      :class="{ 'i-breadcrumb-item-active': activeAll || i === active }"
      class="i-breadcrumb-item" 
    >{{ opt.name }}</div>
  </template>
</div>
</template>
<style>

.i-breadcrumb {
  @apply flex flex-wrap items-center text-sm font-medium cursor-default;
}

.i-breadcrumb-split {
  @apply text-gray-400 px-2;
}

.dark .i-breadcrumb-split {
  @apply text-gray-500;
}

.i-breadcrumb-item {
  @apply text-gray-500 cursor-pointer;
}

.dark .i-breadcrumb-item {
  @apply text-gray-300;
}

.i-breadcrumb-item.i-breadcrumb-item-active,
.i-breadcrumb-item:hover {
  @apply text-indigo-500;
}


.dark .i-breadcrumb-item.i-breadcrumb-item-active,
.dark .i-breadcrumb-item:hover {
  @apply text-indigo-400;
}


</style>