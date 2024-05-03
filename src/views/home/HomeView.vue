<script setup>

import { ArrowDownBold } from '@element-plus/icons-vue'
import { ref } from "vue";
import slidebar from "@/components/slidebar/sideBar.vue";
import { useRouter } from "vue-router";
const router = useRouter();
import {userDataStore} from "@/stores/userDataStore";
const DataStore = userDataStore();

//通过函数向下滚动，用按钮进行控制
const scrollDown = () => {
    window.scrollTo({
        behavior: "smooth",
        top: document.documentElement.clientHeight
    });
}

const mainData = ref({
    nickName: '风雨',
    introduction: '这是一个简介',
    announcement:'这是一个公告1111',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    articleCount: 100,
    categoryCount: 10,
    tagCount: 15,
    github: 'https://github.com/dreamxiaoshen',
    gitee: 'https://gitee.com/dreamxiaoshen',
    qq: 'https://res.abeim.cn/api/qq/?qq=718279373',
    email: 'http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=EiUjKiAlKyElIVJjYzxxfX8',
    categoryList: [
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
    ],
    tagList: [
        { id: 1, name: '标签1' },
        { id: 2, name: '标签2' },
        { id: 3, name: '标签3' },
        { id: 4, name: '标签4' },
        { id: 5, name: '标签5' },
        { id: 6, name: '标签6' },
        { id: 7, name: '标签7' },
        { id: 8, name: '标签8' },
        { id: 9, name: '标签9' },
        { id: 10, name: '标签10' },
        { id: 11, name: '标签11' },
        { id: 12, name: '标签12' },
        { id: 13, name: '标签13' },
        { id: 14, name: '标签14' },
        { id: 15, name: '标签15' },
        { id: 16, name: '标签16' },
        { id: 17, name: '标签17' },
    ],
    activities: [
        {
            content: '20',
            timestamp: '2018-08',
        },
        {
            content: '10',
            timestamp: '2018-06',
        },
        {
            content: '5',
            timestamp: '2018-04',
        }
    ],
    typeSentence: [
        '一执一念一浮生，一悲一喜一枉然',
        '一生一世一轮回，一生一世一场梦',
        '一生一世一场雨，一生一世一场雪',
        '一生一世一场风，一生一世一场雾',
        '一生一世一场雷，一生一世一场霜',
        '一生一世一场雾，一生一世一场霾',
    ]
})
const articleList = [
    {
        id: 1,
        title: "文章标题1",
        tag: "标签1",
        category: "分类1",
        date: "2022-01-01",
        content: "文章内容1",
        background: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
    },
    {
        id: 2,
        title: "文章标题2",
        tag: "标签2",
        category: "分类2",
        date: "2022-01-02",
        content: "文章内容2",
        background: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
    },
    {
        id: 3,
        title: "文章标题3",
        tag: "标签3",
        category: "分类3",
        date: "2022-01-03",
        content: "文章内容3",
        background: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
    },
    {
        id: 4,
        title: "文章标题4",
        tag: "标签4",
        category: "分类4",
        date: "2022-01-04",
        content: "文章内容4",
        background: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
    },
]
DataStore.userData=mainData.value;
//console.log(DataStore);
</script>

<template>
    <div>
        <div class="home-container">
            <el-icon @click="scrollDown" class="home-icon">
                <ArrowDownBold />
            </el-icon>
            <div class="home-text">
                <div style="display: flex; justify-content: center; align-items: center;">
                    <text>{{ mainData.nickName }}</text>
                </div>
                <!-- 打字机效果 -->
                <div>
                    <vuetyped class="typedClass" :strings="mainData.typeSentence" :showCursor="true" :typeSpeed="200"
                        :loop="true">
                        <div class="typing"></div>
                    </vuetyped>
                </div>

            </div>
        </div>
        <div class="home-main-container">
            <div class="home-main">
                <div class="left-container">
                    <div class="article-container">

                        <div class="article-card" v-for="item in articleList" :key="item.id" @click="router.push('/article/'+item.id)">
                            <div style="height: 190px; ">
                                <img :src="item.background"
                                    style="width: 100%; height: 100%; border-radius:10px 10px 0px 0px;  object-fit: cover;">
                            </div>
                            <div class="article-card-content"
                                style="height: 130px;background-color: rgb(238, 229, 229); border-radius: 0px 0px 10px 10px   ; ">
                                <div style="padding: 15px;">
                                    <div style="font-size: 25px;">
                                        <text>{{ item.title }}</text>
                                    </div>
                                    <div class="home-text-small">
                                        <text>标签:</text>
                                        <text>{{ item.tag }}</text>
                                    </div>
                                    <div class="home-text-small">
                                        <text>分类:</text>
                                        <text>{{ item.category }}</text>
                                    </div>
                                    <div class="home-text-small">
                                        <text>发布于:</text>
                                        <text>{{ item.date }}</text>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="right-container-left">
                        <slidebar></slidebar>
                    </div>
                </div>
                <div class="right-container">
                    <slidebar :mainData="mainData"></slidebar>
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
        //height: 500px;
        width: 900px;
        margin-left: 15px;




    }

    .article-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
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
    .article-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
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
    .article-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
    }

    .right-container {
        display: none;
    }
}
</style>