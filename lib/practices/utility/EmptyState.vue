<script lang="ts" setup>
import { IPage } from '../../widgets'
import { IButton, ILine } from '../../components'


</script>
<template>
<IPage title="Empty State ✨">
  <template v-slot:header-rest>
    <IButton>Add Event</IButton>
  </template>
  <ILine />
</IPage>
</template>