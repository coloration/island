<script lang="ts" setup>
import { PropType } from 'vue-demi'
defineProps({
  type: {
    type: String as PropType<'primary' | 'normal' | 'ghost'>,
    default: 'primary'
  },
})


</script>
<template>
<div class="i-menu" v-bind="$attrs">
  <div class="text-xs font-semibold text-gray-400 uppercase mb-3">Business settings</div>
      <ul class="flex flex-nowrap md:block mr-3 md:mr-0">
        <router-link to="/settings/account">
          <li class="mr-0.5 md:mr-0 md:mb-0.5">
            <a class="flex items-center px-2.5 py-2 rounded whitespace-nowrap">
              <svg class="w-4 h-4 shrink-0 fill-current text-gray-400 mr-2" viewBox="0 0 16 16">
                <path d="M7.001 3h2v4h-2V3zm1 7a1 1 0 110-2 1 1 0 010 2zM15 16a1 1 0 01-.6-.2L10.667 13H1a1 1 0 01-1-1V1a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1zM2 11h9a1 1 0 01.6.2L14 13V2H2v9z" />
              </svg>
              <span class="text-sm font-medium text-gray-600">My Account</span>
            </a>
          </li>
        </router-link>
      </ul>
</div>
</template>
<style>

.i-demo {
  @apply block;
}

</style>