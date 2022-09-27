<template>
    <div class="bread-crumb-wrapper">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<style lang="scss" scoped>
.bread-crumb-wrapper{
    height: 32px;
    background-color: #fff;
    box-shadow: inset 0px -1px 0px 0px rgba(229, 231, 235, 1);
    padding: 0 20px;
    box-sizing: border-box;
}
</style>