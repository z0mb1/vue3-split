<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'SplitItem',
  inject: ['splitItems'],
  mounted() {
    if (this.splitItems && this.splitItems && Array.isArray(this.splitItems)) {
      this.splitItems.push(this.$el);
    }
  }
}
</script>
