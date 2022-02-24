<script lang="ts" setup>
import { ITitle, ILabel, IInput, IButton, IFlexRow, } from '../../components'
import BussinessAuthContainer from './BussinessAuthContainer.vue'

</script>
<template>
<BussinessAuthContainer>
  <ITitle :level="1" class="mb-6">Reset your Password✨</ITitle>
  <!-- Form -->
  <form>
    <div class="mb-2">
      <div>
        <ILabel required for="email">Email Address</ILabel>
        <IInput id="email" />
      </div>
    </div>

    <IFlexRow horizontal="end">
      <IButton type="primary">Send Reset Link</IButton>
    </IFlexRow>
  </form>
</BussinessAuthContainer>
</template>