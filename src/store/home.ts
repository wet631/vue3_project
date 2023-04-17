import {defineStore} from 'pinia'


export const useMain = defineStore('main',{
    //相当于data
    state:() =>{
        //所有这些属性都将自动推断其类型
        return {
            counter:12,
            name:'大核'
        }
    },
    // 相当于计算属性 
    getters:{
        dooubleCount:(state)=>{
            return state.counter * 2
        }
    },
    // 相当于vuex的mutation + action 可以同时写同步和异步的代码
    actions:{
      increment(){
        this.counter++
      },
      randomizeCounter(){
        setTimeout(()=>{
            this.counter = Math.round(100 * Math.random())
        },0)
      }  
    }
})