import Vuex from 'vuex'
import Vue from 'vue'
import {getAdminInfoUrl} from 'config/api'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    userInfo: {
      strEmail: ''
    }
  },
  mutations: {
    SET_USER_INFO: function (state, data) {
      state.userInfo = data
    }
  },
  actions: {
    GET_USER_INFO: async function ({commit}) {
      try {
        let res = await this.$ajax.get(getAdminInfoUrl)
        if (res.code === 0) {
          commit('SET_USER_INFO', res.data)
        }
      } catch (err) {
        console.error(err)
      }
    }
  }
})
