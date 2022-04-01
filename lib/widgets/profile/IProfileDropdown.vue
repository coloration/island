<script lang="ts" setup>
import { PropType } from 'vue'
import { IDropdown, IAvatar, IFlexRow, IDirectionIcon, ILine } from '../../components'
defineProps({
  type: {
    type: String as PropType<'primary' | 'normal' | 'ghost'>,
    default: 'primary'
  },
  name: {
    type: String as PropType<string>
  },
  description: {
    type: String as PropType<string>
  },
  src: {
    type: String as PropType<string>
  },

})


</script>
<template>
<IDropdown class="i-demo" v-bind="$attrs">
  <IFlexRow class="gap-1">
    <IAvatar :src="src" :name="(name || '')[0]"/>
    {{ name }},
    <IDirectionIcon class="text-sm" />

    
  </IFlexRow>

  <template #drop-content>
    <div>
      {{ name }}
      {{ description }}
    </div>
    <ILine />
    <slot>
    </slot>
  </template>
</IDropdown>
</template>
<style>

.i-demo {
  @apply block;
}

</style>