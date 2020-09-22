import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./Home.vue')
  },
  {
    path: '/cards',
    name: 'Cards',
    component: () => import('./Cards.vue'),
    beforeEnter: (to, from, next) => {
      if (store.state.name == '') {
        alert("Fakt 😒?")
        if(from.name == null) next({name: 'Home'})
      }
      else next()
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
