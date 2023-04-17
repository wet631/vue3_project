<script setup lang="ts">
// 想要用pinia 
import { useMain } from './store/home'
import { storeToRefs } from 'pinia'

// 接口的列子
// import { returnApplyListAPi } from "../../request/api";
// //IUseTableParam ts类型
// const search = async(val: IUseTableParam) => {
//     let res = await returnApplyListAPi({
//         ...val,
//     })
//     console.log( "***" ,res);
//     let { list, pageNum, pageSize, total } = res.data
//     console.log(list, pageNum, pageSize, total);
// }

const main = useMain()
// 解构main里面的state 和 getter 的数据
// 使用storeToRefs解构才会有响应式 响应式可以直接修改数据 
const { counter,name,dooubleCount } = storeToRefs(main)

console.log(counter,111);

const  Amend = () => {
   main.$patch((state)=>{
    state.counter +=10
    state.name="张三"
   })
}

</script>

<template>
  <div>counter:{{counter}}</div>
  <div>dooubleCount:{{dooubleCount}}</div>
  <button class="buttonOne" @click="main.randomizeCounter()">counter(round)</button>
  <button class="buttonTwo" @click="main.increment()">counter++</button>

  <div>{{name}}</div>
  <button @click="Amend()" class="amendBtn">修改</button>
</template>

<style scoped lang="scss">
.buttonOne{
  color: #fff;
  background-color: #698fea;
}
.buttonTwo{
  color: $default;
  margin-left: 15px;
  background-color: #123690;
}
.amendBtn{
  background-color: #698fea;
}
</style>
