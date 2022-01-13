<script lang="ts" setup>
import { ref } from 'vue-demi'

const isPrimary = ref(false)
</script>
<template>
<button type="button" :data-primary="isPrimary">
  <slot></slot>
</button>
</template>