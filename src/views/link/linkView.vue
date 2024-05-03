<script setup>
import slidebar from "@/components/slidebar/sideBar.vue";
</script>

<template>
    <div>
        <div class="home-container">
            <div class="home-text">
                <div style="display: flex; justify-content: center; align-items: center;">
                    <text>友链</text>
                </div>

            </div>
        </div>
        <div class="home-main-container">
            <div class="home-main">
                <div class="left-container">
                    <div class="left-container-card">
                        <el-card class="main-card">
                           <div>
                            菜就多练
                           </div>
                        </el-card>
                    </div>

                    <div class="right-container-left">
                        <slidebar></slidebar>
                    </div>
                </div>
                <div class="right-container">
                    <slidebar></slidebar>
                </div>

            </div>

        </div>
    </div>

</template>

<style lang="scss" scoped>
/* 引入通用样式 */
@import '@/components/css/pageCss.scss';

.left-container-card {
    width: 100%;
}

.main-card {
    margin: 8px;
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
}












</style>