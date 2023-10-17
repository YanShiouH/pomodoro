// Composables
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "home" */'@/views/Home.vue'),
    meta: {
      title: 'Home | Pomodoro'
    }
  },
  {
    path: '/list',
    component: () => import(/* webpackChunkName: "list" */'@/views/List.vue'),
    meta: {
      title: 'Tasks | Pomodoro'
    }
  },
  {
    path: '/settings',
    component: () => import(/* webpackChunkName: "settings" */'@/views/Settings.vue'),
    meta: {
      title: 'Settings | Pomodoro'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})
router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
