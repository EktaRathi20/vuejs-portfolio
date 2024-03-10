<template>
<counterNumber />
<counterSq />
<counterBtn />
<colorCode />
</template>

<script>
import counterNumber from './components/counter.vue'
import counterSq from './components/countersq.vue'
import counterBtn from './components/buttons.vue'
import colorCode from './components/colorcode.vue'
export default {
    name: 'App',

    components: {
        counterNumber,
        counterSq,
        counterBtn,
        colorCode
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
    margin-top: 60px;
}

.counter {
    font-size: 100px;
}

.buttons {
    padding: 10px;
}

.buttons button {
    width: 100px;
    height: 50px;
    background-color: black;
    color: white;
    font-size: 30px;
    margin-left: 5px;
    cursor: pointer;
    border-radius: 5px;
}

.buttons button:hover {
    background-color: white;
    color: black;
}

input {
    margin-top: 20px;
    width: 250px;
    padding: 20px;
    background-color: rgb(106, 204, 250);
    border: none;
    color: white;
    border-radius: 5px;
}

input:hover {
    background-color: white;
    color: rgb(106, 204, 250);
    border: 1px solid rgb(106, 204, 250);
}
</style>


