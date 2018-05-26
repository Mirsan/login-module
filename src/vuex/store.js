import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  isLoggedIn: !!localStorage.getItem('token'),
  // main settings
  host: `http://localhost:3000/`
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
