<script lang="ts" setup>
import { IParagraphText, ITitle, IFlexRow, IStep, IButton, IInput, IText, ITextarea, ILine } from '../../components'
</script>
<template>
<div>
  <div class="px-6">
    <ITitle level="2" class="mb-3">Give Feedback</ITitle>
    <IParagraphText size="sm" class="mb-5">
      Our product depends on customer feedback to improve the overall experience!
    </IParagraphText>


    <ITitle level="3" class="mb-6">How likely would you recommend us to a friend or colleague?</ITitle>
    <div class="flex mb-2">
      <IStep />
      <IStep checked />
      <IStep />
      <IStep />
      <IStep align-end />
    </div>
    <IFlexRow horizontal="between" class="mb-6">
      <IText italic>Not at all</IText>
      <IText italic>Extremely likely</IText>
    </IFlexRow>

    <ITitle level="3" class="mb-5">Tell us in words</ITitle>

    
    <ITextarea class="h-28 mb-8" placeholder="I really enjoy...." />
  </div>

  <ILine />

  <IFlexRow horizontal="end" class="gap-3 px-6 py-5">
    <IButton color="gray">Cancel</IButton>
    <IButton type="primary">Save Changes</IButton>

  </IFlexRow>

</div>
</template>