<template>

<addTodo/>
<filterTodo/>
<showTodo/>


</template>

<script>

import addTodo from './components/addTodo.vue'
import filterTodo from './components/filterTodo.vue'
import showTodo from './components/showTodo.vue'
export default {
  
  name: 'App',
  components: {
    addTodo,
    filterTodo,
    showTodo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
