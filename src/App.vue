<script setup>
import topNavBarVue from "./components/layout/topNavBar.vue";
import Footer from "./components/layout/footerBar.vue";

import { useScroll } from '@vueuse/core'
const { y } = useScroll(window)
</script>
<template>
  <topNavBarVue></topNavBarVue>
  <div style="height: 800px;">
    <div class="app-header-sticky" :class="{ show: y > 50 }">
      <div class="container">

      </div>
    </div>
  </div>
  <Footer></Footer>
</template>



<style>
* {
  padding: 0;
  margin: 0;
}

.app-header-sticky {
  width: 100%;
  height: 50px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color:#b1a9a9;
  border-bottom: 1px solid #e4e4e4;
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
