<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { articleByIdService } from "@/api/userInfo.js";
//import slidebar from "@/components/slidebar/sideBar.vue";
const text = ref('');
const titles = ref('')
const route = useRoute();
const articleId = route.params.articleId;
console.log(articleId);


//console.log(text.value);
const getArticleList = async () => {
  const res = await articleByIdService(articleId);
  text.value = res.data.content;
  titles.value = res.data.title;

}

getArticleList()
/*  
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { articleByIdService } from "@/api/userInfo.js";
const text = ref('');

export default {
  data() {
    return {
      text,
      titles: [],
    };
  },
  mounted() {
    const anchors = this.$refs.preview.$el.querySelectorAll('h1,h2,h3,h4,h5,h6');
    const titles = Array.from(anchors).filter((title) => !!title.innerText.trim());

    if (!titles.length) {
      this.titles = [];
      return;
    }

    const hTags = Array.from(new Set(titles.map((title) => title.tagName))).sort();

    this.titles = titles.map((el) => ({
      title: el.innerText,
      lineIndex: el.getAttribute('data-v-md-line'),
      indent: hTags.indexOf(el.tagName),
    }));
  },
  methods: {



    handleAnchorClick(anchor) {
      const { preview } = this.$refs;
      const { lineIndex } = anchor;

      const heading = preview.$el.querySelector(`[data-v-md-line="${lineIndex}"]`);

      if (heading) {
        // 注意：如果你使用的是编辑组件的预览模式,则这里的方法名改为 previewScrollToTarget
        preview.scrollToTarget({
          target: heading,
          scrollContainer: window,
          top: 60,
        });
      }
    },
  },




  setup() {

    const route = useRoute();
    const articleId = route.params.articleId;
    console.log(articleId);


    //console.log(text.value);
    const getArticleList = async () => {
      const res = await articleByIdService(articleId);
      text.value = res.data.content;
     
    } 

    getArticleList()

  }
};
*/
</script>



<template>
  <div>
    <div class="home-container">
      <div class="home-text">
        <div style="display: flex; justify-content: center; align-items: center;">
          <text>{{ titles }}</text>
        </div>

      </div>
    </div>
    <div class="home-main-container">
      <div class="home-main">
        <div class="left-container">
          <div class="left-container-card">
            <el-card class="main-card">

              <div class="article-content">

                <v-md-preview :text="text" ref="preview" />
              </div>


            </el-card>
          </div>
          <div class="right-container-left">
            <!-- <slidebar></slidebar> -->
          </div>
        </div>
        <div class="right-container">
          <!-- <slidebar></slidebar> -->
        </div>
        <!-- <div class="right-container-left">
             <el-card class="catalogue-card">
              <div v-for="anchor in titles" :key="anchor.lineIndex"
                :style="{ padding: `10px 0 10px ${anchor.indent * 20}px` }" @click="handleAnchorClick(anchor)"
                class="catalogue">
                <a style="cursor: pointer">{{ anchor.title }}</a>
              </div>
            </el-card> 
          </div> -->

        <!-- <div class="right-container">

           <el-card class="catalogue-card">
            <div v-for="anchor in titles" :key="anchor.lineIndex"
              :style="{ padding: `10px 0 10px ${anchor.indent * 20}px` }" @click="handleAnchorClick(anchor)"
              class="catalogue">
              <a style="cursor: pointer">{{ anchor.title }}</a>
            </div>
          </el-card> 


        </div> -->

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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}


.catalogue-card {
  min-height: 600px;
}

.catalogue {
  transition: all 0.3s;

  &:hover {
    color: #80c8f8;
    font-size: 20px;
  }
}
</style>