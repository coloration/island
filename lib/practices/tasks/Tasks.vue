<script lang="ts" setup>
import { IFlexRow, ITitle, IPlusButton, ITab, IText, IAvatar } from '../../components'
import { ICard } from '../../widgets'
import IconPlus from '~icons/bytesize/plus'

const tabOptions = [
  { name: 'View All', value: '/all' },
  { name: 'Web Sprint', value: '/sprint' },
  { name: 'Marketing', value: '/marketing' },
  { name: 'Development', value: '/development' }
 
]

</script>
<template>
<div>
  <IFlexRow horizontal="between" class="mb-10">
    <ITitle :level="1">
      Acme Inc. Tasks ✨
    </ITitle>

    <IPlusButton type="primary">
      Add Board
    </IPlusButton>
  </IFlexRow>
  
  <ITab :options="tabOptions" />

  <div class="grid grid-cols-12 gap-x-4 gap-y-8">
    <div class="col-span-full sm:col-span-6 xl:col-span-3">
    <!-- Column header -->
      <header>
        <IFlexRow horizontal="between" class="mb-2">
          <ITitle :level="4" truncate>To Do’s 🖋️</ITitle>
          <IconPlus />
        </IFlexRow>
        <!-- Cards -->
        <div class="grid gap-2">
        <ICard class="p-4" v-for="i in 3" :key="i">
          <!-- Body -->
          <div class="mb-3">
            <!-- Title -->
            <ITitle :level="5" class="mb-1"> 
              Managing teams (book)
            </ITitle>
            <!-- Content -->
            <IText size="sm">
              #7764 created by <a class="font-medium text-gray-800 hover:underline" href="#0">markus-james</a>
            </IText>
          </div>
          <!-- Footer -->
          <IFlexRow horizontal="between">
            <!-- Left side -->
            <div class="flex shrink-0 -space-x-3 -ml-px">
              <IAvatar border src="https://tse1-mm.cn.bing.net/th/id/R-C.65e439879aa61497589862adad1f88f6?rik=jDN9PbfgKozvdA&riu=http%3a%2f%2fscimg.jianbihuadq.com%2f202006%2f2020062019313121.jpg&ehk=KNd6VIpIB3vIh47ExDwI0l43YYaKMH5z5Ha7xgwG90E%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" />
              <IAvatar border src="https://tse1-mm.cn.bing.net/th/id/R-C.65e439879aa61497589862adad1f88f6?rik=jDN9PbfgKozvdA&riu=http%3a%2f%2fscimg.jianbihuadq.com%2f202006%2f2020062019313121.jpg&ehk=KNd6VIpIB3vIh47ExDwI0l43YYaKMH5z5Ha7xgwG90E%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" />
            </div>
            <!-- Right side -->
            <div class="flex items-center">
              <!-- Like button -->
              <button class="flex items-center text-gray-400 hover:text-indigo-500 ml-3">
                <svg class="w-4 h-4 shrink-0 fill-current mr-1.5" viewBox="0 0 16 16">
                  <path d="M14.682 2.318A4.485 4.485 0 0011.5 1 4.377 4.377 0 008 2.707 4.383 4.383 0 004.5 1a4.5 4.5 0 00-3.182 7.682L8 15l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L8 12.247l-5.285-5A2.5 2.5 0 014.5 3c1.437 0 2.312.681 3.5 2.625C9.187 3.681 10.062 3 11.5 3a2.5 2.5 0 011.785 4.251h-.003z" />
                </svg>
                <div class="text-sm text-gray-500">4</div>
              </button>
              <!-- Replies button -->
              <button class="flex items-center text-gray-400 hover:text-indigo-500 ml-3">
                <svg class="w-4 h-4 shrink-0 fill-current mr-1.5" viewBox="0 0 16 16">
                  <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
                </svg>
                <div class="text-sm text-gray-500">7</div>
              </button>
              <!-- Attach button -->
              <button class="text-gray-400 hover:text-indigo-500 ml-3">
                <svg class="w-4 h-4 shrink-0 fill-current mr-1.5" viewBox="0 0 16 16">
                  <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0zM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2z" />
                </svg>
              </button>
            </div>
          </IFlexRow>
        </ICard>
        </div>
      </header>
    </div>
  </div>
</div>
</template>