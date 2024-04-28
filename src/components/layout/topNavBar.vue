<script setup>

</script>
<template>
    <div class="top-nav-bar">
        <div  style="font-size:18px;font-weight:bold;">
            <router-link to="/" style="text-decoration: none;color: white;">
                风雨
            </router-link>
        </div>
        <div class="nav-title">

            <div class="menus-item">
                <router-link to="/">
                    首页
                </router-link>
            </div>
            <div class="menus-item">
                <router-link to="/archives">
                    归档
                </router-link>
            </div>
            <div class="menus-item">
                <router-link to="/categories">
                    分类
                </router-link>
            </div>
            <div class="menus-item">
                <router-link to="/tags">
                    标签
                </router-link>
            </div>
            <div class="menus-item">
                <router-link to="/links">
                    友链
                </router-link>
            </div>
            <div class="menus-item">
                <router-link to="/about">
                    关于
                </router-link>
            </div>
            <div class="menus-item">
                <router-link to="/message">
                    留言
                </router-link>
            </div>
        </div>

    </div>
</template>



<style lang="scss" scoped>
.top-nav-bar {
    height: 50px;
    background-color: #b1a9a9;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}

.nav-title {
    display: flex;
    flex-direction: row;

    .menus-item {
        margin: 0 10px;
        position: relative;

        /* 选择元素中的所有子元素 */
        &>* {
            text-decoration: none;
            color: #fff;

        }
    }
}


.menus-item a:after {
    position: absolute;
    bottom: -5px;
    left: 0;
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


    width: 100%;

}
</style>