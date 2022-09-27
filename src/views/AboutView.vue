<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-tag class="ml-2" type="success">Tag 2</el-tag>
    <el-tag
    v-for="tag in tags"
    :key="tag.name"
    class="mx-1"
    closable
    :type="tag.type"
  >
    {{ tag.name }}
  </el-tag>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  
  const tags = ref([
    { name: 'Tag 1', type: '' },
    { name: 'Tag 2', type: 'success' },
    { name: 'Tag 3', type: 'info' },
    { name: 'Tag 4', type: 'warning' },
    { name: 'Tag 5', type: 'danger' },
  ])
  </script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
