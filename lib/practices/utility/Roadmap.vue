<script lang="ts" setup>
import { IPage } from '../../widgets'
import { IPlusButton, ILine, ITitle, IFlexRow, IAvatar, IBadge, IVerticalStep, IParagraphText } from '../../components'


</script>
<template>
<IPage title="Roadmap ✨">
  <template v-slot:header-rest>
    <IPlusButton type="primary">Add Event</IPlusButton>
  </template>
  <ILine />

  <div class="max-x-2xl mx-auto">
    <ITitle :level="2" class="mb-4 mt-10">2021 Q1</ITitle>

    <IFlexRow class="gap-2">
      <IFlexRow class="-space-x-3">
        <IAvatar name="LC" border />
        <IAvatar name="DC" border />
        <IAvatar name="AE" border />
        <IAvatar name="PS" border />
      </IFlexRow>
      ·
      <IBadge color="green">Completed</IBadge>
    </IFlexRow>

    <div class="pt-6">
      <IVerticalStep title="Product V1 - Early Access" checked>
        <IParagraphText>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </IParagraphText>
      </IVerticalStep>
      <IVerticalStep title="Web3 Compatibility" checked>
        <IParagraphText>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </IParagraphText>
      </IVerticalStep>
      <IVerticalStep title="Proof-of-Funds Compliance Key" checked>
        <IParagraphText>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </IParagraphText>
      </IVerticalStep>
      <IVerticalStep title="Activity Feed Integration" checked>
        <IParagraphText>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </IParagraphText>
      </IVerticalStep>
    </div>
    
    <ILine class="mt-3 mb-8" />

    <ITitle :level="2" class="mb-4">2021 Q2</ITitle>

    <IFlexRow class="gap-2">
      <IFlexRow class="-space-x-3">
        <IAvatar name="LC" border />
        <IAvatar name="DC" border />
        <IAvatar name="PS" border />
      </IFlexRow>
      ·
      <IBadge color="indigo">Working on</IBadge>
    </IFlexRow>

    <div class="pt-6">
      <IVerticalStep title="Product V1 - Early Access" checked>
        <IParagraphText>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </IParagraphText>
      </IVerticalStep>
      <IVerticalStep title="Web3 Compatibility" checked>
        <IParagraphText>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </IParagraphText>
      </IVerticalStep>
      <IVerticalStep title="Proof-of-Funds Compliance Key" checked>
        <IParagraphText>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </IParagraphText>
      </IVerticalStep>
      <IVerticalStep title="Activity Feed Integration">
        <IParagraphText>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </IParagraphText>
      </IVerticalStep>
    </div>

    <ILine class="mt-3 mb-8" />

    <ITitle :level="2" class="mb-4">2021 Q3</ITitle>

    <IFlexRow class="gap-2">
      <IFlexRow class="-space-x-3">
        <IAvatar name="LC" border />
        <IAvatar name="DC" border />
        <IAvatar name="PS" border />
      </IFlexRow>
      ·
      <IBadge color="yellow">Planned</IBadge>
    </IFlexRow>

    <div class="pt-6">
      <IVerticalStep title="Product V1 - Early Access">
        <IParagraphText>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </IParagraphText>
      </IVerticalStep>
      <IVerticalStep title="Web3 Compatibility">
        <IParagraphText>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </IParagraphText>
      </IVerticalStep>
      <IVerticalStep title="Activity Feed Integration">
        <IParagraphText>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </IParagraphText>
      </IVerticalStep>
    </div>

    <ILine class="mt-3 mb-8" />

    <ITitle :level="2" class="mb-4">2021 Q4</ITitle>

    <IFlexRow class="gap-2">
      <IFlexRow class="-space-x-3">
        <IAvatar name="LC" border />
        <IAvatar name="DC" border />
        <IAvatar name="PS" border />
      </IFlexRow>
      ·
      <IBadge color="yellow">Planned</IBadge>
    </IFlexRow>

    <div class="pt-6">
      <IVerticalStep title="Product V1 - Early Access">
        <IParagraphText>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </IParagraphText>
      </IVerticalStep>
      <IVerticalStep title="Activity Feed Integration">
        <IParagraphText>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </IParagraphText>
      </IVerticalStep>
    </div>

    <ILine class="mt-3 mb-8" />
  </div>

</IPage>
</template>