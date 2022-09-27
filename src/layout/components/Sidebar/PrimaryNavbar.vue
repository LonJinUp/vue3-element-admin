<template>
    <div class="primary-navbar-wrapper">
        <el-menu
            class="primary-navbar"
            background-color="#111827"
            text-color="#70747D"
            :router="true"
        >
            <!-- 侧边栏 -->
            <div class="logo-container shadow">
                <div class="logo-left">
                    <img class="logo-image" src="@/assets/logo.svg" alt="" />
                </div>
            </div>
            <div @mouseleave="handleMouseLeave">
                <div v-for="(item, index) in permissionMenu" :index="item.path">
                    <el-menu-item :key="item.path">
                        <div class="primary-navbar-item shadow top-item" :class="[(activeIndex == index || hoverIndex == index) ? 'active' : '']" @click="handleClick(item, index)"
                            @mouseenter="handleMouseEnter(item,index)">
                            <component class="icon" :is="item.icon"></component>
                            <span>{{item.title}}</span>
                        </div>
                    </el-menu-item>
                </div>
            </div>
            <div class="logout-wrapper">
                <el-popover placement="right" trigger="click" popper-class="logout-popper">
                    <template #reference>
                        <el-menu-item style="padding: 0" slot="reference">
                            <div class="primary-navbar-item bottom-item">
                                <component class="user-icon" is="Tools"></component>   
                            </div>
                        </el-menu-item>
                    </template>
                    <el-link @click="account" :underline="false" type="info" class="account">我的账号</el-link>
                    <el-link @click="logout" :underline="false" type="info" >退出登录</el-link>
                    
                </el-popover>
            </div>
        </el-menu>
    </div>
</template>
<script lang="ts" setup>
    import { ref } from 'vue'
    let activeIndex = ref(0)
    let hoverIndex = ref(-1)
    let ivMouseEnter = null
    const permissionMenu = ref([
        {
            title: '首页',
            caption: '首页',
            icon: 'HomeFilled',
            redirect: '/',
            path: ''
        },
        {
            title: '首页2',
            caption: '首页',
            icon: 'HomeFilled',
            redirect: '/a',
            path: ''
        }
    ])
    const handleMouseLeave = ()=>{
        hoverIndex.value = -1
    }
    const handleMouseEnter = (item:any,index: any)=>{
        console.log(item,index)
        hoverIndex.value = index
    }

    const handleClick = (item:any,index:any) =>{
        console.log(item,index)
    }
    const account = ()=>{

    }
    const logout = ()=>{

    }
</script>
<style lang="css" scoped>
   
    .primary-navbar-wrapper { position: fixed; top: 0; left: 0; bottom: 0; width: 60px; height: 100%; overflow: hidden; background: #111827;}
    .logo-container { width: 60px; height: 48px; display: flex; flex-direction: row; justify-content: center; align-items: center; }
    .logo-left { width: 36px; height: 36px; border-radius: 50%; background-color: blue; }
    .logo-left .logo-image { width: 36px; height: 36px;  border-radius: 50%;}
    .primary-navbar-item { display: flex; flex-direction: column; justify-content: center; align-items: center; }
    .top-item { padding: 12px 0; width: 60px; height: 60px; background: #111827; box-shadow: 0px -1px 0px 0px rgba(229, 231, 235, 0.05); padding: 0px 21px 0px 18px; color: rgb(112, 116, 125); transition: all .4s;}
    .top-item.active { color: #fff;}
    .bottom-item { padding: 20px 0; width: 100%;}
    .shadow { box-shadow: inset 0px -1px 0px 0px rgba(229, 231, 235, 0.05); }

    .icon-top,
    .icon-bottom { font-size: 25px; }
    .icon-bottom { color: #ffffff; }

    .logout-wrapper { position: absolute; bottom: 0; left: 0; right: 0;}
    .logout-popper { background: #FFFFFF; }

    .primary-navbar-wrapper >>> .el-menu { border: 0 !important;height: 100%;}
    .primary-navbar-wrapper >>> .el-menu-item { height: auto; line-height: 16px; padding: 0;}
    .primary-navbar-wrapper >>> .el-menu-item [class^="el-icon-"] { margin: 0; }
    .primary-navbar-wrapper >>> .el-menu-item span { font-size: 12px; width: auto !important; height: auto !important; visibility: visible !important;}
    .primary-navbar-wrapper >>> .el-menu-item { padding: 0 !important;}
</style>
<style>
    .logout-popper.el-popper {width: 80px !important; min-width: 0; }
    .logout-popper.el-popper[x-placement^="right"] .popper__arrow,
    .logout-popper.el-popper[x-placement^="right"] .popper__arrow::after { border-right-color: #FFFFFF; }
    .logout-popper .el-link.el-link--info{
        color: #111827 ;
        height: 32px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        width: 80px;
        margin-left:-12px ;
    }
    .logout-popper .el-link.el-link--info:hover{
        background: #ECF0FC;
        color: #456CE6;
    }
    .logout-wrapper .user-icon{
        width: 30px;
        margin: 0 auto;
        display: block;
    }
</style>