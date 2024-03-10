<!-- <template>

<div>
<h2>{{data.name}},{{data.email}}</h2>
<button v-on:click="getData(data.name)">Alert name</button>
</div>

</template>
<script>
export default{
    name:'userPro',
    props:{
        data:Object,
        getData:Function

    }
} 
</script>-->
<!-- <template>
<h3>User Component</h3>
<button v-on:click="getUserName(userName)">Send username</button>
</template>

<script>
export default{
    name:"userS",
    props:{
        getUserName:Function
    },
    data(){
        return{
            userName:"Ekta"
        }
    }
}
</script> -->

<template>
    <div>
        <h3>zora</h3>
        <h3>zaya</h3>
        <h3>zilla</h3>
        <h3>{{data}}</h3>
    </div>
</template>

<script>
export default{
    name:'userName',
    props:{
        data:String
    }
}
</script>