import Vue from 'vue'
import Vuex from 'vuex'
import getPhotos from '@/store/modules/getPhotos'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  // },
  // getters: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    getPhotos
  }
})
