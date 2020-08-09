import {
  login,
  loginOut,
  whoAmI
} from 'services/userService.js'

export default {
  namespaced: true,
  state: {
    user: null,
    isLoading: false
  },
  mutations: {
    setIsLoading(state, payload) {
      state.isLoading = payload
    },
    setUser(state, payload) {
      state.user = payload
    }
  },
  actions: {
    async login(context, payload) {
      context.commit('setIsLoading', true)
      const res = await login(payload)
      let flag = false
      if (res.code === 0) {
        context.commit('setUser', res.data)
        flag = true
      }
      context.commit('setIsLoading', false)
      return flag
    },
    async whoAmI(context) {
      context.commit('setIsLoading', true)
      let res = await whoAmI();
      if (res) {
        // console.log(res);
        context.commit('setUser', res.data);
      }
      context.commit('setIsLoading', false)
    },
    loginOut(context) {
      loginOut();
      context.commit('setUser', null);
    }
  }
}