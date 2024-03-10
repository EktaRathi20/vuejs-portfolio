<template>
    <div class="counter-sq">
        {{$store.state.counter}}
        <sup>2</sup>
        =
        {{$store.getters.counterSquare}}
    </div>
</template>

<script>
export default {
    name:'counterSq'
}
</script>

<style>

</style>