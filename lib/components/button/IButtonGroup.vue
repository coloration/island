<script lang="ts" setup name="i-button-group">
import { PropType, defineProps, h, useSlots, useAttrs } from 'vue'

const props = defineProps({
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg'>,
  },
  color: {
    type: String as PropType<'gray' | 'indigo' | 'red' | 'green'>,
  },
  type: {
    type: String as PropType<'primary' | 'normal' | 'ghost'>,
  },
})

const slots = useSlots()
const attrs = useAttrs()

function render () {
  const btns = slots.default?.() || []

  btns.forEach((btn, i) => {
    btn.props = btn.props || {}
    if (props.size) {
      btn.props.size = props.size
    }

    if (props.color) {
      btn.props.color = props.color
    }

    if (props.type) {
      btn.props.type = props.type
    }
    
  })



  return h(
    'div', // 标签名
    { 
      ...attrs,
      class: `i-button-group i-button-group-${props.size}`,
    }, // prop 或 attribute
    btns // 包含其子节点的数组
  )
}
</script>
<template>
<render />
</template>
<style>
.i-button-group {
  @apply relative flex items-center;
}

.i-button-group * {
  @apply rounded-none -mr-[1px] first:rounded-l last:rounded-r;
}


</style>