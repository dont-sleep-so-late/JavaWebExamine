const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages: {
    index: {
      //入口
      entry: 'src/main.js',
    },
  },
  transpileDependencies: true,
  lintOnSave: false,
  // 配置跨域请求
  devServer: {
    port: 8080, //前端端口--随意，通过Nginx反向代理后都一样
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8888',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },


})
