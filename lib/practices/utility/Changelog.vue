<script lang="ts" setup>
import { IPage } from '../../widgets'
import { IButton, ILine } from '../../components'


</script>
<template>
<IPage title="Changelog ✨">
  <template v-slot:header-rest>
    <IButton>Add Entry</IButton>
  </template>
  <ILine />
</IPage>
</template>