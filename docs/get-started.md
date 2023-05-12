# Get Started

VueSplit is Vue3 wrapper for Split.js

## Installation


```bash
pnpm i vue-split
```

## Import

Simply importing the two components you need from `vue-split`

```html
<script setup lang="ts">
import { SplitWrapper, SplitItem } from 'vue-split'
</script>

<template>
  <SplitWrapper>
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
