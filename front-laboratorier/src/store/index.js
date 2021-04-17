import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:null,

  },
  mutations: {
    commitUserInfo(state,paylod){
      state.userInfo = paylod;
    },
    

  },
  actions: {
  },
  modules: {
  }
})
