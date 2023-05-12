# Props
Component props.
::: info
Detailed description of the parameters on the <a href="https://github.com/nathancahill/split/tree/master/packages/splitjs#options" target="_blank">official documentation page Split.js</a>
:::

| Options        | Type                             | Default        | Description                                              |
| -------------- | -------------------------------  | -------------- | -------------------------------------------------------- |
| `sizes`        | `number[]`                       |                | Initial sizes of each element in percents or CSS values. |
| `minSize`      | `number` \| `number[]`           | `100`          | Minimum size of each element.                            |
| `maxSize`      | `number` \| `number[]`           | `Infinity`     | Maximum size of each element.                            |
| `expandToMin`  | `boolean`                        | `false`        | Grow initial sizes to `minSize`                          |
| `gutterSize`   | `number`                         | `10`           | Gutter size in pixels.                                   |
| `gutterAlign`  | `start` \| `end` \| `center`     | `'center'`     | Gutter alignment between elements.                       |
| `snapOffset`   | `number`                         | `30`           | Snap to minimum size offset in pixels.                   |
| `dragInterval` | `number`                         | `1`            | Number of pixels to drag.                                |
| `direction`    | `horizontal` \| `vertical`       | `'horizontal'` | Direction to split: horizontal or vertical.              |

# Emits
Component emits.
| Emits             | Payload         | Description                                              |
| ----------------- | --------------- | -------------------------------------------------------- |
| `onDrag`          | sizes: number[] | Callback on drag.                                        |
| `onDragStart`     | sizes: number[] | Callback on drag start.                                  |
| `onDragEnd`       | sizes: number[] | Callback on drag end.                                    |
| `update:collapse` | null            | Callback after collapse one of items.                    |

# API
You can use the `collapse` prop to manually collapse the element.  
To achieve this you need to use `v-model` directive and set the index of the element you want to collapse.  
It will be automatically collapse when the value of the prop changes and emit event to set the value to null.  
[See the example here](./example-collapse)

```html
<script setup lang="ts">
import { SplitWrapper, SplitItem } from 'vue-split'

const collapse = ref<number | null>(null)

const collapseFirstElement = () => {
  collapse.value = 0
}
</script>

<template>
  <SplitWrapper v-model:collapse="collapse">
    <SplitItem>
      <div>First item</div>
    </SplitItem>
    <SplitItem>
      <div>Second item</div>
    </SplitItem>
  </SplitWrapper>
</template>
</script>
```
