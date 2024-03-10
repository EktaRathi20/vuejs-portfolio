<template>
<HeaderPage/>
<h1>Hello,Welcome to Update Restaurant Page</h1>
<br>
<form class="add" >
<input type="text" v-model="restaurant.name" placeholder="Enter Restaurant Name" name="name"/>
<input type="text" v-model="restaurant.address" placeholder="Enter Restaurant's Address " name="address"/>
<input type="text" v-model="restaurant.contact" placeholder="Enter Restaurant's Contact" name="contact"/>
<button type="                                                                             [" v-on:click="updateRestaurant">Update Restaurant</button>
</form>
</template>
<script>
import axios from 'axios'
import HeaderPage from './Header.vue'
    export default{
        name:"UpdateRestro",
        components:{
            HeaderPage
        },
            data(){
                return{
                    restaurant:{
                        name:'',
                        address:'',
                        contact:''
                    }
            }

        },
        async mounted()
        {
            let user = localStorage.getItem('user-info');
            if(!user){
                this.$router.push({name:"SignUp"});
            }
            const result = await axios.get("http://localhost:3000/restaurant/"+this.$route.params.id);
            this.restaurant=result.data
        },
        methods:{
            async updateRestaurant(){
                const result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,{
                    name:this.restaurant.name,
                    address:this.restaurant.address,
                    contact:this.restaurant.contact,
                });
                if(result.status==200)
                {
                    this.$router.push({name:"HomePage"});
                }
            }
        }
    }
</script>
<style scoped>
.add input{
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
.add button{
    width:330px;
    height:40px;
    border:1px solid skyblue;
    color:#fff;
    background-color:skyblue;
    cursor:pointer;
    border-radius:3px;
}
.add button:hover{
    background-color:#09aef1;
}
</style>