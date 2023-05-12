# Styles
::: info
Important Note
Split.js does not set CSS beyond the minimum needed to manage the width or height of the elements. This is by design. It makes Split.js flexible and useful in many different situations. If you create a horizontal split, you are responsible for (likely) floating the elements and the gutter, and setting their heights. See the CSS section below. If your gutters are not showing up, check the applied CSS styles.

THIS IS THE #1 QUESTION ABOUT THE LIBRARY.
:::
Below are examples of minimal css code that can be used to display components correctly, but you are free to use your own styles
```html
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
  height: 100%;
}
```
