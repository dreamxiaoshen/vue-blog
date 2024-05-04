<script setup>

import { ArrowDownBold } from '@element-plus/icons-vue'
import { ref } from "vue";
import slidebar from "@/components/slidebar/sideBar.vue";
import { useRouter } from "vue-router";
const router = useRouter();
import { userDataStore } from "@/stores/userDataStore";
import { userInfoGetService,articleListGetService } from "@/api/userInfo.js"
const DataStore = userDataStore();

//通过函数向下滚动，用按钮进行控制
const scrollDown = () => {
    window.scrollTo({
        behavior: "smooth",
        top: document.documentElement.clientHeight
    });
}
//获得用户信息
const getUserData = async () => {
    const res = await userInfoGetService();
    mainData.value = res.data
    DataStore.userData = mainData.value;
    // typeSentence.value = [...typeSentence.value, ...res.data.typeSentence]
}
//获得文章列表
const getArticleList = async () => {
    const res = await articleListGetService();
    articleList.value = res.data
    console.log(articleList.value)
}
const mainData = ref({/* 
    nickname: '风雨',
    introduction: '这是一个简介',
    announcement: '这是一个公告1111',
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
    ] */
})

const articleList =ref([
    /* {
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
    }, */
]) 

const typeSentence = ref([
    '那句我喜欢你，温暖了我一整个冬季',
    '我希望和你并排站在一起，看每个黄昏日落',
    '他们说，有风的地方 就是你爱着的人的灵魂在飞舞',
    '我们都是单翅的天使，只有拥抱才能飞翔',
    '只要换你一次微笑，就算是做梦也会笑',
    '无论你多么讨厌你的学校，当你离开久了，你还是会想念它',
    '不是人人都能活的低调，可以低调的基础是随时都能高调',
    '幽默就是一个人想哭的时候还有笑的兴致',
    '喜欢一个人，就是在一起很开心；爱一个人，就是即使不开心，也想在一起',
    '当看破一切的时候，才知道，原来失去比拥有更踏实',
    '当我向你倾诉我的烦恼，那不是抱怨，那是我对你的信任',
    '任何事情都应该去尝试一下，因为你无法知道，什么样的事或者什么样的人将会改变你的一生',
    '眼泪，是为了洗净眼睛，让我们看清事实',
    '别人怎么看你，和你毫无关系 你要怎么活，也和别人毫无关系',
    '记住，不是所有人都是真心 所以，不要那么轻易的就去相信',
    '爱情就是个梦，而我睡过了头',
    '我独自说的对白，静候彼岸花的盛开',
    '你永远都不知道自己有多坚强，直到变得坚强成了你唯一的选择 ',
    '没有一种悲伤是不能被时间减轻的 ',
    '时间，可以了解爱情，可以证明爱情，也可以推翻爱情 ',
    '放弃、你说得如此容易 我却要用尽力气去执行 ',
    '不是所有的付出都有回报的，但我不想成为那个少数的意外 ',
    '侵泡过眼泪的微笑最美丽，体味过挫折的成功最可贵 ',
    '为了不让生活留下遗憾和后悔，我们应该尽可能抓住一切改变生活的机会 ',
    '有意思的体悟是，伤害你最深的人，往往是那些声称永远不会伤害你的人 ',
    '不想难过，不想流泪，就不要去好奇那些不该看的东西 ',
    '有时候，你问的问题，对方一直在闪躲，那就是委婉的告诉你，真实的回答很残忍 ',
    '只要爱着一个人，也就永远会有失望的时刻',
    '活着，就是要活得比昨天好一些，再好一些，要爱得比昨天幸福一些，再幸福一些 ',
    '如果有人问起，就说忘了 不解释，不悲伤 ',
    '有些人有些事，当我们懂得的时候已不在年轻 ',
    '如果必须失去，但愿是忧愁 如果必须遗忘，但愿是烦恼 ',
    '你默默地笑着，不对我说一句话，但我感觉，为了这个，我期待了很久了 ', 
    '没什么比等待更难受，当你连自己在等什么都不知道的时候 ',
    '我想拥抱每个人，但我得先温暖我自己，请容忍我 ',
    '我一直在关注你，用一切你知道或不知道的方式 ',
    '每个人心中都有一道伤，那是曾经天塌下的地方 ',
    '多少人以友谊的名义，爱一个人 ',
    '有勇气说出那些话，却没有勇气去承受之后的那些痛苦 ',
])
getUserData();
getArticleList()
</script>

<template>
    <div>
        <div class="home-container">
            <el-icon @click="scrollDown" class="home-icon">
                <ArrowDownBold />
            </el-icon>
            <div class="home-text">
                <div style="display: flex; justify-content: center; align-items: center;">
                    <text>{{ mainData.nickname }}</text>
                </div>
                <!-- 打字机效果 -->
                <div>
                    <vuetyped class="typedClass" :strings="typeSentence" :showCursor="true" :typeSpeed="200"
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

                        <div class="article-card" v-for="item in articleList" :key="item.id"
                            @click="router.push('/article/' + item.id)">
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
                                        <text>{{ item.createTime.split('T')[0] }}</text>
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
        width: 100%
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
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
    }

    .right-container {
        display: none;
    }
}
</style>