# Vue3 Split

Vue3 Split is Vue JS wrapper for [Split.js](https://github.com/nathancahill/split/tree/master/packages/splitjs)


[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE.md)
![npm bundle size](https://img.shields.io/bundlephobia/min/vue3-split)

## Installation

```
npm i vue3-split
```

```
yarn add vue3-split
```

```
pnpm i vue3-split
```

---

## Demo & Documentation
> [https://z0mb1.github.io/vue3-split/](https://z0mb1.github.io/vue3-split/)
>

## Simple usage
``` html
<script setup lang="ts">
import { SplitWrapper, SplitItem } from 'vue-split'

</script>

<template>
  <SplitWrapper class="vue-split horizontal">
    <SplitItem class="vue-split-item">
      <div class="vue-split-content">
        ...
      </div>
    </SplitItem>
    <SplitItem class="vue-split-item">
      <div class="vue-split-content">
        ...
      </div>
    </SplitItem>
  </SplitWrapper>
</template>
```

```css
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

.vue-split-item {
  height: 100%;
  overflow: hidden;
}

.vue-split-content {
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
```
