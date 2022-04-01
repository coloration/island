<script lang="ts" setup>
import { PropType } from 'vue'
import { ITitle, ILayout } from '../../components'
defineProps({
  title: {
    type: String as PropType<string>,
  },
  titleLevel: {
    type: Number as PropType<1 | 2 | 3 | 4 | 5 | 6>,
    default: 1,
  }
})


</script>
<template>
<ILayout class="i-page" v-bind="$attrs">
  <header class="i-page-header">
    <slot name="header">
      <ITitle :level="titleLevel">{{ title }}</ITitle>
      <slot name="header-rest" />
    </slot>
  </header>

  <ILayout>
    <slot />
  </ILayout>
</ILayout>
</template>
<style>

.i-page {
  @apply px-4 sm:px-6 lg:px-8 py-8 max-w-9xl mx-auto;
}

.i-page-header {
  @apply sm:flex sm:items-center sm:justify-between mb-8;
}

</style>