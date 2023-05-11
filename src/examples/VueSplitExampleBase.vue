
<script setup lang="ts">
import SplitWrapper from '../components/SplitWrapper.vue'
import SplitItem from '../components/SplitItem.vue'
import { computed, reactive, ref, watch } from 'vue';

const SIZES_INITIAL: number[] = [25, 75]

interface Props {
  sizes?: number[],
  minSize?: number,
  maxSize?: number,
  expandToMin?: boolean,
  gutterSize?: number,
  gutterAlign?: 'start' | 'end' | 'center',
  snapOffset?: number,
  dragInterval?: number,
  direction?: 'horizontal' | 'vertical',
  collapse?: number | null,
  hideValues?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  sizes: () => [25, 75],
  minSize: 0,
  maxSize: Infinity,
  expandToMin: false,
  gutterSize: 10,
  gutterAlign: 'end',
  snapOffset: 30,
  dragInterval: 1,
  direction: 'horizontal',
  collapse: null
})

const emit = defineEmits<{
  (event: 'onDrag', sizes: number[]): void,
  (event: 'onDragStart', sizes: number[]): void,
  (event: 'onDragEnd', sizes: number[]): void,
  (event: 'update:collapse', value: null): void
}>()

const settings = reactive(props)

const sizeLeftPercent = ref(SIZES_INITIAL[0])
const sizeRightPercent = ref(SIZES_INITIAL[1])

watch(() => props.sizes, () => {
  if (props.sizes && props.sizes.length === 2) {
    sizeLeftPercent.value = props.sizes[0]
    sizeRightPercent.value = props.sizes[1]
  }
})

const handleDrag = (sizes: number[]) => {
  sizeLeftPercent.value = sizes[0]
  sizeRightPercent.value = sizes[1]
  emit('onDrag', sizes)
}

const handleDragEnd = (sizes: number[]) => {
  console.log(sizes)
  emit('onDragEnd', sizes)
}

const handleDragStart = (sizes: number[]) => {
  console.log(sizes)
  emit('onDragStart', sizes)
}

const content1Bg = computed(() => {
  return `hsl(${sizeLeftPercent.value / 100 * 360}, 50%, 60%)`
})

const content2Bg = computed(() => {
  return `hsl(${sizeRightPercent.value / 100 * 360}, 50%, 60%)`
})
</script>

<template>
  <div class="vue-split-container">
    <SplitWrapper v-bind="settings" :class="{
      'vue-split': true,
      'horizontal': settings.direction === 'horizontal',
      'vertical': settings.direction === 'vertical',
    }" @onDrag="handleDrag" @onDragEnd="handleDragEnd" @onDragStart="handleDragStart"
      @update:collapse="(val) => emit('update:collapse', val)">
      <SplitItem class="vue-split-item">
        <div class="vue-split-content content-1">
          <p v-if="!hideValues">{{ sizeLeftPercent.toFixed(1) }}%</p>
        </div>
      </SplitItem>
      <SplitItem class="vue-split-item">
        <div class="vue-split-content content-2">
          <p v-if="!hideValues">{{ sizeRightPercent.toFixed(1) }}%</p>
        </div>
      </SplitItem>
    </SplitWrapper>
  </div>
</template>

<style>
.vue-split-container {
  height: 256px;
  border: 4px dashed rgba(229, 231, 235, 0.4);
  border-radius: 0.5rem;
}

.vue-split {
  height: 100%;
}

.vue-split.horizontal {
  display: flex;
  flex-direction: row;
}

.vue-split.horizontal .vue-split-content {
  height: 100%;
}

.gutter {
  background-color: #eee;
  background-repeat: no-repeat;
  background-position: 50%;
}

.gutter.gutter-horizontal {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==');
  cursor: col-resize;
}

.gutter.gutter-vertical {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=');
  cursor: row-resize;
}

.vue-split-item {
  height: 100%;
  overflow: hidden;
}

.vue-split-content {
  padding: 16px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-1 {
  background: v-bind(content1Bg);
}

.content-2 {
  background: v-bind(content2Bg);
}

.example-title {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 16px;
}
</style>
