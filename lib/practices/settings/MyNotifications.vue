<script lang="ts" setup>
import { IParagraphText, ITitle, IFlexRow, IButton, ISwitch, ILine, IItalicText } from '../../components'
</script>
<template>
<div>
  <div class="px-6">
    <ITitle level="2" class="mb-6">My Notifications</ITitle>

    <ITitle level="3" class="mb-4">General</ITitle>

    <IFlexRow horizontal="between" class="mb-3">
      <div>
        <ITitle level="5">Comments and replies</ITitle>
        <IParagraphText size="sm">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</IParagraphText>
      </div>
      <ISwitch :label-order="1" />
    </IFlexRow>
    <ILine class="mb-3" />

    <IFlexRow horizontal="between" class="mb-3">
      <div>
        <ITitle level="5">Messages</ITitle>
        <IParagraphText size="sm">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</IParagraphText>
      </div>
      <ISwitch :label-order="1" />
    </IFlexRow>
    <ILine class="mb-3" />

    <IFlexRow horizontal="between" class="mb-3">
      <div>
        <ITitle level="5">Mentions</ITitle>
        <IParagraphText size="sm">Excepteur sint occaecat cupidatat non in culpa qui officia deserunt mollit.</IParagraphText>
      </div>
      <ISwitch :label-order="1" />
    </IFlexRow>
    <ILine class="mb-6" />

    <ITitle level="3" class="mb-4">Shares</ITitle>

    <IFlexRow horizontal="between" class="mb-3">
      <div>
        <ITitle level="5">Shares of my content</ITitle>
        <IParagraphText size="sm">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</IParagraphText>
      </div>
      <IButton size="sm" color="gray">Manage</IButton>
    </IFlexRow>
    <ILine class="mb-3" />

    <IFlexRow horizontal="between" class="mb-3">
      <div>
        <ITitle level="5">Team invites</ITitle>
        <IParagraphText size="sm">Excepteur sint occaecat cupidatat non in culpa qui officia deserunt mollit.</IParagraphText>
      </div>
      <IButton size="sm" color="gray">Manage</IButton>
    </IFlexRow>

    <ILine class="mb-3" />

    <IFlexRow horizontal="between" class="mb-8 gap-2">
      <div class="flex-1">
        <ITitle level="5">Smart connection</ITitle>
        <IParagraphText size="sm">Excepteur sint occaecat cupidatat non in culpa qui officia deserunt mollit.</IParagraphText>
      </div>

      <IItalicText>Active</IItalicText>
      <IButton size="sm" color="red">Disable</IButton>
    </IFlexRow>
  </div>

  <ILine />

  <IFlexRow horizontal="end" class="gap-3 px-6 py-5">
    <IButton color="gray">Cancel</IButton>
    <IButton type="primary">Save Changes</IButton>
  </IFlexRow>

</div>
</template>