<script lang="ts" setup>
import { IParagraphText, ITitle, IFlexRow, IHangText, IButton, IButtonText, ILine } from '../../components'
</script>
<template>
<div>
  <div class="px-6">
    <ITitle level="2" class="mb-3">Billing & Invoices</ITitle>
    <IParagraphText size="sm" class="mb-5">
      This workspace’s Basic Plan is set to $34 per month and will renew on July 9, 2021.
    </IParagraphText>


    <ITitle level="3" class="mb-6">Billing Information</ITitle>

    <IFlexRow class="py-3 gap-3">
      <IParagraphText size="sm" bold  class="flex-1">Payment Method</IParagraphText>
      <IParagraphText size="sm">Mastercard ending 9282</IParagraphText>
      <IButtonText>Edit</IButtonText>
    </IFlexRow>
    <ILine />
    <IFlexRow class="py-3 gap-3">
      <IParagraphText size="sm" bold class="flex-1">Billing Interval</IParagraphText>
      <IParagraphText size="sm">Annually</IParagraphText>
      <IButtonText>Edit</IButtonText>
    </IFlexRow>
    <ILine />
    <IFlexRow class="py-3 gap-3">
      <IParagraphText size="sm" bold class="flex-1">VAT/GST Number</IParagraphText>
      <IParagraphText size="sm">UK849700927</IParagraphText>
      <IButtonText>Edit</IButtonText>
    </IFlexRow>
    <ILine />
    <IFlexRow class="py-3 gap-3">
      <IParagraphText size="sm" bold  class="flex-1">Your Address</IParagraphText>
      <IParagraphText size="sm">34 Savoy Street, London, UK, 24E8X</IParagraphText>
      <IButtonText>Edit</IButtonText>
    </IFlexRow>
    <ILine />
    <IFlexRow class="py-3 gap-3">
      <IParagraphText size="sm" bold  class="flex-1">Billing Address</IParagraphText>
      <IParagraphText size="sm">hello@cruip.com</IParagraphText>
      <IButtonText>Edit</IButtonText>
    </IFlexRow>
    <ILine />

    <ITitle level="3" class="mt-5">Invoices</ITitle>

    
    <table class="table-auto w-full mb-7">
      <thead>
        <tr class="flex flex-wrap md:table-row md:flex-no-wrap">
          <th class="w-full block md:w-auto md:table-cell py-2 text-left">
            <IHangText>Year</IHangText>
          </th>
          <th class="w-full block md:w-auto md:table-cell py-2 text-left">
            <IHangText>plan</IHangText>
          </th>
          <th class="w-full block md:w-auto md:table-cell py-2 text-left">
            <IHangText>amount</IHangText>
          </th>
          <th class="w-full block md:w-auto md:table-cell py-2 text-left"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="n in 2" class="flex flex-wrap md:table-row md:flex-no-wrap border-b border-gray-200 py-2 md:py-0">
          <td class="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
            <IParagraphText size="sm" bold>202{{n - 1}}</IParagraphText>
          </td>
          <td class="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
            <IParagraphText size="sm">Basic Plan - Annualy</IParagraphText>
          </td>
          <td class="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
            <IParagraphText size="sm" bold>$349.00</IParagraphText>
          </td>
          <td class="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
            <IButtonText>HTML</IButtonText>
            <IButtonText>PDF</IButtonText>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <ILine />

  <IFlexRow horizontal="right" class="gap-3 px-6 py-5">
    <IButton color="gray">Cancel</IButton>
    <IButton type="primary">Save Changes</IButton>

  </IFlexRow>

</div>
</template>