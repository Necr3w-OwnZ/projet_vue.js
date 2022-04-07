import { createStore } from 'vuex'

export default createStore({
    state: {
        donnees: {},
        table: {},
    },
    getters: {
        get_donnees(state) {
            return state.donnees
        },
        get_table(state) {
            return state.table
        },
    },
    mutations: {
        set_donnees(state, donnees) {
            state.donnees = donnees
                // for (let i = 0; i < donnees.lenght; i++) {
                //     state.table[i] = donnees[i].key
                // }
            state.table = Object.keys(donnees)
        }
    },
    actions: {
        set_donnees({ commit }, donnees) {
            commit('set_donnees', donnees)
        }
    },
    modules: {}
})