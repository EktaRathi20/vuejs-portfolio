<template>
    <img class="logo" src="../assets/restro-logo.jpg"/>
    <h1>Login Page</h1>
    <div class="login">
        <input type="email" v-model="email" placeholder="Enter Email"/>
        <input type="password" v-model="password" placeholder="Enter Password"/>
        <button v-on:click="Login">Login</button>
        <p>
        Want to create account? <router-link to="/SignUp">Sign Up</router-link>
        </p>
    </div>
</template>
<script>
import axios from 'axios'
export default{
    name:"LoginPage",
    data()
    {
        return{
            email:'',
            password:''
        }
    },
    methods:{
        async Login(){
            let result = await axios.get(
                `http://localhost:3000/user?email=${this.email}&password=${this.password}`
            );
            if(result.status==200 && result.data.length>0)
            {
                alert("Login Successfully!");
                localStorage.setItem("user-info",JSON.stringify(result.data[0]));
                this.$router.push({name:"HomePage"});
            }
        }
    },
    mounted()
    {
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:"HomePage"});
        }
    }
        
   
}
</script>
<style scoped>
.logo{
    width:100px;
}
.login input{
    width:300px;
    height:40px;
    padding-left:20px;
    display:block;
    margin-bottom:30px;
    margin-left:auto;
    margin-right:auto;
    border:1px solid skyblue;
    border-radius:3px;
}
.login button{
    width:330px;
    height:40px;
    border:1px solid skyblue;
    color:#fff;
    background-color:skyblue;
    cursor:pointer;
    border-radius:3px;
}
.login button:hover{
    background-color:#09aef1;
}
a{
    text-decoration:none;
    color:grey;
}
a:hover{
    color:#09aef1;
}
</style>