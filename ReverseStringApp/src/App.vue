<template>
{{message}}
<br/>
<button @click="reverse">Reverve</button>
<br/>
<button @click="message+='!'">Append=>"!"</button>
<br/>
<a href="www.google.com"  @click.prevent="notify">click me</a>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      message:"Hello World"
    }
  },
  methods:{
    reverse(){
      this.message=this.message.split('').reverse().join('')
    },
    notify(){
      alert('navigation prevented')
    }
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
