<script lang="ts" setup>
import { PropType, ref, watch } from 'vue-demi'
import { useEventListener } from '@vueuse/core'
import { OnClickOutside, } from '@vueuse/components'
import { IDirectionIcon } from '../../components'
import { IPlainOption } from '../../type'
import { isBoolean } from '@coloration/kit'

const emits = defineEmits<{
  (e: 'change', option: IPlainOption) : void,
  (e: 'update:visible', visible: boolean) : void
}>()

const props = defineProps({
  options: {
    type: Array as PropType<IPlainOption[]>,
    default: 'primary'
  },
  visible: {
    type: Boolean as PropType<boolean>,
    default: false
  }
})

const _visible = ref(props.visible)
const trigger = ref<HTMLButtonElement | null>(null)
const dropdown = ref<Element | null>(null)    
const selected = ref(0)

watch(() => props.visible, () => {
  if (isBoolean(props.visible) && props.visible !== _visible.value) _visible.value = props.visible
})

function handleToggle (next?: any) {
  _visible.value = isBoolean(next) ? next : !_visible.value
  emits('update:visible', _visible.value)
}

// close if the esc key is pressed
useEventListener(document, 'keydown', ({ key }: KeyboardEvent) => {
  if (!_visible.value || key !== 'Escape') return
  handleToggle(false)
})

function handleChange (option: IPlainOption, idx: number) {
  selected.value = idx
  handleToggle(false)
  emits('change', option)
}


</script>
<template>
<OnClickOutside 
  class="relative inline-flex" 
  @trigger="handleToggle(false)">
  
  <div ref="trigger" @click.prevent="handleToggle(true)">
    <slot>
      <button
        class="font-medium px-3 py-2 text-sm inline-flex items-center justify-center border rounded leading-5 shadow-sm transition duration-150 ease-in-out justify-between min-w-44 bg-white border-gray-200 hover:border-gray-300 text-gray-500 hover:text-gray-600"
        aria-label="Select date range"
        aria-haspopup="true"
        :aria-expanded="visible"
      >
        <span class="flex items-center">
          <span>{{options[selected] && options[selected].name}}</span>
        </span>

        <IDirectionIcon class="text-xs text-gray-400"/>
      </button>
    </slot>
  </div>
  <transition
    enter-active-class="transition ease-out duration-100 transform"
    enter-from-class="opacity-0 -translate-y-2"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-out duration-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div 
      v-show="_visible" 
      class="z-10 absolute top-full left-0 min-w-full bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1">
      <slot name="drop-content">
        <div
          ref="dropdown"
          class="font-medium text-sm text-gray-600"
          @focusin="handleToggle(true)"
          @focusout="handleToggle(false)"
        >
          <button
            v-for="(option, i) in options"
            :key="option.value"
            class="flex items-center w-full hover:bg-gray-50 py-1 px-3 cursor-pointer"
            :class="i === selected && 'text-indigo-500'"
            @click="handleChange(option, i)"
          >
            <svg 
              class="shrink-0 mr-2 fill-current text-indigo-500" 
              :class="selected !== i && 'invisible'" width="12" height="9" viewBox="0 0 12 9">
              <path d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" />
            </svg>
            <span>{{option.name}}</span>
          </button>          
        </div>
      </slot>
    </div>
  </transition>
</OnClickOutside>
</template>
<style>

.i-demo {
  @apply block;
}

</style>