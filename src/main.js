import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


// Vue.prototype.$http = axios.create({
//   timeout: 5000  // 毫秒
// })

Vue.prototype.$http = axios

Vue.config.productionTip = false
// 配置请求根路径
axios.defaults.baseURL = 'http://localhost:8888'

axios.defaults.headers.common["token"] = window.sessionStorage.getItem("token");

Vue.use(ElementUI);
import '@/font/font.css'


//创建vm
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
