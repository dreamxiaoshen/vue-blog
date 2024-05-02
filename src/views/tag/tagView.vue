<script setup>
import slidebar from "@/components/slidebar/sideBar.vue";
const color = ['#03a9f4', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#9e9e9e', '#607d8b'];
</script>

<template>
    <div>
        <div class="home-container">
            <div class="home-text">
                <div style="display: flex; justify-content: center; align-items: center;">
                    <text>标签</text>
                </div>

            </div>
        </div>
        <div class="home-main-container">
            <div class="home-main">
                <div class="left-container">
                    <div class="left-container-card">
                        <el-card class="main-card">
                            <div class="tag-cloud">
                                <router-link :style="{
                                    'font-size': Math.floor(Math.random() * 20) + 15 + 'px',
                                    'color': color[Math.floor(Math.random() * 20)]
                                }" v-for="item in 50" :key="item" :to="'/tags/' + item.id">
                                    标签
                                </router-link>

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
}


.tag-cloud {
    text-align: center;
}

.tag-cloud a {
    color: #616161;
    display: inline-block;
    text-decoration: none;
    padding: 0 8px;
    line-height: 2;
    transition: all 0.3s;
}

.tag-cloud a:hover {
    color: #03a9f4 !important;
    transform: scale(1.1);
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