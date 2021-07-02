import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "index" */ '../views/index.vue') 
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/me',
    name: 'me',
    component: () => import(/* webpackChunkName: "me" */ '../views/myPage.vue') 
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
