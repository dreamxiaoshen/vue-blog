<script setup>
import slidebar from "@/components/slidebar/sideBar.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
const categoryList=ref([
    {
        id: 1,
        title: "分类1",
        count: 10
    },
    {
        id: 2,
        title: "分类2",
        count: 20
    },
    {
        id: 3,
        title: "分类3",
        count: 30
    },
    {
        id: 4,
        title: "分类4",
        count: 40
    },
    {
        id: 5,
        title: "分类5",
        count: 50
    },
    {
        id: 6,
        title: "分类6",
        count: 60
    },
    {
        id: 7,
        title: "分类7",
        count: 70
    },
    {
        id: 8,
        title: "分类8",
        count: 80
    },
    {
        id: 9,
        title: "分类9",
        count: 90
    },
    {
        id: 10,
        title: "分类10",
        count: 100
    }
]);
const router = useRouter();

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
                            <div style="display: flex;" class="category-item" v-for="item in categoryList" :key="item.id" @click="router.push('/categories/'+item.title)">
                                <div class="circle"></div>
                                <text style="margin-left: 10px;" class="category-name">{{item.title}}</text>
                                <text style="margin-left: 10px;color: gray;">({{ item.count }})</text>
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