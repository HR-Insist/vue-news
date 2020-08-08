import {
  getNewsChannels
} from "services/newsService";

export default {
  namespaced: true, //开启命名空间
  state: {
    channels: [],
    isLoading: false
  },
  mutations: {
    setIsLoading(state, payload) {
      state.isLoading = payload
    },
    setChannels(state, payload) {
      state.channels = payload
    }
  },
  actions: {
    async fetchChannels(context) {
      context.commit('setIsLoading', true)
      const channels = await getNewsChannels()
      context.commit('setChannels', channels)
      context.commit('setIsLoading', false)
    }
  }
}