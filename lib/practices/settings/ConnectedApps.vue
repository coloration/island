<script lang="ts" setup>
import { IParagraphText, ITitle, IFlexRow, IItalicText, IButtonText, IAvatar, ILine, IButton, ITab } from '../../components'
import { ICard } from '../../widgets'
import IconCheck from '~icons/ant-design/check-outlined'
import IconStar from '~icons/ant-design/star-filled'

const cardSrc = `data:image/svg+xml,${encodeURI(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'>
                      <path d='M26.946 18.005a.583.583 0 00-.53-.34h-6.252l.985-3.942a.583.583 0 00-1.008-.52l-7 8.167a.583.583 0 00.442.962h6.252l-.984 3.943a.583.583 0 001.008.52l7-8.167a.583.583 0 00.087-.623z' />
                    </svg>`)}`
</script>
<template>
<div>
    <ITitle level="2" class="mb-5">Connected Apps</ITitle>
    <ITab :options="[
      { name: 'View All', value: 1 },
      { name: 'Utility', value: 2 },
      { name: 'Marketing', value: 3 },
      { name: 'Development', value: 4 },
    ]" />

    <div class="mb-6">
      <div class="mb-4" v-for="i in 4" :key="i">
        <ICard class="p-5">
          <IFlexRow class="gap-3 mb-4">
            <IAvatar size="lg" :src="cardSrc"/>
            <ITitle level="4">MaterialStack</ITitle>
          </IFlexRow>

          <IParagraphText size="sm" class="mb-3">Lorem ipsum dolor sit amet eiusmod sed do eiusmod tempor.</IParagraphText>

          <IFlexRow horizontal="between">
            <IFlexRow class="gap-4">
              <IFlexRow class="text-gray-500 gap-1">
                <svg class="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
                  <path d="M14.14 9.585a2.5 2.5 0 00-3.522 3.194c-.845.63-1.87.97-2.924.971a4.979 4.979 0 01-1.113-.135 4.436 4.436 0 01-1.343 1.682 6.91 6.91 0 006.9-1.165 2.5 2.5 0 002-4.547h.002zM10.125 2.188a2.5 2.5 0 10-.4 2.014 5.027 5.027 0 012.723 3.078c.148-.018.297-.028.446-.03a4.5 4.5 0 011.7.334 7.023 7.023 0 00-4.469-5.396zM4.663 10.5a2.49 2.49 0 00-1.932-1.234 4.624 4.624 0 01-.037-.516 4.97 4.97 0 011.348-3.391 4.456 4.456 0 01-.788-2.016A6.989 6.989 0 00.694 8.75c.004.391.04.781.11 1.166a2.5 2.5 0 103.86.584z" />
                </svg>
                4K+
              </IFlexRow>
              <IFlexRow  class="text-yellow-500 gap-1">
                <IconStar />
                4.7
              </IFlexRow>
            </IFlexRow>

            <IButton color="gray" size="sm">
              <IconCheck class="text-green-500" />
              Connected
            </IButton>
          </IFlexRow>
        </ICard>
      </div>
    </div>
 
    <ILine />

    <ITitle level="3" class="mt-5 mb-4">Trending Categories</ITitle>

    <div class="md:flex gap-4">
      <ICard class="p-5 mb-6" v-for="i in 3" :key="3">
        <ITitle level="4" class="mb-4">Programming</ITitle>
        <IFlexRow horizontal="between">
          <IItalicText>400+ Apps</IItalicText>

          <IButtonText>Explore -></IButtonText>
        </IFlexRow>
      </ICard>
    </div>

</div>
</template>