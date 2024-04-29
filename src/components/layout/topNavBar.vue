<script setup>
import { useScroll } from '@vueuse/core'
const { y } = useScroll(window)
import { HomeFilled, List, Menu, Management, HelpFilled, Promotion, Comment } from '@element-plus/icons-vue'
</script>
<template>
    <div class="top-nav-bar">
        <div style="font-size:18px;font-weight:bold;">
            <router-link to="/" style="text-decoration: none;color: white;">
                风雨
            </router-link>
        </div>
        <div class="nav-title">

            <div class="menus-item">

                <router-link to="/">

                    <el-icon style="position: absolute;bottom: 3px;left:-16px;">
                        <HomeFilled />
                    </el-icon>
                    首页


                </router-link>
            </div>
            <div class="menus-item">
                <router-link to="/archives">
                    <el-icon style="position: absolute;bottom: 3px;left:-16px;">
                        <List />
                    </el-icon>
                    归档
                </router-link>
            </div>
            <div class="menus-item">
                <router-link to="/categories">
                    <el-icon style="position: absolute;bottom: 3px;left:-16px;">
                        <Menu />
                    </el-icon>
                    分类
                </router-link>
            </div>
            <div class="menus-item">
                <router-link to="/tags">
                    <el-icon style="position: absolute;bottom: 3px;left:-16px;">
                        <Management />
                    </el-icon>
                    标签
                </router-link>
            </div>
            <div class="menus-item">
                <router-link to="/links">
                    <el-icon style="position: absolute;bottom: 3px;left:-16px;">
                        <HelpFilled />
                    </el-icon>
                    友链
                </router-link>
            </div>
            <div class="menus-item">
                <router-link to="/about">
                    <el-icon style="position: absolute;bottom: 3px;left:-16px;">
                        <Promotion />
                    </el-icon>
                    关于
                </router-link>
            </div>
            <div class="menus-item">
                <router-link to="/message">
                    <el-icon style="position: absolute;bottom: 3px;left:-16px;">
                        <Comment />
                    </el-icon>
                    留言
                </router-link>
            </div>
        </div>

    </div>
    <div class="app-header-sticky" :class="{ show: y > 50 }">
        <div class="top-nav-bar-fu">
            <div style="font-size:18px;font-weight:bold;">
                <router-link to="/" style="text-decoration: none;color: black;">
                    风雨
                </router-link>
            </div>
            <div class="nav-title-fu">

                <div class="menus-item-fu">

                    <router-link to="/">

                        <el-icon style="position: absolute;bottom: 3px;left:-16px;">
                            <HomeFilled />
                        </el-icon>
                        首页


                    </router-link>
                </div>
                <div class="menus-item-fu">
                    <router-link to="/archives">
                        <el-icon style="position: absolute;bottom: 3px;left:-16px;">
                            <List />
                        </el-icon>
                        归档
                    </router-link>
                </div>
                <div class="menus-item-fu">
                    <router-link to="/categories">
                        <el-icon style="position: absolute;bottom: 3px;left:-16px;">
                            <Menu />
                        </el-icon>
                        分类
                    </router-link>
                </div>
                <div class="menus-item-fu">
                    <router-link to="/tags">
                        <el-icon style="position: absolute;bottom: 3px;left:-16px;">
                            <Management />
                        </el-icon>
                        标签
                    </router-link>
                </div>
                <div class="menus-item-fu">
                    <router-link to="/links">
                        <el-icon style="position: absolute;bottom: 3px;left:-16px;">
                            <HelpFilled />
                        </el-icon>
                        友链
                    </router-link>
                </div>
                <div class="menus-item-fu">
                    <router-link to="/about">
                        <el-icon style="position: absolute;bottom: 3px;left:-16px;">
                            <Promotion />
                        </el-icon>
                        关于
                    </router-link>
                </div>
                <div class="menus-item-fu">
                    <router-link to="/message">
                        <el-icon style="position: absolute;bottom: 3px;left:-16px;">
                            <Comment />
                        </el-icon>
                        留言
                    </router-link>
                </div>
            </div>

        </div>
    </div>
</template>



<style lang="scss" scoped>
.top-nav-bar {
    height: 50px;
    background:rgb(0, 0, 0,0.5);
    //color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

}

.top-nav-bar-fu {
    height: 50px;
    background-color: rgba(255, 255, 255, 0.6);
    //color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

}

.nav-title {
    display: flex;
    flex-direction: row;

    .menus-item {
        margin: 0 15px;
        position: relative;

        /* 选择元素中的所有子元素 */
        &>* {
            text-decoration: none;
            color: #fff;

        }
    }
}
.nav-title-fu {
    display: flex;
    flex-direction: row;

    .menus-item-fu {
        margin: 0 15px;
        position: relative;

        /* 选择元素中的所有子元素 */
        &>* {
            text-decoration: none;
            color: #000000;

        }
    }
}

.menus-item a:after {
    position: absolute;
    bottom: -5px;
    left: -15px;
    width: 0;
    height: 3px;
    background-color: #80c8f8;
    content: "";
    transition: all 0.3s;
}

.menus-item a {
    transition: all 0.2s;
}

.menus-item a:hover:after {


    width: 150%;

}


.app-header-sticky {
    width: 100%;
    height: 50px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    //background-color: #b1a9a9;
    //border-bottom: 1px solid #e4e4e4;
    /* // 此处为关键样式!!! */
    /* // 状态一：往上平移自身高度 + 完全透明 */
    transform: translateY(-100%);
    opacity: 0;

    /* // 状态二：移除平移 + 完全不透明 */
    &.show {
        transition: all 0.3s linear;
        transform: none;
        opacity: 1;
    }
}
</style>