<template>
<HeaderPage/>
<h1>Hello {{name}},Welcome to Home Page</h1>
<table border="1">
    <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Address</th>
    <th>Contact Number</th>
    <th>Actions</th>
    </tr>
    <tr v-for="item in restaurants" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.address}}</td>
        <td>{{item.contact}}</td>
        <td>
        <router-link :to="'/UpdateRestro/'+item.id">Update</router-link>
        <button v-on:click="deleteRestaurant(item.id)">Delete</button>
        </td>

    </tr>
</table>
</template>
<script>
import axios from 'axios'
import HeaderPage from './Header.vue'
    export default{
        name:"HomePage",
        data()
        {
            return{
                name:'',
                restaurants:[]
            }
        },
        components:{
            HeaderPage
        },
        methods:{
            async deleteRestaurant(id)
            {
                let result = await axios.delete("http://localhost:3000/restaurant/"+id);
                if(result.status==200)
                {
                    this.loadData()
                }
            },
            async loadData(){
                let user = localStorage.getItem('user-info');
                this.name = JSON.parse(user).name
                if(!user){
                    this.$router.push({name:"SignUp"});
                }
                let result = await axios.get("http://localhost:3000/restaurant");
                console.log(result);
                this.restaurants=result.data
            }
        },
        mounted()
        {
            this.loadData()
        }
    }
</script>
<style scoped>
table{
    margin-left:10px;
}

td{
    width:160px;
    height:50px;
    
}
</style>