import {createStore} from "vuex";

const store = createStore({
    modules:{

    },
    state () {
        return {
            count: 0
        }
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})

export default store