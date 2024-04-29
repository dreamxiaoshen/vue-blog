<template>
<div class="home-container">
<button @click="scrollDown">anniu</button>
</div>
<div class="home-main-container">

</div>
</template>

<script setup>
//通过函数向下滚动，用按钮进行控制
const scrollDown=()=> {
      window.scrollTo({
        behavior: "smooth",
        top: document.documentElement.clientHeight
      });
    }
</script>

<style lang="scss" scoped>
.home-container{
    height: 100vh;
    background:rgb(0, 0, 0,0.5) fixed
}
.home-main-container{
    height: 800px;
}
</style>