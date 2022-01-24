<script lang="ts" setup>
import { IPage } from '../../widgets'
import { IPlusButton, ILine, IRoundTab, ITitle, IAvatar, IBadge, IFlexRow, IHangText, IPagination } from '../../components'

const tabOptions = [
  { name: 'View All', value: 1, },
  { name: 'Announcements', value: 2, },
  { name: 'Bug Fix', value: 3, },
  { name: 'Product', value: 4, },
  { name: 'Exciting News', value: 5, },

] 

</script>
<template>
<IPage title="Changelog ✨">
  <template v-slot:header-rest>
    <IPlusButton type="primary">Add Entry</IPlusButton>
  </template>
  <ILine  />
  <div class="max-w-3xl m-auto mt-8">
    <IRoundTab :options="tabOptions" />

    <IHangText>8 JULY, 2021</IHangText>
    <ITitle :level="2">Released version 2.0</ITitle>

    <IFlexRow class="gap-2 py-4">
      <IAvatar name="SL" />
      Simona Lürwer ·
      <IBadge color="green">Product</IBadge>
    </IFlexRow>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>

    <p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.
    </p>

    <ILine class="my-6" />

    <IHangText>6 JULY, 2021</IHangText>
    <ITitle :level="2">Feature Name is now public 🎉</ITitle>

    <IFlexRow class="gap-2 py-4">
      <IAvatar name="DC" />
      Danielle Cohen ·
      <IBadge color="yellow">Announcement</IBadge>
    </IFlexRow>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    </p>
    <p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.
    </p>

    <ILine class="my-6" />

    <IHangText>4 JULY, 2021</IHangText>
    <ITitle :level="2">Bugs fixed, issues, and more</ITitle>

    <IFlexRow class="gap-2 py-4">
      <IAvatar name="PK" />
      Patrick Kumar ·
      <IBadge color="red">Bug Fix</IBadge>
    </IFlexRow>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    </p>
    <p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.
    </p>

    <ul>
      <li>E-commerce: Better lorem ipsum generator.</li>
      <li>Booking: Lorem ipsum post generator.</li>
      <li>Retail: Better lorem ipsum generator.</li>
      <li>Services: Better lorem ipsum generator.</li>
    </ul>

    <ILine class="my-6" />

    <IHangText>2 JULY, 2021</IHangText>
    <ITitle :level="2">Thanks, everyone 🙌</ITitle>

    <IFlexRow class="gap-2 py-4">
      <IAvatar name="DC" />
      Danielle Cohen ·
      <IBadge color="light-blue">Exciting News</IBadge>
    </IFlexRow>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    </p>
    <p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.
    </p>

    <ILine class="my-6" />

    <IPagination :total="467" :size="10" :page="1" />
  </div>
</IPage>
</template>