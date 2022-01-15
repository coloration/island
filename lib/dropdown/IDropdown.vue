<script lang="ts" setup>
import { PropType, ref } from 'vue-demi'
import { useEventListener } from '@vueuse/core'
import { OnClickOutside } from '@vueuse/components'
import { IPlainOption } from '../type'

const emits = defineEmits(['change'])

const props = defineProps({
  options: {
    type: Array as PropType<IPlainOption[]>,
    default: 'primary'
  },
})

const dropdownOpen = ref(false)
const trigger = ref<HTMLButtonElement | null>(null)
const dropdown = ref<Element | null>(null)    
const selected = ref(0)

   


    // close if the esc key is pressed
useEventListener(document, 'keydown', ({ key }: KeyboardEvent) => {
  if (!dropdownOpen.value || key !== 'Escape') return
  dropdownOpen.value = false
})

function handleChange (option: IPlainOption, idx: number) {
  selected.value = idx
  dropdownOpen.value = false
  emits('change', option)
}


</script>
<template>
<OnClickOutside 
  class="relative inline-flex" 
  @trigger="dropdownOpen = false">
  <button
    ref="trigger"
    class="font-medium px-3 py-2 text-sm inline-flex items-center justify-center border rounded leading-5 shadow-sm transition duration-150 ease-in-out justify-between min-w-44 bg-white border-gray-200 hover:border-gray-300 text-gray-500 hover:text-gray-600"
    aria-label="Select date range"
    aria-haspopup="true"
    @click.prevent="dropdownOpen = !dropdownOpen"
    :aria-expanded="dropdownOpen"
  >
    <span class="flex items-center">
      <span>{{options[selected] && options[selected].name}}</span>
    </span>
    <svg class="shrink-0 ml-1 fill-current text-gray-400" width="11" height="7" viewBox="0 0 11 7">
      <path d="M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z" />
    </svg>
  </button>
  <transition
    enter-active-class="transition ease-out duration-100 transform"
    enter-from-class="opacity-0 -translate-y-2"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-out duration-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-show="dropdownOpen" class="z-10 absolute top-full left-0 w-full bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1">
      <div
        ref="dropdown"
        class="font-medium text-sm text-gray-600"
        @focusin="dropdownOpen = true"
        @focusout="dropdownOpen = false"
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
    </div>
  </transition>
</OnClickOutside>
</template>
<style>

.i-demo {
  @apply block;
}

</style>