import { createStore } from 'vuex'

export default createStore({
  state: {
    wins: !localStorage.getItem('score') ? 0 : parseInt(localStorage.getItem('score'))
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
