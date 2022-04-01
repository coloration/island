<script lang="ts" setup name="i-toggle">
import { useToggle } from '@vueuse/core'
import { PropType } from 'vue'

const props = defineProps({
  defaultValue: {
    type: Boolean as PropType<boolean>
  }
})

const [value, toggle] = useToggle(props.defaultValue)


</script>
<template>
<slot :toggle="toggle" :value="value"></slot>
</template>