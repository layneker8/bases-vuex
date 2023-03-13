import { createStore } from "vuex"

const store = createStore({
    state() {
        return {
            count: 0
        }
    },
    mutations:{
        increment(state){
            state.count++
        },
        incrementBy(state,val){

            state.count += val

        }
    }
})

export default store