<script setup>
import slidebar from "@/components/slidebar/sideBar.vue";


</script>

<template>
    <div>
        <div class="home-container">
            <div class="home-text">
                <div style="display: flex; justify-content: center; align-items: center;">
                    <text>分类</text>
                </div>

            </div>
        </div>
        <div class="home-main-container">
            <div class="home-main">
                <div class="left-container">
                    <div class="left-container-card">
                        <el-card class="main-card">
                            <div style="display: flex;" class="category-item" v-for="item in 10" :key="item">
                                <div class="circle"></div>
                                <text style="margin-left: 10px;" class="category-name">分类1</text>
                                <text style="margin-left: 10px;color: gray;">(10)</text>
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
//引入通用样式
@import '@/components/css/pageCss.scss';

.left-container-card {
    width: 100%;
}

.main-card {
    margin:8px;
    min-height: 300px;
}

/* 圆环 */
.circle {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fff;
    border: 5px solid #80c8f8;
    transition: all 0.3s;
}

.category-item {
    padding: 10PX;

    &:hover {
        .circle {
            border: 5px solid hsl(30, 94%, 47%);
        }



    }

    .category-name {
        cursor: pointer;

        &:hover {
            color: #80c8f8;
        }

    }
}
</style>