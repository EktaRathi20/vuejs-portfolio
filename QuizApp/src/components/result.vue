<template>
<h1>Your Math Quiz Score </h1>

<p>{{marks}}/3</p>
<router-link to="/">Back</router-link>
</template>
<script>
import {useRoute} from 'vue-router'
export default{
    name:"totalResut",
    data(){
        return{
            marks:""
        }
    },
    mounted(){
        const route=useRoute();
        console.log(route.params.marks);
        this.marks=route.params.marks;
    }
}
</script>
<style scoped>
h1{
    text-align: center;

}
p{
    font-size: 50px;
    text-align: center;
}
a{
    text-decoration: none;
    color: white;

    border: 1px solid;
    padding: 10px;
    background-color:#0d6efd;
    border-radius: 5px;
    margin-left:660px;
}
a:hover{
    background-color:white;
    color:#0d6efd;
}
</style>