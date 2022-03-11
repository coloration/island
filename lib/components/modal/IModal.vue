<template>
<div>
  <!-- Modal backdrop -->
  <transition
    enter-active-class="transition ease-out duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition ease-out duration-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-show="visible" class="i-modal-shadow" aria-hidden="true"></div>
  </transition>
  <!-- Modal dialog -->
  <transition
    enter-active-class="transition ease-in-out duration-200"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in-out duration-200"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <div 
      v-show="visible" 
      :id="id" 
      @click="handleCancel"
      class="i-modal" 
      role="dialog" 
      aria-modal="true">

      <div 
        ref="modalContent" 
        :style="{ width: width ? width + 'px' : '100%' }"
        @click.stop="() => {}"
        class="i-modal-inner">
        
        <div>
          <button 
            class="i-modal-close" 
            @click="handleCancel">
            <div class="sr-only">Close</div>
            <ICloseIcon />
          </button>
        </div>
        <!-- Modal header -->
        <slot name="header">
          <div class="px-5 font-semibold text-gray-800" :class="lineVisible ? 'pt-3' : 'pt-4'" v-if="title">{{ title }}</div>
          <ILine class="mt-3" v-if="lineVisible && title" />
        </slot>

        <div class="px-5 py-3 min-h-30 flex-1 overflow-auto">
          <slot />  
        </div>


        <div class="pt-1">
          <slot name="footer">
            <ILine class="mb-3" v-if="lineVisible" />
            <div class="pb-3 px-5">
              <IFlexRow horizontal="end" class="gap-2">
                <slot name="footer-rest"></slot>
                <slot name="footer-cancel-button">
                  <IButton size="sm" class="ml-2" @click="handleCancel">
                    <slot name="footer-cancel-button-name">
                      Cancel
                    </slot>
                  </IButton>
                </slot>
                <slot name="footer-confirm-button">
                  <IButton type="primary" size="sm" class="ml-2" @click="handleConfirm">
                    <slot name="footer-confirm-button-name">
                      Confirm
                    </slot>
                  </IButton>
                </slot>
              </IFlexRow>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </transition>

</div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { ICloseIcon, IFlexRow, ILine, IButton } from '../../components'


export default {
  name: 'IModal',
  props: {
    id: {
      type: String
    },
    visible: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number
    },
    lineVisible: {
      type: Boolean,
      default: true
    },
    closable: {
      type: Boolean,
      default: true
    },
    title: {
      type: String
    }
    
  },
  emits: ['close', 'confirm'],
  components: { ICloseIcon, IFlexRow, ILine, IButton },
  setup(props, { emit }) {

    const modalContent = ref(null)

    // close on click outside
    // const clickHandler = ({ target }) => {
    //   if (!props.visible || modalContent.value.contains(target)) return
    //   emit('close')
    // }

    // close if the esc key is pressed
    const keyHandler = ({ keyCode }) => {
      if (!props.visible || keyCode !== 27) return
      emit('close')
    }

    const handleCancel = () => {
      emit('close')
    }

    const handleConfirm = () => {
      emit('confirm')
    }

    onMounted(() => {
    //   document.addEventListener('click', clickHandler)
      document.addEventListener('keydown', keyHandler)
    })

    onUnmounted(() => {
    //   document.removeEventListener('click', clickHandler)
      document.removeEventListener('keydown', keyHandler)
    })

    return {
      modalContent,
      handleCancel,
      handleConfirm,
    }
  }  
}
</script>
<style>
.i-modal-shadow {
  @apply fixed inset-0 bg-gray-900 bg-opacity-30 z-50 transition-opacity;
}

.i-modal {
  @apply fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center transform px-4 sm:px-6;
}

.i-modal-inner {
  @apply bg-white rounded shadow-lg relative max-w-lg w-full max-h-full flex flex-col;
}

.i-modal-close {
  @apply text-gray-400 hover:text-gray-500 absolute right-5 top-4;
}
</style>