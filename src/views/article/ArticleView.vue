<template>
  <div>
    <div class="home-container">
      <div class="home-text">
        <div style="display: flex; justify-content: center; align-items: center;">
          <text>wenzhaNG</text>
        </div>

      </div>
    </div>
    <div class="home-main-container">
      <div class="home-main">
        <div class="left-container">
          <div class="left-container-card">
            <el-card class="main-card">

              <div class="article-content">

                <v-md-preview :text="text" ref="preview"/>
              </div>


            </el-card>
          </div>

          <div class="right-container-left">
            <el-card class="catalogue-card">
              <div
                  v-for="anchor in titles" :key="anchor.lineIndex"
                  :style="{ padding: `10px 0 10px ${anchor.indent * 20}px` }"
                  @click="handleAnchorClick(anchor)"
                  class="catalogue"
              >
                <a style="cursor: pointer">{{ anchor.title }}</a>
              </div>
            </el-card>
          </div>
        </div>
        <div class="right-container">

            <el-card class="catalogue-card">
              <div
                  v-for="anchor in titles" :key="anchor.lineIndex"
                  :style="{ padding: `10px 0 10px ${anchor.indent * 20}px` }"
                  @click="handleAnchorClick(anchor)"
                  class="catalogue"
              >
                <a style="cursor: pointer">{{ anchor.title }}</a>
              </div>
            </el-card>


        </div>

      </div>

    </div>
  </div>

</template>


<script>
import { useRoute } from 'vue-router';
const text = `

# UniApp开发

## 1.下载开发者工具

1.1打开官网[https://www.dcloud.io/hbuilderx.html](https://www.dcloud.io/hbuilderx.html)下载对应版本

1.2.新建项目，选择默认模版，自定义目录

## 2.将项目运行在微信小程序中

2.1打开微信小程序开发的设置界面，开启服务端口，回到，uni编辑器，再次运行，可能需要填写微信小程序开发者工具的安装路径

3.认识目录

![image-20240321193706967](uniapp/image-20240321193706967.png)

## 配置文件

# UniApp开发

## 1.下载开发者工具

1.1打开官网[https://www.dcloud.io/hbuilderx.html](https://www.dcloud.io/hbuilderx.html)下载对应版本

1.2.新建项目，选择默认模版，自定义目录

## 2.将项目运行在微信小程序中

2.1打开微信小程序开发的设置界面，开启服务端口，回到，uni编辑器，再次运行，可能需要填写微信小程序开发者工具的安装路径

3.认识目录

![image-20240321193706967](uniapp/image-20240321193706967.png)

## 配置文件

# UniApp开发

## 1.下载开发者工具

1.1打开官网[https://www.dcloud.io/hbuilderx.html](https://www.dcloud.io/hbuilderx.html)下载对应版本

1.2.新建项目，选择默认模版，自定义目录

## 2.将项目运行在微信小程序中

2.1打开微信小程序开发的设置界面，开启服务端口，回到，uni编辑器，再次运行，可能需要填写微信小程序开发者工具的安装路径

3.认识目录

![image-20240321193706967](uniapp/image-20240321193706967.png)

## 配置文件

# UniApp开发

## 1.下载开发者工具

1.1打开官网[https://www.dcloud.io/hbuilderx.html](https://www.dcloud.io/hbuilderx.html)下载对应版本

1.2.新建项目，选择默认模版，自定义目录

## 2.将项目运行在微信小程序中

2.1打开微信小程序开发的设置界面，开启服务端口，回到，uni编辑器，再次运行，可能需要填写微信小程序开发者工具的安装路径

3.认识目录

![image-20240321193706967](uniapp/image-20240321193706967.png)

## 配置文件

# UniApp开发

## 1.下载开发者工具

1.1打开官网[https://www.dcloud.io/hbuilderx.html](https://www.dcloud.io/hbuilderx.html)下载对应版本

1.2.新建项目，选择默认模版，自定义目录

## 2.将项目运行在微信小程序中

2.1打开微信小程序开发的设置界面，开启服务端口，回到，uni编辑器，再次运行，可能需要填写微信小程序开发者工具的安装路径

3.认识目录

![image-20240321193706967](uniapp/image-20240321193706967.png)

## 配置文件

# UniApp开发

## 1.下载开发者工具
## 1.下载开发者工具
## 1.下载开发者工具
## 1.下载开发者工具
## 1.下载开发者工具
## 1.下载开发者工具
## 1.下载开发者工具
## 1.下载开发者工具
## 1.下载开发者工具
## 1.下载开发者工具
## 1.下载开发者工具
## 1.下载开发者工具
## 1.下载开发者工具
## 1.下载开发者工具
## 1.下载开发者工具
## 1.下载开发者工具
## 1.下载开发者工具
## 1.下载开发者工具
## 1.下载开发者工具




1.1打开官网[https://www.dcloud.io/hbuilderx.html](https://www.dcloud.io/hbuilderx.html)下载对应版本

1.2.新建项目，选择默认模版，自定义目录

## 2.将项目运行在微信小程序中

2.1打开微信小程序开发的设置界面，开启服务端口，回到，uni编辑器，再次运行，可能需要填写微信小程序开发者工具的安装路径

3.认识目录

![image-20240321193706967](uniapp/image-20240321193706967.png)

## 配置文件
  `;

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
      const {preview} = this.$refs;
      const {lineIndex} = anchor;

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
    const articleTitle = route.params.articleTitle;
    console.log(articleTitle);




  }
};

</script>

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

.right-container {
  overflow: scroll;
  height: 600px;
  position: sticky;
  top: 60px;
}

.catalogue{
  transition: all 0.3s;
  &:hover{
    color:  #80c8f8;
    font-size: 20px;
  }
}

</style>