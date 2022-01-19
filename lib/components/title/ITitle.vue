<script>
import { h } from 'vue-demi'

export default {
  props: {
    level: {
      type: Number,
      default: 1
    }
  },
  render() {
    return h(
      'h' + this.level, // 标签名
      { class: 'i-title ' }, // prop 或 attribute
      this.$slots.default ? this.$slots.default() : undefined // 包含其子节点的数组
    )
  }
}

</script>
<style>

.i-title {
  @apply font-bold text-gray-800 m-0;
}

h1.i-title {
  @apply text-2xl md:text-3xl ;
}

h2.i-title {
  @apply text-xl;
}

h3.i-title {
  @apply text-lg;
}

h4.i-title {
  @apply text-lg font-semibold;
}

h5.i-title {
  @apply text-base font-semibold;
}

h6.i-title {
  @apply text-base font-medium;
}


</style>