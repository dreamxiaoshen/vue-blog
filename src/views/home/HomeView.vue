<script setup>

import { ArrowDownBold } from '@element-plus/icons-vue'
import { ref } from "vue";
import slidebar from "@/components/slidebar/sideBar.vue";
//通过函数向下滚动，用按钮进行控制
const scrollDown = () => {
    window.scrollTo({
        behavior: "smooth",
        top: document.documentElement.clientHeight
    });
}

const text = ref(['一执一念一浮生，一悲一喜一枉然', '青春', '梦想', '努力', '奋斗', '创造', '改变'])
</script>

<template>
    <div class="home-container">
        <el-icon @click="scrollDown" class="home-icon">
            <ArrowDownBold />
        </el-icon>
        <div class="home-text">
            <div style="display: flex; justify-content: center; align-items: center;">
                <text>风雨</text>
            </div>
            <!-- 打字机效果 -->
            <div>
                <vuetyped class="typedClass" :strings="text" :showCursor="true" :typeSpeed="300" :loop="true">
                    <div class="typing"></div>
                </vuetyped>
            </div>

        </div>
    </div>
    <div class="home-main-container">
        <div class="home-main">
            <div class="left-container">

            </div>
            <div class="right-container">
                <slidebar></slidebar>
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
.home-container {
    display: flex;
    justify-content: center;
    height: 100vh;
    background: rgb(0, 0, 0, 0.5) fixed;

    .home-text {
        position: absolute;
        top: 42%;
        font-size: 50px;
        font-weight: bold;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 80vw;

    }

    .home-icon {
        position: absolute;
        bottom: 10px;
        color: white;
        cursor: pointer;
    }
}

.home-main-container {
    height: 100%;
    display: flex;
    justify-content: center;

    .home-main {
        min-width: 900px;
        //width: 1200px;
        display: flex;
        flex-direction: row;
        margin-top: 50px;

    }
}

.typedClass {
    display: flex;
    align-items: center;
    font-size: 23px;
    justify-content: center;
    font-weight: normal;

    .typing {
        margin: 0.6em 0;
    }

    :deep(.typed-cursor) {
        font-size: 20px;
        margin: 0.6em 0;
    }
}

.left-container {
    background-color: aqua;
    height: 800px;
    width: 900px;
    margin-left:15px;
}

.right-container {
    height: 100%;
    width: 280px;
    margin:0 15px;
}
</style>