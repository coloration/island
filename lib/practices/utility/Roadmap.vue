<script lang="ts" setup>
import { IPage } from '../../widgets'
import { IPlusButton, ILine, ITitle, IFlexRow, IAvatar, IBadge, IStep, IParagraphText } from '../../components'


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
      <IStep direction="vertical" checked>
        <ITitle :level="3">Product V1 - Early Access</ITitle>
        <IParagraphText :top="1">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </IParagraphText>
      </IStep>
      <IStep direction="vertical" checked>
        <ITitle :level="3">Web3 Compatibility</ITitle>

        <IParagraphText :top="1">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </IParagraphText>
      </IStep>
      <IStep direction="vertical" checked>
        <ITitle :level="3">Proof-of-Funds Compliance Key</ITitle>

        <IParagraphText :top="1">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </IParagraphText>
      </IStep>
      <IStep direction="vertical" checked>
        <ITitle :level="3">Activity Feed Integration</ITitle>

        <IParagraphText :top="1">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </IParagraphText>
      </IStep>
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
      <IStep direction="vertical" checked>
        <ITitle :level="3">Product V1 - Early Access</ITitle>
        <IParagraphText :top="1">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </IParagraphText>
      </IStep>
      <IStep direction="vertical" checked>
        <ITitle :level="3">Web3 Compatibility</ITitle>

        <IParagraphText :top="1">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </IParagraphText>
      </IStep>
      <IStep direction="vertical" checked>
        <ITitle :level="3">Proof-of-Funds Compliance Key</ITitle>

        <IParagraphText :top="1">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </IParagraphText>
      </IStep>
      <IStep direction="vertical" checked>
        <ITitle :level="3">Activity Feed Integration</ITitle>

        <IParagraphText :top="1">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </IParagraphText>
      </IStep>
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
      <IStep direction="vertical" checked>
        <ITitle :level="3">Product V1 - Early Access</ITitle>
        <IParagraphText :top="1">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </IParagraphText>
      </IStep>
      <IStep direction="vertical" checked>
        <ITitle :level="3">Web3 Compatibility</ITitle>

        <IParagraphText :top="1">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </IParagraphText>
      </IStep>
      <IStep direction="vertical" checked>
        <ITitle :level="3">Proof-of-Funds Compliance Key</ITitle>

        <IParagraphText :top="1">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </IParagraphText>
      </IStep>
      <IStep direction="vertical" checked>
        <ITitle :level="3">Activity Feed Integration</ITitle>

        <IParagraphText :top="1">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </IParagraphText>
      </IStep>
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
      <IStep direction="vertical" checked>
        <ITitle :level="3">Product V1 - Early Access</ITitle>
        <IParagraphText :top="1">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </IParagraphText>
      </IStep>
      <IStep direction="vertical" checked>
        <ITitle :level="3">Web3 Compatibility</ITitle>

        <IParagraphText :top="1">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </IParagraphText>
      </IStep>
      <IStep direction="vertical" checked>
        <ITitle :level="3">Proof-of-Funds Compliance Key</ITitle>

        <IParagraphText :top="1">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </IParagraphText>
      </IStep>
      <IStep direction="vertical" checked>
        <ITitle :level="3">Activity Feed Integration</ITitle>

        <IParagraphText :top="1">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </IParagraphText>
      </IStep>
    </div>

    <ILine class="mt-3 mb-8" />
  </div>

</IPage>
</template>