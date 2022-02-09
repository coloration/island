<template>
  <div class="flex h-screen overflow-hidden">

    <Chart01 width="400" height="128" />

  </div>
</template>

<script>
import Chart01 from './../partials/Chart01.vue'

export default {
  name: 'Home',
  components: {
    Chart01,
  },
}
</script>