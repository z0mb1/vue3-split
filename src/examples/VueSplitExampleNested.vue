
<script setup lang="ts">
import { SplitWrapper, SplitItem } from '../components'
</script>

<template>
  <div class="vue-split-container">
    <SplitWrapper :sizes="[25, 75]" :minSize="0" class="vue-split horizontal">
      <SplitItem class="vue-split-item">
        <SplitWrapper :sizes="[40, 60]" :minSize="0" class="vue-split horizontal">
          <SplitItem class="vue-split-item">
            <div class="vue-split-content nested-content-1">
            </div>
          </SplitItem>
          <SplitItem class="vue-split-item">
            <div class="vue-split-content nested-content-2">
            </div>
          </SplitItem>
        </SplitWrapper>
      </SplitItem>
      <SplitItem class="vue-split-item">
        <SplitWrapper :sizes="[70, 30]" :minSize="0" direction="vertical" class="vue-split vertical">
          <SplitItem class="vue-split-item">
            <div class="vue-split-content nested-content-1">
            </div>
          </SplitItem>
          <SplitItem class="vue-split-item">
            <SplitWrapper :sizes="[50, 50]" :minSize="0" class="vue-split horizontal">
              <SplitItem class="vue-split-item">
                <div class="vue-split-content nested-content-1">
                </div>
              </SplitItem>
              <SplitItem class="vue-split-item">
                <div class="vue-split-content nested-content-2">
                </div>
              </SplitItem>
            </SplitWrapper>
          </SplitItem>
        </SplitWrapper>
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

.nested-content-1 {
  background: rgba(0, 256, 0, .5);
}

.nested-content-2 {
  background: rgba(0, 0, 256, .5);
}
</style>

