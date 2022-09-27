<template>
    <div class="sidebar-wrapper">
        <primary-navbar  />
        <secondary-navbar ref="secondarNavBar"  />
    </div>
</template>
<script lang="ts" setup>
import PrimaryNavbar from './PrimaryNavbar.vue';
import SecondaryNavbar from './SecondaryNavbar.vue';
</script>
<style scoped>
.sidebar-wrapper { min-width: 206px; overflow: hidden;}
.sidebar-wrapper.hasNotSecNavbar { min-width: 60px;}
</style>