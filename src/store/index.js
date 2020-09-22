import Vue from 'vue'
import Vuex from 'vuex'

import starWars from './modules/starWars.module.js'


Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    name: ''
  },
  modules: {
    starWars
  }
})
