import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const mutations = {
    ADD_POINT (state) {
        state.points++
    }
}

const getters = {
    getPoints: state => {
      return state.points
    }
}

const actions = {
    addPoint ({ commit }) {
        commit('ADD_POINT');
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})