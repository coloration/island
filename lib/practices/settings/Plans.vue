<script lang="ts" setup>
import { IParagraphText, ITitle, IFlexRow, IHangText, IButtonText, ISwitch, ILine, IButton, IFlexColumn, IAvatar } from '../../components'
import { ICard } from '../../widgets'
import IconCheck from '~icons/ant-design/check-outlined'
import IconStar from '~icons/ant-design/star-filled'

const cardSrc = `data:image/svg+xml,${encodeURI(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'>
                      <path d='M26.946 18.005a.583.583 0 00-.53-.34h-6.252l.985-3.942a.583.583 0 00-1.008-.52l-7 8.167a.583.583 0 00.442.962h6.252l-.984 3.943a.583.583 0 001.008.52l7-8.167a.583.583 0 00.087-.623z' />
                    </svg>`)}`

</script>
<template>
  <div>
    <div class="p-6">
      <ITitle level="2" class="mb-5">Plans</ITitle>
      <IParagraphText class="mb-6">
        This workspace’s Basic Plan is set to
        <IParagraphText bold>$34</IParagraphText>per month and will renew on
        <IParagraphText bold>July 9, 2021.</IParagraphText>
      </IParagraphText>

      <IFlexRow class="gap-2 mb-6">
        <IParagraphText>Monthly</IParagraphText>
        <ISwitch :label="['', '']" />
        <IParagraphText>Annually</IParagraphText>
        <span class="text-green-500 text-sm">(-20%)</span>
      </IFlexRow>

      <ICard class="mb-6">
        <div class="h-0.5 bg-green-500"></div>
        <div class="p-5">
          <IFlexRow class="gap-3 mb-2">
            <IAvatar :src="cardSrc"/>
            <ITitle level="4">Basic</ITitle>
          </IFlexRow>
          <IParagraphText
            size="sm"
            class="mb-3"
          >Ideal for individuals that need a custom solution with custom tools.</IParagraphText>

          <div class="mb-5">
            <span class="text-2xl font-bold">$</span>
            <span class="text-3xl font-bold">14</span>
            <IParagraphText>/mo</IParagraphText>
          </div>
          <IButton color="gray" block>Downgrade</IButton>
        </div>
        <ILine />
        <div class="p-6">
          <IHangText class="mb-4">WHAT'S INCLUDED</IHangText>
          <IFlexColumn class="gap-2" horizontal="start">
            <IParagraphText>
              <IconCheck class="text-green-500 inline-block" />
              Lorem ipsum dolor sit amet
            </IParagraphText>
            <IParagraphText>
              <IconCheck class="text-green-500 inline-block" />
              Quis nostrud exercitation
            </IParagraphText>
            <IParagraphText>
              <IconCheck class="text-green-500 inline-block" />
              Lorem ipsum dolor sit amet
            </IParagraphText>
            <IParagraphText>
              <IconCheck class="text-green-500 inline-block" />
              Quis nostrud exercitation
            </IParagraphText>
            
          
          </IFlexColumn>

        </div>

      </ICard>

      <ICard class="mb-6">
        <div class="h-0.5 bg-light-blue-500"></div>
        <div class="p-5">
          <IFlexRow class="gap-3 mb-2">
            <IAvatar :src="cardSrc"/>
            <ITitle level="4">Standard</ITitle>
          </IFlexRow>
          <IParagraphText
            size="sm"
            class="mb-3"
          >Ideal for individuals that need a custom solution with custom tools.</IParagraphText>

          <div class="mb-5">
            <span class="text-2xl font-bold">$</span>
            <span class="text-3xl font-bold">34</span>
            <IParagraphText>/mo</IParagraphText>
          </div>
          <IButton color="gray" disabled block>
            <IconCheck />
            Current Plan
          </IButton>
        </div>
        <ILine />
        <div class="p-6">
          <IHangText class="mb-4">WHAT'S INCLUDED</IHangText>
          <IFlexColumn class="gap-2" horizontal="start">
            <IParagraphText>
              <IconCheck class="text-green-500 inline-block" />
              Lorem ipsum dolor sit amet
            </IParagraphText>
            <IParagraphText>
              <IconCheck class="text-green-500 inline-block" />
              Quis nostrud exercitation
            </IParagraphText>
            <IParagraphText>
              <IconCheck class="text-green-500 inline-block" />
              Lorem ipsum dolor sit amet
            </IParagraphText>
            <IParagraphText>
              <IconCheck class="text-green-500 inline-block" />
              Quis nostrud exercitation
            </IParagraphText>
            <IParagraphText>
              <IconCheck class="text-green-500 inline-block" />
              Lorem ipsum dolor sit amet
            </IParagraphText>
            
          
          </IFlexColumn>

        </div>

      </ICard>

      <ICard class="mb-6">
        <div class="h-0.5 bg-indigo-500"></div>
        <div class="p-5">
          <IFlexRow class="gap-3 mb-2">
            <IAvatar :src="cardSrc"/>
            <ITitle level="4">Plus</ITitle>
          </IFlexRow>
          <IParagraphText
            size="sm"
            class="mb-3"
          >Ideal for individuals that need a custom solution with custom tools.</IParagraphText>

          <div class="mb-5">
            <span class="text-2xl font-bold">$</span>
            <span class="text-3xl font-bold">74</span>
            <IParagraphText>/mo</IParagraphText>
          </div>
          <IButton type="primary" block>Downgrade</IButton>
        </div>
        <ILine />
        <div class="p-6">
          <IHangText class="mb-4">WHAT'S INCLUDED</IHangText>
          <IFlexColumn class="gap-2" horizontal="start">
            <IParagraphText>
              <IconCheck class="text-green-500 inline-block" />
              Lorem ipsum dolor sit amet
            </IParagraphText>
            <IParagraphText>
              <IconCheck class="text-green-500 inline-block" />
              Quis nostrud exercitation
            </IParagraphText>
            <IParagraphText>
              <IconCheck class="text-green-500 inline-block" />
              Lorem ipsum dolor sit amet
            </IParagraphText>
            <IParagraphText>
              <IconCheck class="text-green-500 inline-block" />
              Quis nostrud exercitation
            </IParagraphText>
            <IParagraphText>
              <IconCheck class="text-green-500 inline-block" />
              Lorem ipsum dolor sit amet
            </IParagraphText>
            <IParagraphText>
              <IconCheck class="text-green-500 inline-block" />
              Quis nostrud exercitation
            </IParagraphText>
            
          
          </IFlexColumn>

        </div>

      </ICard>

      <ITitle level="3" class="mt-5 mb-4">FAQs</ITitle>
      <ITitle level="5" class="mt-5 mb-2">What is the difference between the three versions?</ITitle>
      <IParagraphText
        class="mb-3"
      >Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</IParagraphText>

      <ITitle level="5" class="mt-5 mb-2">Is there any difference between Basic and Plus licenses?</ITitle>
      <IParagraphText
        class="mb-3"
      >Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</IParagraphText>

      <ITitle level="5" class="mt-5 mb-2">Got more questions?</ITitle>
      <IParagraphText class="mb-6">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum in voluptate velit esse cillum dolore eu fugiat
        <IButtonText>contact us</IButtonText>.
      </IParagraphText>
    </div>
    <ILine />
    <IFlexRow horizontal="end" class="gap-3 px-6 py-5">
      <IButton color="gray">Cancel</IButton>
      <IButton type="primary">Save Changes</IButton>
    </IFlexRow>
  </div>
</template>