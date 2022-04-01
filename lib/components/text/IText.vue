<script lang="ts" setup>
import { ExtractPropTypes, PropType } from 'vue'
import { textPropsDefaults, ITextProps } from './type'

const props: Readonly<ExtractPropTypes<ITextProps>> = defineProps(textPropsDefaults())


</script>
<template>
<span 
  class="i-text" 
  v-bind="$attrs"
  :class="[
    props.italic ? 'i-text-italic' : '',
    props.truncate ? 'i-text-truncate' : '',
    props.block ? 'i-text-block' : '',
    props.uppercase ? 'i-text-uppercase' : '',
    props.underline ? 'i-text-underline' : '',
    'i-text-' + props.align,
    props.size === 'current' ? '' : 'i-text-' + props.size,
    props.color === 'current' ? '' : 'i-text-' + props.color,
  ]"
  >
  <slot />
</span>
</template>
<style>


.i-text {
  font-size: 1em;
  @apply inline text-current;
}

.dark .i-text {
  @apply text-current;
}

.i-text-underline {
  @apply underline;
}

.i-text.i-text-block {
  @apply block;
}

.i-text-italic {
  @apply italic;
}
.i-text-center {
  @apply text-center;
}

.i-text-right {
  @apply text-right;
}

.i-text-justify {
  @apply text-justify;
}


.i-text-truncate {
  @apply truncate;
}

.i-text-uppercase {
  @apply uppercase;
}

.i-text-xs {
  @apply text-xs;
}
.i-text-md {
  @apply text-base;
}
.i-text-sm {
  @apply text-sm;
}
.i-text-lg {
  @apply text-lg;
}
.i-text-xl {
  @apply text-xl;
}
.i-text-xxl {
  @apply text-2xl;
}

.i-text-xxl {
  @apply text-2xl;
}

.dark .i-text-gray {
  @apply text-gray-300;
}

.i-text-gray {
  @apply text-gray-800;
}

.dark .i-text-green {
  @apply text-green-400;
}

.i-text-green {
  @apply text-green-600;
}


.dark .i-text-indigo {
  @apply text-indigo-400;
}
.i-text-indigo {
  @apply text-indigo-600;
}

.dark .i-text-light-blue {
  @apply text-light-blue-400;
}

.i-text-light-blue {
  @apply text-light-blue-600;
}

.dark .i-text-yellow {
  @apply text-yellow-400;
}

.i-text-yellow {
  @apply text-yellow-600;
}

.dark .i-text-red {
  @apply text-red-400;
}

.i-text-red {
  @apply text-red-600;
}

.dark .i-text-blue {
  @apply text-blue-400;
}

.i-text-blue {
  @apply text-blue-600;
}


</style>