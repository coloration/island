<script lang="ts" setup>
import { PropType } from 'vue'
import IconAccessibility from '~icons/carbon/accessibility'
import IconAccountBox from '~icons/mdi/account-box'

defineProps({
  type: {
    type: String as PropType<'primary' | 'normal' | 'ghost'>,
    default: 'primary'
  },
})


</script>
<template>
<div class="i-icon">
  <icon-accessibility/>
  <icon-account-box style="font-size: 2em; color: red"/>
</div>
</template>
<style>

.i-icon {
  @apply block;
}

</style>