<script lang="ts" setup>
import { ITitle, ILabel, IInput, IButton, ILine, IButtonText, IText, IFlexRow, ISelect, ICheckbox } from '../../components'
import BussinessAuthContainer from './BussinessAuthContainer.vue'

</script>
<template>
<BussinessAuthContainer>
  <ITitle :level="1" class="mb-6">Create your Account✨</ITitle>
  <!-- Form -->
  <form>
    <div class="mb-2">
      <div>
        <ILabel required for="email">Email Address</ILabel>
        <IInput id="email" />
      </div>

      <div>
        <ILabel required for="fullname">Full Name</ILabel>
        <IInput id="fullname" />
      </div>

      <div class="mb-6">
        <ILabel required for="email">Your Role</ILabel>
        <ISelect>
          <option>Developer</option>
          <option>Designer</option>
          <option>Accountant</option>
        </ISelect>
      </div>
      <div>
        <ILabel for="password">Password</ILabel>
        <IInput id="password" type="password" autoComplete="on" />
      </div>
    </div>

    <IFlexRow vertical="center" horizontal="between">
      <ICheckbox>
        Email me about product news.
      </ICheckbox>
      <IButton type="primary">Sign Up</IButton>
    </IFlexRow>
  </form>

  <ILine class="mt-6 mb-5" />
  <!-- Footer -->
  <div>
    <div>
      <IText size="sm" class="mr-2">
        Have an account?
      </IText>
      <IButtonText>
        Sign In
      </IButtonText>
    </div>
  </div>
</BussinessAuthContainer>
</template>