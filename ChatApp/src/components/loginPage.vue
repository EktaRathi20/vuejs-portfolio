<template>
<form class="row g-3">
    <div class="col-auto">
        <label for="staticEmail2" class="visually-hidden">Email</label>
        <input type="text" class="form-control-plaintext" id="staticEmail2" placeholder="username" v-model="email">
    </div>
    <!-- <div class="col-auto">
          <label for="inputPassword2" class="visually-hidden">Password</label>
          <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
        </div> -->
    <div class="col-auto">
        <button type="button" class="btn btn-primary mb-3" @click="login">Confirm identity</button>
    </div>
</form>

<!--dropdown-->


</template>

<script>

import axios from "axios";
export default {
    name: 'loginPage',
    data() {
        return {
            email: '',
            users: [],
        }
    },
    methods: {
        async login(e) {
            try {
                const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
                var users = res.data;
                // console.log(users)
                Object.values(users).forEach(key => {
                    // console.log(key.id)
                    if (this.email == key.email) {
                        this.$router.push('/chatRoom')
                        localStorage.setItem('id', key.id)
                    }

                })
            } catch (e) {
                console.error(e);
            }
            e.preventDefault()
        },
    }
}
</script>

<style>

</style>
