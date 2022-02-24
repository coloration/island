<script lang="ts" setup>
import { IButtonText, IText, IHorizontalStep, IFlexRow, IButton, ITitle, IParagraphText, ISwitch, ILabel, IInput, ISelect, IFlexColumn } from '../../components'
import { ref } from 'vue-demi'

const step = ref(1)
</script>
<template>
<div class="relative flex">

      <!-- Content -->
      <div class="w-full md:w-1/2">
        <div class="min-h-screen h-full flex flex-col after:flex-1">
          <div>
            <!-- Header -->
            <div class="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
              <!-- Logo -->
              <router-link class="block" to="/">
                <svg width="32" height="32" viewBox="0 0 32 32">
                  <defs>
                    <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a">
                      <stop stop-color="#A5B4FC" stop-opacity="0" offset="0%" />
                      <stop stop-color="#A5B4FC" offset="100%" />
                    </linearGradient>
                    <linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="logo-b">
                      <stop stop-color="#38BDF8" stop-opacity="0" offset="0%" />
                      <stop stop-color="#38BDF8" offset="100%" />
                    </linearGradient>
                  </defs>
                  <rect fill="#6366F1" width="32" height="32" rx="16" />
                  <path d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z" fill="#4F46E5" />
                  <path d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z" fill="url(#logo-a)" />
                  <path d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z" fill="url(#logo-b)" />
                </svg>
              </router-link>
              <div>
                <IText size="sm" class="mr-1">Have an account? </IText>
                <IButtonText>Sign In</IButtonText>
              </div>
            </div>

            <!-- Progress bar -->
            <div class="px-4 pt-12 pb-8">
              <div class="max-w-md mx-auto w-full">
                <IFlexRow>
                  <IHorizontalStep :step="n" v-for="n in 4" :checked="n <= step" @click="step = n" />
                </IFlexRow>
              </div>
            </div>
          </div>

          

          <div class="max-w-md mx-auto px-4 py-8 flex-1 flex flex-col items-stretch justify-center">
              <ITitle :level="1" class="mb-6">
                <span v-if="step === 1">Tell us what’s your situation ✨</span>
                <span v-else-if="step === 2">Tell us about your company ✨</span>
                <span v-else-if="step === 3">Company information ✨</span>
              </ITitle>
              <div class="mb-10" v-show="step === 2">
              
                <ITitle :level="6" class="mb-2">💸 Lorem ipsum is place text commonly?</ITitle>
                <IFlexRow class="gap-4">

                  <IParagraphText size="xs">
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.
                  </IParagraphText>

                  <ISwitch :label="false" />
                </IFlexRow>
              </div>

              <div class="mb-10" v-show="step === 3">
                <div>
                  <ILabel required for="company">Company Name</ILabel>
                  <IInput id="company" />
                </div>
                <IFlexRow class="gap-4">
                  <div>
                    <ILabel required for="city">City</ILabel>
                    <IInput id="city" />
                  </div>
                  <div>
                    <ILabel required for="postal">Postal Code</ILabel>
                    <IInput id="postal" />
                  </div>
                </IFlexRow>
                <div>
                  <ILabel required for="address">Street Address</ILabel>
                  <IInput id="address" />
                </div>
                <div>
                  <ILabel required for="country">Country</ILabel>
                  <ISelect id="country">
                    <option>USA</option>
                    <option>Italy</option>
                  </ISelect>
                </div>
              </div>

              <IFlexColumn v-show="step === 4">
                <ITitle :level="1" class="text-center mb-8">Nice to have you, Acme Inc. 🙌</ITitle>
                <IButton type="primary">Go To Dashboard -&gt;</IButton>
              </IFlexColumn>
              <IFlexRow horizontal="between" v-if="step < 4">
                <div>
                  <IText v-if="step > 1" class="underline cursor-pointer" size="sm" @click="step = step - 1">&lt;- Back</IText>
                </div>
                <IButton type="primary" @click="step = step + 1">Next Step -&gt;</IButton>
              </IFlexRow>

          </div>

        </div>

      </div>

      <!-- Image -->
      <div class="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2" aria-hidden="true">
        <img class="object-cover object-center w-full h-full" src="../images/onboarding-image.jpg" width="760" height="1024" alt="Onboarding" />
        <img class="absolute top-1/4 left-0 transform -translate-x-1/2 ml-8 hidden lg:block" src="../images/auth-decoration.png" width="218" height="224" alt="Authentication decoration" />
      </div>

    </div>
</template>