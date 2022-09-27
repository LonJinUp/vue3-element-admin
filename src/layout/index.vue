<template>
    <div class="app-container">
        <sidebar />
        <main-section />
    </div>
</template>
<script lang="ts" setup>
import MainSection from './components/MainSection.vue';
import Sidebar from './components/Sidebar/index.vue';
</script>
<style lang="scss">
    .app-container{
        position: relative;
        height: 100%;
        width: 100%;
        display: flex;
    }
</style>