import {createStore} from "vuex";
import axios from 'axios';
const store = createStore({
    state:{
        counter:0,
        colorCode:'blue'
    },
    mutations:{
        decreaseCounter(state,randomNumber){
            state.counter-=randomNumber
        },
        increaseCounter(state,randomNumber){
            state.counter+=randomNumber
        },
        setColorCode(state,newValue){
            state.colorCode=newValue
        }
    },
    actions:{
        decreaseCounter({commit}){
            axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response =>{
                commit('decreaseCounter',response.data)
            })
        },
        increaseCounter({commit}){
            axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response =>{
                commit('increaseCounter',response.data)
            })
        },
        setColorCode({commit},newValue){
            commit('setColorCode',newValue)
        }
    },
    getters:{
        counterSquare(state){
           
            console.log(state.counter * state.counter);
            return state.counter * state.counter;
        }
    },
    modules:{

    }
});
export default store;