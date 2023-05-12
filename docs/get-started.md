# Get Started

Vue3Split is Vue3 wrapper for Split.js

## Installation


```bash
pnpm i vue3-split
```

```bash
yarn add vue3-split
```

```bash
npm i vue3-split
```

## Prerequisites
::: warning
Temporary Config Required

The above usage requires setting `app.config.unwrapInjectedRef = true` to make injections automatically unwrap computed refs. This will become the default behavior in Vue 3.3 and this config is introduced temporarily to avoid breakage. It will no longer be required after 3.3.
:::

If you use Vue js below 3.3 you need to configure the following option in your Vue app:

```js
app.config.unwrapInjectedRef = true;
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
