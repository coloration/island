<script lang="ts" setup>
import { IPage } from '../../widgets'
import { ITab, ILine, ITitle, IText, IArrowRightButton, IInput, IParagraphText, IBreadcrumb } from '../../components'
import { IBreadcrumbOption, ITabOption } from '../../type'

const tabOptions: ITabOption[] = [
  { name: 'Popular', value: 1 },
  { name: 'Accessibility', value: 2 },
  { name: 'Marketing', value: 3 },
  { name: 'Development', value: 4 },
  { name: 'Account', value: 5 },
]

const breadcrumbOptions: IBreadcrumbOption[] = [
  { name: 'General', value: '/abc' },
  { name: 'Marketing', value: '/abc' },
]
</script>
<template>
<div class="max-w-3xl mx-auto">
  <IPage title="👋 How we can help you today?">
    <div class="mb-2">
      <IInput size="lg" />
    </div>
    <ITab :options="tabOptions" />

    <div class="mb-4">
      <ITitle :level="2" >Popular Questions</ITitle>
    </div>

    <div v-for="n in 6">
      <div class="mb-2">
        <ITitle :level="3">How can the widget to my website?</ITitle>
      </div>
      <IParagraphText class="mb-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco.
      </IParagraphText>
      
      <IBreadcrumb split="·" active-all :options="breadcrumbOptions" />

      <div class="my-4">
        <ILine />
      </div>
    </div>

    <div class="flex justify-end pt-2">
      <IArrowRightButton type="normal">See All Questions</IArrowRightButton>
    </div>
  </IPage>
</div>
</template>