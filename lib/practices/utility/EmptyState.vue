<script lang="ts" setup>
import { IPage } from '../../widgets'
import { IPlusButton, ILine, IFlexColumn, ITitle } from '../../components'



</script>
<template>
<IPage title="Empty State ✨">
  <template v-slot:header-rest>
    <IPlusButton type="primary">Add Event</IPlusButton>
  </template>
  <ILine />
  <IFlexColumn class="pt-4">
    <ITitle :level="2">Pay your bills in just a few clicks</ITitle>
    <p class="mt-3 mb-5 text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <IPlusButton type="primary">Add Event</IPlusButton>
  </IFlexColumn>
</IPage>
</template>