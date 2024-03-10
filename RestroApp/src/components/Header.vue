<template>
<div class="nav">

<router-link to="/">Home</router-link>
<router-link to="/AddRestro">Add Restaurant</router-link>
<a v-on:click="logout">Logout</a>
</div>
</template>
<script>
export default{
    name:'HeaderPage',
    methods:{
        logout()
        {
           localStorage.clear();
           this.$router.push({name:'LoginPage'})
        }
    }
}
</script>

<style scoped>
.nav{
    background-color:#333;
    overflow:hidden;
}
.nav a{
    float:left;
    color:#f2f2f2;
    text-align:center;
    padding:10px 14px;
    font-size:16px;
    text-decoration:none;
    margin-right:5px
}
.nav a:hover{
    background-color:#ddd;
    color:#222;
}
</style>