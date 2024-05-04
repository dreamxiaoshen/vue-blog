<script setup>
import slidebar from "@/components/slidebar/sideBar.vue";
import { ref } from "vue";
const color = ['#03a9f4', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#9e9e9e', '#607d8b'];
import { tagGetService } from "@/api/userInfo.js"
const getTag=async ()=>{
    const res=await tagGetService()
    tagList.value=res.data
}
const tagList =ref([
    {id: 1, name: '标签1'},
    {id: 2, name: '标签2'},
    {id: 3, name: '标签3'},
    {id: 4, name: '标签4'},
    {id: 5, name: '标签5'},
    {id: 6, name: '标签6'},
    {id: 7, name: '标签7'},
    {id: 8, name: '标签8'},
    {id: 9, name: '标签9'},
    {id: 10, name: '标签10'},
    {id: 11, name: '标签11'},
    {id: 12, name: '标签12'},
    {id: 13, name: '标签13'},
    {id: 14, name: '标签14'},
    {id: 15, name: '标签15'},
    {id: 16, name: '标签16'},
    {id: 17, name: '标签17'},
]) 
getTag()
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
                                }" v-for="item in tagList" :key="item" :to="'/tags/' + item.name">
                                    {{ item.name }}
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



</style>