<script setup>
import slidebar from "@/components/slidebar/sideBar.vue";
const activities = [
  {
    content: '20',
    timestamp: '2018-08',
  },
  {
    content: '10',
    timestamp: '2018-06',
  },
  {
    content:'5',
    timestamp: '2018-04',
  }
];
</script>

<template>
    <div>
        <div class="home-container">
            <div class="home-text">
                <div style="display: flex; justify-content: center; align-items: center;">
                    <text>归档</text>
                </div>

            </div>
        </div>
        <div class="home-main-container">
            <div class="home-main">
                <div class="left-container">
                    <div class="left-container-card">
                        <el-card class="main-card">
                            <el-timeline style="max-width: 600px;margin:20px">
                                <div style="margin:20px;font-size:30px">
                                    文章总览-{{20}}
                                </div>
                                <el-timeline-item
                                v-for="item in activities"
                                :key="item"
                                :timestamp="item.timestamp"
                                class="custom-timeline-item"
                                >
                               共计：{{item.content}}
                                </el-timeline-item>
                            </el-timeline>
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

//归档页面样式
.custom-timeline-item{
font-size: 30px;
margin: 20px;
}

.category-item {
    padding: 10PX;

    &:hover {
        .circle {
            border: 5px solid hsl(30, 94%, 47%);
        }



    }

    .category-name {
        cursor: pointer;

        &:hover {
            color: #80c8f8;
        }

    }
}
</style>