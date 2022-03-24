
<script lang="ts" setup>
import { ref, watch, PropType } from 'vue'
import SidebarLinkGroup from './SidebarLinkGroup.vue'
import { IFlexRow, IDirectionIcon, IArrowIcon } from '../../components'
import { useEventListener } from '@vueuse/core'




const props = defineProps({
  sidebarOpen: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Array as PropType<any[]>,
    default: []
  },
  active: {
    type: String as PropType<string>,
    default: ''
  },

})

const emit = defineEmits<{
  (e: 'close-sidebar'): void,
  (e: 'change', opt: any, parent: any): void
}>()

const trigger = ref<HTMLElement | null>(null)
const sidebar = ref<HTMLElement | null>(null)

const storedSidebarExpanded = localStorage.getItem('sidebar-expanded')
const sidebarExpanded = ref(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true')

// close on click outside
const clickHandler = ({ target }: Event) => {
  if (!sidebar.value || !trigger.value) return
  if (
    !props.sidebarOpen ||
    sidebar.value.contains(target as HTMLElement) ||
    trigger.value.contains(target as HTMLElement)
  ) return
  emit('close-sidebar')
}

// close if the esc key is pressed
const keyHandler = ({ keyCode }: KeyboardEvent) => {
  if (!props.sidebarOpen || keyCode !== 27) return
  emit('close-sidebar')
} 

useEventListener(document, 'click', clickHandler)
useEventListener(document, 'keydown', keyHandler)



watch(sidebarExpanded, () => {
  localStorage.setItem('sidebar-expanded', `${sidebarExpanded.value}`)
  if (sidebarExpanded.value) {
    document.querySelector('body')?.classList.add('sidebar-expanded')
  } else {
    document.querySelector('body')?.classList.remove('sidebar-expanded')
  }
})

function includesActive (opts: any[]) {
  return opts.some(opt => opt.value === props.active)
}

function handleChange (opt: any, parent: any) {
  emit('change', opt, parent)
}

</script>
<template>
  <div 
    class="i-sidebar" 
    :class="{
      'i-sidebar-open': sidebarOpen, 
      'i-sidebar-expanded': sidebarExpanded 
    }"
  >
    <!-- Sidebar backdrop (mobile only) -->
    <div class="i-sidebar-shadow" aria-hidden="true"></div>

    <!-- Sidebar -->
    <div class="i-sidebar-inner" ref="sidebar">

      <!-- Sidebar header -->
      <IFlexRow horizontal="between" class="mb-10 pr-3 sm:px-2">
        <!-- Close button -->
        <button
          ref="trigger"
          class="i-sidebar-close-btn"
          @click.stop="$emit('close-sidebar')"
          aria-controls="sidebar"
          :aria-expanded="sidebarOpen"
        >
          <span class="sr-only">Close sidebar</span>
          <IArrowIcon class="text-2xl" direction="left" />
        </button>
        <!-- Logo -->
        <router-link class="block" to="/">
          <slot name="logo">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <defs>
                <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a">
                  <stop stop-color="#A5B4FC" stop-opacity="0" offset="0%" />
                  <stop stop-color="#A5B4FC" offset="100%" />
                </linearGradient>
                <linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="logo-b">
                  <stop stop-color="#38BDF8" stop-opacity="0" offset="0%" />
                  <stop stop-color="#38BDF8" offset="100%" />
                </linearGradient>
              </defs>
              <rect fill="#6366F1" width="32" height="32" rx="16" />
              <path d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z" fill="#4F46E5" />
              <path d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z" fill="url(#logo-a)" />
              <path d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z" fill="url(#logo-b)" />
            </svg>
          </slot>
        </router-link>
      </IFlexRow>
      <!-- Links -->
      <div class="space-y-8">
        <!-- Pages group -->
        <div v-for="(opt, i) in options" :key="i">
          <h3 class="i-sidebar-group-title">
            <span class="i-sidebar-group-dot" aria-hidden="true">•••</span>
            <span class="i-sidebar-group-name">{{ opt.name }}</span>
          </h3>

          <ul class="mt-3">
            <!-- Dashboard -->
            <template v-for="(optChild, childIdx) in opt.value" :key="childIdx">
              <SidebarLinkGroup 
                v-if="Array.isArray(optChild.value)"
                v-slot="parentLink" 
                :activeCondition="includesActive(optChild.value)">
                <a 
                  class="i-sidebar-nav-link" 
                  :class="parentLink.expanded && 'hover:text-gray-200'" 
                  href="javascript:;"
                  @click.prevent="sidebarExpanded ? parentLink.handleClick() : sidebarExpanded = true"
                >
                  <IFlexRow horizontal="between">
                    <IFlexRow>
                      <component :is="optChild.icon" :active="parentLink.expanded"></component>
                      <span class="i-sidebar-nav-name">{{ optChild.name }}</span>
                    </IFlexRow>
                    <div class="flex shrink-0 ml-2">
                      <IDirectionIcon 
                        class="text-xs text-gray-400" 
                        :direction="parentLink.expanded ? 'up' : 'down'" />
                    </div>
                  </IFlexRow>
                </a>
                <ul class="i-sidebar-subnav-container" v-if="parentLink.expanded">
                  <li class="mb-1 last:mb-0" v-for="(child, cIdx) in optChild.value" :key="cIdx">
                    <a 
                      class="i-sidebar-nav-link" 
                      :class="active === child.value && 'active'"
                      href="javascript:;" 
                      @click="handleChange(child, optChild)">
                      <span class="i-sidebar-subnav-name">{{ child.name }}</span>
                    </a>
                  </li>
                </ul>
                
              </SidebarLinkGroup>
              <li 
                v-else 
                class="px-3 py-2 rounded-sm mb-0.5 last:mb-0" 
                :class="active === optChild.value && 'bg-gray-900'">
                <a 
                  class="i-sidebar-nav-link" 
                  :class="active === optChild.value && 'hover:text-gray-200'" 
                  href="javascript:;" 
                  @click="handleChange(optChild, optChild)">
                  <IFlexRow horizontal="between">
                    <IFlexRow>
                      <component 
                        :is="optChild.icon" 
                        :active="active === optChild.value" />
                      <span class="i-sidebar-nav-name">
                        {{ optChild.name }}
                      </span>
                    </IFlexRow>
                  </IFlexRow>
                </a>
              </li>

            </template>
          </ul>
        </div>
      </div>

      <!-- Expand / collapse button -->
      <div class="i-sidebar-expanded-container">
        <button class="i-sidebar-expanded-btn" @click.prevent="sidebarExpanded = !sidebarExpanded">
          <span class="sr-only">Expand / collapse sidebar</span>
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path class="text-gray-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
            <path class="text-gray-600" d="M3 23H1V1h2z" />
          </svg>
        </button>
      </div>

    </div>
  </div>
</template>
<style>
.i-sidebar-shadow {
  @apply fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 opacity-0 pointer-events-none;
}

.i-sidebar-open .i-sidebar-shadow {
   @apply opacity-100;
}
.i-sidebar-inner {
  @apply 
    flex flex-col 
    absolute z-40 left-0 top-0 
    lg:static lg:left-auto lg:top-auto 
    lg:translate-x-0 
    transform 
    h-screen 
    overflow-y-scroll lg:overflow-y-auto no-scrollbar 
    w-64
    lg:w-20 
    lg:sidebar-expanded:!w-64 2xl:!w-64 
    shrink-0 
    bg-gray-800 
    p-4 
    transition-all ease-in-out -translate-x-64;
}

.i-sidebar-open .i-sidebar-inner {
  @apply translate-x-0;
}

.i-sidebar-expanded .i-sidebar-inner {
  @apply lg:w-64 2xl:w-64; 
}

.i-sidebar-expanded-container {
  @apply hidden lg:inline-flex 2xl:hidden justify-end mt-auto px-3 py-2;
}

.i-sidebar-expanded-btn {}
.i-sidebar-expanded .i-sidebar-expanded-btn {
  @apply transform-gpu rotate-y-180 duration-200;
}

.i-sidebar-close-btn {
  @apply lg:hidden text-gray-500 hover:text-gray-400;
}

.i-sidebar-group-title {

  @apply text-xs uppercase text-gray-500 font-semibold pl-3;
}

.i-sidebar-group-dot {
  @apply hidden lg:block 2xl:hidden text-center w-6;
}

.i-sidebar-expanded .i-sidebar-group-dot {
  @apply lg:hidden;
}

.i-sidebar-group-name {
  @apply lg:hidden 2xl:block;
}

.i-sidebar-expanded .i-sidebar-group-name {
  @apply lg:block;
}

.i-sidebar-nav-name {
  @apply text-sm font-medium ml-3 lg:opacity-0 2xl:opacity-100 duration-200;
}

.i-sidebar-expanded .i-sidebar-nav-name {
  @apply lg:opacity-100;
}

.i-sidebar-expanded .i-sidebar-subnav-container {
  @apply lg:block;
}
.i-sidebar-subnav-container {
  @apply lg:hidden 2xl:block pl-9 mt-1;
}

.i-sidebar-expanded .i-sidebar-subnav-name {
  @apply lg:opacity-100;
}
.i-sidebar-subnav-name {
  @apply text-sm font-medium lg:opacity-0 2xl:opacity-100 duration-200;
}


.i-sidebar-nav-link {
  @apply block text-gray-200 hover:text-white truncate transition duration-150;
}

.i-sidebar-subnav-container .i-sidebar-nav-link {
  @apply block text-gray-400 hover:text-gray-200;
}

.i-sidebar-subnav-container .i-sidebar-nav-link.active {
  @apply block text-gray-200 hover:text-gray-200;
}
</style>
