
<script setup lang="ts">
import { ref, watch } from 'vue';
import VueSplitExampleBase from './VueSplitExampleBase.vue';

const sizes = ref([25, 75])

const leftSize = ref(25)
const rightSize = ref(75)

const updateSizesByLeft = () => {
  const computedRightSize = 100 - leftSize.value
  sizes.value = [+leftSize.value, computedRightSize]
  rightSize.value = computedRightSize
}

const updateSizesByRight = () => {
  const computedLeftSize = 100 - rightSize.value
  sizes.value = [computedLeftSize, +rightSize.value]
  leftSize.value = computedLeftSize
}

watch(leftSize, updateSizesByLeft)
watch(rightSize, updateSizesByRight)

const handleDrag = (sizes: number[]) => {
  leftSize.value = sizes[0]
  rightSize.value = sizes[1]
}

const handleDragStart = (sizes: number[]) => {
  leftSize.value = sizes[0]
  rightSize.value = sizes[1]
}

const handleDragEnd = (sizes: number[]) => {
  leftSize.value = sizes[0]
  rightSize.value = sizes[1]
}
</script>

<template>
  <div>
    <div class="size-setting-container">
      <label class="size-label">
        <span>Left Size</span>
        <input class="size-input" v-model="leftSize" min="0" max="100" type="number" />
      </label>
      <label class="size-label">
        <span>Right Size</span>
        <input class="size-input" v-model="rightSize" min="0" max="100" type="number" />
      </label>
    </div>
    <VueSplitExampleBase :sizes="sizes" key="sizes" @onDrag="handleDrag" @onDragEnd="handleDragEnd"
      @onDragStart="handleDragStart" />
  </div>
</template>

<style>
.size-setting-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}

.size-label {
  width: 48%;
  flex-grow: 0;
  position: relative;
  margin-bottom: 
}

.size-input {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 16px;
  background-color: transparent;
  font-size: 14px;
  font-weight: 500;
  color: #ccc;
  width: 100%;
}
</style>
