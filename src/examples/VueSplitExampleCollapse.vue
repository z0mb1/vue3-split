
<script setup lang="ts">
import { ref } from 'vue';
import VueSplitExampleBase from './VueSplitExampleBase.vue';

const collapse = ref<number | null>(null)

const collapseFirstElement = (index: number) => {
  collapse.value = index
}
</script>

<template>
  <div>
    <div class="collapse-example-controls">
      <button class="control-button" @click="collapseFirstElement(0)">Collapse Left</button>
      <button class="control-button" @click="collapseFirstElement(1)">Collapse Right</button>
    </div>
    <VueSplitExampleBase v-model:collapse="collapse" hide-values />
  </div>
</template>

<style>
.collapse-example-controls {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}

.control-button {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 16px;
  background-color: transparent;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #ccc;
  transition: all 0.2s ease-in-out;
}

.control-button:hover {
  background-color: rgba(255,255,255,0.1);
}
</style>
