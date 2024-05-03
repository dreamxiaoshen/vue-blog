<script setup>
import slidebar from "@/components/slidebar/sideBar.vue";
import { useRoute } from "vue-router";
const route = useRoute()
const tagTitle = route.params.tagTitle;
const tagArticle = [
    {
        id: "1",
        title: "Vue.js 2.0 发布，带来全新的特性",
        timestamp: "2021-08-10"
    },
    {
        id: "2",
        title: "Vue.js 3.0 发布，带来全新的特性",
        timestamp: "2021-08-11"
    },
    {
        id: "3",
        title: "Vue.js 4.0 发布，带来全新的特性",
        timestamp: "2021-08-12"
    },
    {
        id: "4",
        title: "Vue.js 5.0 发布，带来全新的特性",
        timestamp: "2021-08-13"
    },
    {
        id: "5",
        title: "Vue.js 6.0 发布，带来全新的特性",
        timestamp: "2021-08-14"
    },
    {
        id: "6",
        title: "Vue.js 7.0 发布，带来全新的特性",
        timestamp: "2021-08-15"
    },
];
</script>

<template>
    <div>
        <div class="home-container">
            <div class="home-text">
                <div style="display: flex; justify-content: center; align-items: center;">
                    <text>{{ tagTitle }}</text>
                </div>

            </div>
        </div>
        <div class="home-main-container">
            <div class="home-main">
                <div class="left-container">
                    <div class="left-container-card">
                        <el-card class="main-card">
                            <el-timeline style="max-width: 600px;margin:20px">
                                <el-timeline-item v-for="item in tagArticle" :key="item" class="custom-timeline-item" @click="router.push('/article/' + item.id)">
                                    <div class="custom-timeline-item-content">
                                        <div>
                                            <img src="@/assets/articlebg.jpg"
                                                style="width: 100px; height: 100px;  object-fit: cover;">
                                        </div>
                                        <div style="margin-left: 20px;">

                                            <div style="font-size: 15px;">{{ item.timestamp }}</div><br>
                                            <div class="custom-timeline-item-title"
                                                style="font-size: 20px; font-weight: bold;">{{ item.title }}</div>
                                        </div>
                                    </div>


                                </el-timeline-item>
                            </el-timeline>
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
    font-size: 30px;
}

.custom-timeline-item {

    .custom-timeline-item-content {
        display: flex;
        flex-direction: row;
    }
}

.custom-timeline-item-content {
    border: none;
    border-radius: 6px;
    -webkit-transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
    transition: all 250ms cubic-bezier(.02, .01, .47, 1);
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15);
        transform: translate(0, -5px);
        transition-delay: 0s !important;

        .custom-timeline-item-title {

            color: #80c8f8;

        }
    }



}
</style>