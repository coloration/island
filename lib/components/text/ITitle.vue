<script>
import { h, defineComponent } from 'vue'

export default defineComponent({
  name: 'i-title',
  props: {
    level: {
      type: [Number, String],
      default: 1
    },
    truncate: {
      type: Boolean,
      default: false
    }
  },
  render() {
    return h(
      'h' + this.level, // 标签名
      { class: `i-title ${this.truncate ? 'i-title-truncate' : ''}` }, // prop 或 attribute
      this.$slots.default ? this.$slots.default() : undefined // 包含其子节点的数组
    )
  }
})

</script>
<style>

.i-title {
  @apply font-bold text-gray-800;
}

.dark .i-title {
  @apply text-gray-200;
}

.i-title-truncate {
  @apply truncate;
}

h1.i-title {
  @apply text-2xl md:text-3xl ;
}

h2.i-title {
  @apply text-2xl;
}

h3.i-title {
  @apply text-xl;
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