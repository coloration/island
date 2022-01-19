<script lang="ts" setup>
import { PropType } from 'vue-demi'
import { ILayout, ITitle } from '../../components'

defineProps({
  title: {
    type: String as PropType<string>,
  },
  titleLevel: {
    type: Number as PropType<1 | 2 | 3 | 4 | 5 | 6>,
    default: 5,
  }
})


</script>
<template>
<ILayout class="i-card" v-bind="$attrs">
  <slot name="header">
    <header class="i-card-header" v-if="title">
      <ITitle :level="titleLevel">{{ title }}</ITitle>
      <slot name="header-rest" />
    </header>
  </slot>
  <ILayout>
    <slot />
  </ILayout>
</ILayout>
</template>
<style>

.i-card {
  @apply bg-white shadow-lg rounded-sm border border-gray-200 relative;
}

.i-card-header {
  @apply px-5 py-4 sm:flex sm:items-center sm:justify-between border-b border-gray-200;
}
</style>