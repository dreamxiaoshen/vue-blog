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
    <div>
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
                    <div class="article-card" v-for="i in 11" :key="i">
                        <div style="height: 190px; ">
                            <img src="@/assets/articlebg.jpg"
                                style="width: 100%; height: 100%; border-radius:10px 10px 0px 0px;  object-fit: cover;">
                        </div>
                        <div class="article-card-content"
                            style="height: 130px;background-color: rgb(238, 229, 229); border-radius: 0px 0px 10px 10px   ; ">
                            <div style="padding: 15px;">
                                <div style="font-size: 25px;">
                                    <text>文章标题</text>
                                </div>
                                <div class="home-text-small">
                                    <text>标签:</text>
                                    <text>标签1</text>
                                </div>
                                <div class="home-text-small">
                                    <text>分类:</text>
                                    <text>分类1</text>
                                </div>
                                <div class="home-text-small">
                                    <text>发布于:</text>
                                    <text>2022-01-01</text>
                                </div>
                            </div>

                        </div>
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

.home-text-small {
    color: rgb(94, 89, 89);
    padding: 3px;

    &>* {
        padding: 5px;
    }
}

.article-card {
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
    }



}






//响应式布局（主代码）

@media(width>960px) {
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
            transition: all 0.3s;


        }
    }

    .left-container {
        height: 100%;
        width: 900px;
        margin-left: 15px;
        display: flex;
        flex-wrap: wrap;
        justify-content: wrap;


    }

    .article-card {
        height: 320px;
        width: 47%;
        background-color: aquamarine;
        margin: 10px;
        border-radius: 10px 10px 10px 10px;

    }

    .right-container {
        height: 100%;
        width: 280px;
        margin: 0 15px;


    }

    .right-container-left {
        display: none;

    }
}










@media (width< 961px) {
    .home-main-container {
        height: 100%;
        display: flex;
        justify-content: center;

        .home-main {
            min-width: 750px;
            //width: 1200px;
            display: flex;
            flex-direction: row;
            margin-top: 50px;


        }
    }

    .left-container {
        height: 100%;
        width: 900px;
        margin-left: 15px;
        display: flex;
        flex-wrap: wrap;
        justify-content: wrap;
        transition: all 0.3s;

    }

    .article-card {
        height: 320px;
        width: 45%;
        background-color: aquamarine;
        margin: 10px;
        border-radius: 10px 10px 10px 10px;
        transition: all 0.3s;
    }

    .right-container {
        display: none;
    }

    .right-container-left {
        width: 98%;
    }
}









@media (width< 800px) {
    .home-main-container {
        height: 100%;
        display: flex;
        justify-content: center;

        .home-main {
            min-width: 400px;
            //width: 1200px;
            display: flex;
            flex-direction: row;
            margin-top: 50px;

        }
    }

    .left-container {
        height: 100%;
        //width: 900px;
        //margin-left: 50px;
        display: flex;
        flex-wrap: wrap;
        justify-content: wrap;
    }

    .article-card {
        height: 320px;
        width: 100%;
        background-color: aquamarine;
        margin: 10px;
        border-radius: 10px 10px 10px 10px;
    }

    .right-container {
        display: none;
    }
}
</style>