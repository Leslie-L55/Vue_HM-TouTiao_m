import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    // !路由的懒加载/异步加载，只有当访问 /login 这个路由地址的时候，才会加载对应组件的代码，性能高
    component: () => import('@/views/login')
  }
]

const router = new VueRouter({
  routes
})

export default router
