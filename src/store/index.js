import Vue from 'vue'
import Vuex from 'vuex'

import channels from './channels'
import loginUser from './loginUser'

Vue.use(Vuex)

const store = new Vuex.Store({
  // ...
  modules: {
    channels,
    loginUser
  }
})

export default store;