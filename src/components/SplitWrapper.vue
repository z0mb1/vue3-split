<template>
  <div class="split">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import Split from 'split.js'
import { ref, provide, watch, onBeforeUnmount } from 'vue'

export interface Props {
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
}

const props = withDefaults(defineProps<Props>(), {
  minSize: 100,
  maxSize: Infinity,
  expandToMin: false,
  gutterSize: 10,
  gutterAlign: 'center',
  snapOffset: 30,
  dragInterval: 1,
  direction: 'horizontal',
})

const emit = defineEmits<{
  (event: 'onDrag', sizes: number[]): void,
  (event: 'onDragStart', sizes: number[]): void,
  (event: 'onDragEnd', sizes: number[]): void,
  (event: 'update:collapse', value: null): void
}>()

const split = ref<Split.Instance | null>(null);
const splitItems = ref<HTMLElement[]>([]);

provide('splitItems', splitItems);

const init = () => {
  split.value = Split(splitItems.value, {
    sizes: props.sizes,
    minSize: props.minSize,
    maxSize: props.maxSize,
    expandToMin: props.expandToMin,
    gutterSize: props.gutterSize,
    gutterAlign: props.gutterAlign,
    snapOffset: props.snapOffset,
    dragInterval: props.dragInterval,
    direction: props.direction,
    cursor: props.direction === 'vertical' ? 'row-resize' : 'col-resize',
    onDrag: (sizes) => emit('onDrag', sizes),
    onDragStart: (sizes) => emit('onDragStart', sizes),
    onDragEnd: (sizes) => emit('onDragEnd', sizes),
  })
}

watch(() => splitItems.value.length, () => {
  init()
})

watch(() => props.direction, () => {
  init()
})

watch(() => props.collapse, (val) => {
  if (split.value && val !== null && val !== undefined && typeof val === 'number') {
    split.value.collapse(val)
    emit('update:collapse', null)
  }
})

watch(() => props.sizes, (val) => {
  if (split.value && val && Array.isArray(val) && val.length > 0 && val.length === splitItems.value.length) {
    split.value.setSizes(val)
  }
})

onBeforeUnmount(() => {
  if (split.value) {
    split.value.destroy()
  }
})
</script>