<template>
<h3 ref="user">sample</h3>
</template>
<script>
export default{
    name:"sampleS",
    beforeUnmount()
    {
        console.log("before",this.$refs['user']);
    },
    unmounted()
    {
        console.log("unmounted",this.$refs['user']);
    }
}
</script>