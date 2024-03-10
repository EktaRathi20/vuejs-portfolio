<template>
    <div class="counter" :style="{color:$store.state.colorCode}">
        {{$store.state.counter}}
    </div>
</template>

<script>
export default {
    name:'couterNumber'
}
</script>

<style>

</style>