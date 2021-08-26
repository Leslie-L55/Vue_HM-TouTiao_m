import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant' // vant核心组件库
import 'vant/lib/index.css' // 注册使用 vant

import './styles/index.less' // vant组件的样式
Vue.use(Vant) // 自己的全局样式

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
