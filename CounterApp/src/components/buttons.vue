<template>
    <div class="buttons">
        <button v-on:click="$store.dispatch('decreaseCounter')">-</button>
        <button v-on:click="$store.dispatch('increaseCounter')">+</button>
    </div>
</template>

<script>
export default {
    name:'counterBtn'
}
</script>

<style>

</style>