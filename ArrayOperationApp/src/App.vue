<template>
<button @click="isShow=!isShow">Toggle</button>
<button @click="list.push(list.length+1)">Push item</button>
<button @click="list.pop(list.length-1)">Pop item</button>
<button @click="list.reverse()">Reverse List</button>
<ul v-if="isShow && list.length">
  <li v-for="(item,index) of list" :key="index">
    {{item}}
  </li>
</ul>
<p v-else-if="list.length">List is not empty, but hidden.</p>
<p v-else>List is empty.</p>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      list:[1,2,3],
      isShow:true
    }
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
