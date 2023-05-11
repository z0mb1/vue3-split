
<script setup lang="ts">
import VueSplitExampleBase from './VueSplitExampleBase.vue';
</script>

<template>
  <div class="direction-container">
    <div>
      <div class="example-title">Horizontal</div>
      <VueSplitExampleBase direction="horizontal" key="horizontal" />
    </div>
    <div>
      <div class="example-title">Vertical</div>
      <VueSplitExampleBase direction="vertical" key="vertical" />
    </div>
  </div>
</template>

<style>
.direction-container {
  display: flex;
  flex-direction: row;
  gap: 16px;
}

.direction-container>div {
  width: 50%;
}
</style>
