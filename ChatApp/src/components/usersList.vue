<template>
<ul>
    <li style="background-color:green">{{username}}</li>
    <li v-for="user of users" :key="user.id" @click="createRoom(user.id,user.name)">
        {{ user.name }}
    </li>
</ul>
</template>

<script>
import axios from "axios";
export default {
    name: 'usersList',
    data() {
        return {
            users: [],
            username:''
        }
    },
    async created() {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
            var user = res.data;
            const idToRemove = localStorage.getItem('id');

            Object.values(user).forEach(key => {
                if (localStorage.getItem("id") == key.id) {
                    this.username = key.name;
                }
            });
            this.users = user.filter((item) => item.id != idToRemove);
        } catch (error) {
            console.log(error)
        }
    },
    methods: {
        createRoom(id, name) {
            // this.chatid = id;
            // this.$router.push({
            //     name: 'chatRoom',
            //     params: {
            //         items: id
            //     }
            // });
            const details = {
                receiverid: id,
                receivername: name
            }
            this.$emit('clicked', details)

        }
    }
}
</script>

<style scoped>
li {
    list-style-type: none;
    height: 45px;
    padding: 10px;
    background-color: whitesmoke;
    margin-bottom: 5px;
    width: auto;
}
</style>
