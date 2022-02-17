import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    el: '#app',
    data: {
      users: [
        { name: 'Tom' },
        { name: 'Bob' },
        { name: 'Sam' },
        { name: 'Alice' },
      ],
      selectedUser: '',
    },

  },

  mutations: {
    increment(state) {
      this.state
    }
  }
})

export default store;