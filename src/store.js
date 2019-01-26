import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    title:'',
    tab_show : true
  },
  mutations:{
    changeTitle:function (state,value) {
      state.title = value
    },
    ope_tab:function (state,value) {
      state.tab_show = value
    }
  },
  getters:{
    getTitle:function (state) {
      return state.title
    },
    tabStatus:function (state) {
      return state.tab_show
    }
  }
})
