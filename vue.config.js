const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: 'all',
    port: 8888,
    client: {
      overlay: true,
    },
    proxy: {
      '/api': {
        target: 'http://localhost:8080', //这里填入你要请求的接口的前缀
        ws: true, //代理websocked
        changeOrigin: true, //虚拟的站点需要更管origin
        secure: true, //是否https接口
        pathRewrite: {
          '^/api': '' //重写路径
        }
      }
    }
  }

})
