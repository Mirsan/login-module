import {LOGIN, LOGIN_SUCCESS, LOGOUT} from './mutation_types'

export default {
  [LOGIN] (state) {
    state.pending = true
  },
  [LOGIN_SUCCESS] (state, user) {
    state.isLoggedIn = true
    state.user = user
    state.pending = false
  },
  [LOGOUT] (state) {
    state.isLoggedIn = false
  }
}
