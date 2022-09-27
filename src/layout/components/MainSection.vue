<template>
    <div class="main-section-wrapper">
        <tab-page />
        <bread-crumb />
        <div class="container">
            
        </div>
    </div>
</template>
<script lang="ts" setup>
import TabPage from './TabPage.vue';
import BreadCrumb from './BreadCrumb.vue'
</script>
<style scoped>
.main-section-wrapper { flex: 1; position: relative; background: #fff;overflow-x: hidden;}
.container { height: calc(100% - 80px); padding: 20px; overflow-y: auto; box-sizing: border-box;}
</style>