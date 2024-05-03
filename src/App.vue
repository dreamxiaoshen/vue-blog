<script setup>
import topNavBarVue from "./components/layout/topNavBar.vue";
import Footer from "./components/layout/footerBar.vue";
//import Home from "@/views/home/HomeView.vue";

</script>
<template>
  <div class="app-container">
    <topNavBarVue></topNavBarVue>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <keep-alive>

            <component :is="Component" />

          
        </keep-alive>
      </transition>

    </router-view>
    <!-- <Home></Home> -->

    <Footer></Footer>
  </div>

</template>



<style lang="scss">
* {
  padding: 0;
  margin: 0;

}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}



.app-container {
  background: url("@/assets/bg.jpg") no-repeat fixed;
  background-size: cover;
  min-height: 100vh;
}

// 滚动条
*::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 2px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 5px;
}

*::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  height: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  // background: #E5E5E5;
  background: #80c8f8;
}

*::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #ffffff;
}
</style>
