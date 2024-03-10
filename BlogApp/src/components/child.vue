<!-- <template>
    <h2>{{name}}</h2>
    <h2>{{user.name}}</h2>
    <button v-on:click="getData()">call fun</button>
</template>

<script>
export default{
    name:'ChildComp',
    props:{
        name:String,
        user:Object,
        getData:Function
    }
}
</script> -->


<template>
<!-- <h3>Child Component</h3> -->
<!-- {{data}} -->
<!-- <slot></slot> -->
<header>
<slot name="header"></slot>
</header>
<content>
<slot name="content"></slot>
</content>
<footer>
<slot name="footer"></slot>
</footer>



<!-- <slot><h3>default data1</h3></slot>
<slot><h3>default data2</h3></slot> -->
</template>

<script>
export default{
    name:'childComp',
    // props:{
    //     data:String
    // }
}
</script>
