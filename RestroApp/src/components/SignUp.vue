<template>
    <img class="logo" src="../assets/restro-logo.jpg"/>
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name"/>
        <input type="email" v-model="email" placeholder="Enter Email"/>
        <input type="password" v-model="password" placeholder="Enter Password"/>
        <button v-on:click="signUp">Sign Up</button>
        <p>
        Account already created ? <router-link to="/loginPage">Login</router-link>
        </p>
    </div>
</template>
<script>
import axios from 'axios'
    export default {
        name:'SignUp',
        data()
        {
            return{
                name:'',
                email:'',
                password:''
            }
        },
        methods:{
            async signUp()
            {
                console.log("sign up",this.name,this.email,this.password);
                let result = await axios.post('http://localhost:3000/user',{
                    name:this.name,
                    email:this.email,
                    password:this.password
                    });
                    console.warn(result);
                    if(result.status==201)
                    {
                        alert("Sign Up Successfully!");
                        localStorage.setItem("user-info",JSON.stringify(result.data));
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
.register input{
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
.register button{
    width:330px;
    height:40px;
    border:1px solid skyblue;
    color:#fff;
    background-color:skyblue;
    cursor:pointer;
    border-radius:3px;
}
.register button:hover{
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