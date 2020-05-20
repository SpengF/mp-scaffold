import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    message:'use initvuetem'
  },
  mutations: {
  },
  actions:{
    // setUserArr({commit}){
    //   commit('setUserArr',e)
    // }
  },
  getters: {
    getMessage(state){
      return state.message
    }
  }
})
