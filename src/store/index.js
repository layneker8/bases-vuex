import randomInt from "@/helpers/randomInt"
import { createStore } from "vuex"

const store = createStore({
    state() {
        return {
            count: 0,
            randomInt: 0,
            lastMutation: '',
            loading: false
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        incrementBy(state, val) {

            state.count += val
            state.lastMutation = 'Last Mutation ' + val
        },

        setLoading(state, stateLoading) {

            state.loading = stateLoading;

        }
    },
    actions: {
        async incrementRandom({ commit, state }) {
            commit('setLoading', true)
            const random = await randomInt();
            commit('setLoading', false)
            state.randomInt = random
            commit('incrementBy', random)

        }
    }
})

export default store