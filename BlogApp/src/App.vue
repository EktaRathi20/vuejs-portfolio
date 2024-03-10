<template>
  <router-link to="/home">Home</router-link><br />
  <router-link to="/profile/test">Test'Profile Page</router-link><br />
  <router-link to="/profile/zora">zora'Profile Page</router-link><br />
  <router-view />
  <h1>Call API</h1>
  <h2>User Data</h2>
  <ul class="item" v-for="item in list" :key="item.id">
    <li>{{ item.id }}</li>
    <li>{{ item.email }}</li>
    <li>{{ item.first_name }}</li>
    <li><img :src="item.avatar" /></li>
  </ul>
</template>

<script>
import axios from 'axios';
export default {
  name: "App",
  components: {
  },
  data()
  {
    return{
      list:[],
      email:'',
      password:''
    }
  },
  async mounted()
  {
    let result = await axios.get("https://reqres.in/api/users?page=1");
    console.warn("api data",result.data.data);
    this.list=result.data.data;
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.item {
  display: flex;
}
.item img {
  width: 50px;
}
.item li {
  display: inline-block;
  width: 180px;
  border: 1px solid;
  text-align: center;
  padding: 5px;
}
</style>
