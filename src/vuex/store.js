import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  // main settings
  host: `http://localhost:3000/`
}

export default new Vuex.Store({
  state
})
