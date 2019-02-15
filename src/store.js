import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test: 0
  },
  mutations: {
    increment (state, data) {
      state.test += data
    },
  },
  actions: { 

  }
})
