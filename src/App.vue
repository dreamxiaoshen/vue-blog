<script setup>
import topNavBarVue from "./components/layout/topNavBar.vue";
import Footer from "./components/layout/footerBar.vue";
import Home from "@/views/home/HomeView.vue";

</script>
<template>
  <div class="app-container">
    <topNavBarVue></topNavBarVue>
    <Home></Home>

    <Footer></Footer>
  </div>

</template>



<style lang="scss">
* {
  padding: 0;
  margin: 0;
  
}
.app-container{
  background: url("@/assets/bg.jpg") no-repeat fixed;
  background-size: 100%;
}
</style>
