<script lang="ts" setup>
import { ITitle, ILabel, IInput, IButton, ILine, IBanner, IButtonText, IText, IFlexRow } from '../../components'
import BussinessAuthContainer from './BussinessAuthContainer.vue'
</script>
<template>
<BussinessAuthContainer>
  <ITitle :level="1" class="mb-6">Welcome back! ✨</ITitle>
  <!-- Form -->
  <form>
    <div class="space-y-4">
      <div>
        <ILabel for="email">Email Address</ILabel>
        <IInput id="email" />
      </div>
      <div>
        <ILabel for="password">Password</ILabel>
        <IInput id="password" type="password" autoComplete="on" />
      </div>
    </div>

    <IFlexRow vertical="center" horizontal="between">
      <IText size="sm" class="underline hover:no-underline cursor-pointer">Forgot Password?</IText>
      <IButton type="primary">Sign In </IButton>
    </IFlexRow>
  </form>

  <ILine class="mt-6 mb-5" />
  <!-- Footer -->
  <div>
    <div>
      <IText size="sm" class="mr-2">
        Don’t you have an account? 
      </IText>
      <IButtonText>
        Sign Up
      </IButtonText>
    </div>

    <IBanner  class="mt-5" :visible="true" color="yellow" :closable="false">
      To support you during the pandemic super pro features are free until March 31st.
    </IBanner>
  </div>
</BussinessAuthContainer>
</template>