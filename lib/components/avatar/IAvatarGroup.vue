<script lang="tsx" setup>
import { PropType, defineProps, h, useSlots, useAttrs } from 'vue'
const props = defineProps({
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'>,
    default: 'md'
  },
  border: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  order: {
    type: Number as PropType<1 | -1>,
    default: 1,
  },
})


const slots = useSlots()
const attrs = useAttrs()

function render () {
  const avatars = slots.default?.() || []
  avatars.forEach((av, i) => {
    av.props = av.props || {}
    av.props.size = props.size
    av.props.border = props.border
    av.props.style = Object.assign({}, av.props.style, {
      zIndex: 100 + props.order * i
    })
  })



  return h(
    'div', // 标签名
    { 
      ...attrs,
      class: `i-avatar-group i-avatar-group-${props.size}`,
    }, // prop 或 attribute
    avatars // 包含其子节点的数组
  )
}

</script>
<template>
  <render />
</template>
<style>

.i-avatar-group {
  @apply relative flex;
}

.i-avatar-group-xs { @apply -space-x-3;}
.i-avatar-group-sm { @apply -space-x-3;}
.i-avatar-group-md { @apply -space-x-4;}
.i-avatar-group-lg { @apply -space-x-5;}
.i-avatar-group-xl { @apply -space-x-8;}
.i-avatar-group-xxl { @apply -space-x-10;}
</style>