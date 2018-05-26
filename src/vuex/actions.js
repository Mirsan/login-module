import {LOGIN, LOGIN_SUCCESS, LOGOUT} from './mutation_types'

export default {
  login ({state, commit, rootState}, creds) {
    commit(LOGIN) // show spinner
    return new Promise(resolve => {
      setTimeout(() => {
        localStorage.setItem('token', 'JWT')
        commit(LOGIN_SUCCESS, creds.user)
        resolve()
      }, 1000)
    })
  },
  logout ({ commit }) {
    localStorage.removeItem('token')
    commit(LOGOUT)
  }
}
