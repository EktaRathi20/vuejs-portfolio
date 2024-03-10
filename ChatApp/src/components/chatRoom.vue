<template>
<div class="main-container">

    <usersList @clicked="onClickChild" />

    <div class="message-body mt-3">
        <h3 v-if="this.receivername">{{receivername}}</h3>
        <h3 v-else style="text-align:center"> Welcome, {{name}}!</h3>
        <div v-if="this.userId">
            <div class="card">
                <div class="card-body">
                    <div class="border pl-2 pt-1 ml-2 message-text mb-2" v-for="message in messages" :key="message">
                        <p class="message pt-1" style="color:blue;text-align:end" v-if="message.username==this.name">{{ message.text }}</p>
                        <p class="message pt-1" style="color:green;" v-else>{{ message.text }}</p>
                    </div>
                </div>
            </div>
            <input v-model="showMessage" type="text" class="mt-3 mr-2 pl-2 pr-2" />
            <button class="btn btn-primary" @click="sendMessage">Send</button>
        </div>
    </div>
</div>
</template>

<script>
import db from "../firebase.js";
import axios from 'axios';
import {
    ref,
    push,
    set,
    onValue
} from "firebase/database"
import UsersList from "./usersList.vue"
export default {
    name: "App",
    data() {
        return {
            name: null,
            showMessage: "",
            messages: [],
            chatroomid: null,
            userId: 0,
            receivername: ''
        };
    },
    async created() {
        // this.userId = this.$route.params.items;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        var user = res.data;
        Object.values(user).forEach(key => {
            if (localStorage.getItem("id") == key.id) {
                this.name = key.name;
            }
        });

        this.fetchdata();

    },
    methods: {
        fetchdata() {
            const fetchchatroomid = ref(db, "chatroom/");
            onValue(fetchchatroomid, (snapshot) => {
                if (snapshot.exists()) {
                    let data = snapshot.val();
                    Object.keys(data).forEach(key => {
                        if ((this.userId == data[key].receiverid && localStorage.getItem("id") == data[key].senderid)) {
                            this.chatroomid = data[key].chatroomid;
                            console.log(this.chatroomid);
                            let viewMessage = this;
                            const itemsRef = ref(db, "chat/" + this.chatroomid);
                            onValue(itemsRef, (snapshot) => {
                                if (snapshot.exists()) {
                                    let data = snapshot.val();
                                    let messages = [];
                                    Object.keys(data).forEach(key => {
                                        let datas = data[key];
                                        Object.keys(datas).forEach(key => {
                                            messages.push({
                                                id: key,
                                                username: datas[key].username,
                                                text: datas[key].text
                                            });
                                        });
                                        console.log(this.messages);
                                    });
                                    viewMessage.messages = messages;
                                } else {
                                    this.messages = [];
                                }
                            });
                        }
                        if ((this.userId == data[key].senderid && localStorage.getItem("id") == data[key].receiverid)) {
                            this.chatroomid = data[key].chatroomid;
                            console.log(this.chatroomid);
                            let viewMessage = this;
                            const itemsRef = ref(db, "chat/" + this.chatroomid);
                            onValue(itemsRef, (snapshot) => {
                                if (snapshot.exists()) {
                                    let data = snapshot.val();
                                    let messages = [];
                                    Object.keys(data).forEach(key => {
                                        let datas = data[key];
                                        Object.keys(datas).forEach(key => {
                                            messages.push({
                                                id: key,
                                                username: datas[key].username,
                                                text: datas[key].text
                                            });
                                        });
                                    });
                                    viewMessage.messages = messages;
                                } else {
                                    this.messages = [];
                                }
                            });
                        }
                    });
                }
            });
        },
        onClickChild(value) {
            this.userId = value.receiverid;
            this.receivername = value.receivername;
            this.fetchdata()
        },
        updateUsername() {
            this.name = this.userName;
            localStorage.setItem("name", this.name);
            this.userName = "";
        },
        sendMessage() {
            if (this.chatroomid == null) {
                this.chatroomid = localStorage.getItem("id") + this.userId;
                const m = ref(db, "chatroom/");
                const n = push(m);
                set(n, {
                    chatroomid: this.chatroomid,
                    senderid: localStorage.getItem("id"),
                    receiverid: this.userId,
                });
            }
            const message = {
                text: this.showMessage,
                username: this.name
            };
            const x = ref(db, "chat/" + this.chatroomid);
            const y = push(x);
            set(y, {
                message
            });
            this.showMessage = "";
        }
    },
    components: {
        UsersList
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons");

.main-container {
    display: flex;
    flex-direction: row;
}

#app {
    font-family: "Roboto", sans-serif;
    font-size: 18px;
}

.btn {
    background-color: rgb(35, 53, 154);
    border: none;
    width: 70px;
    height: 30px;
    border-radius: 5px;
    margin-left: 5px;
    color: white
}

.btn:hover {
    background-color: white;
    color: rgb(35, 53, 154);
    border: 1px solid rgb(35, 53, 154);
}

h3 {
    font-size: 30px;
    text-align: center;
}

input {
    width: 100%;
    border-radius: 4px;
    border: 1px solid rgb(156, 156, 156);
    padding-left: 2px;
    padding-right: 2px;
}

.message-body {
    width: 40%;
    height: 80vh;
    margin: auto;
}

.message-text {
    min-width: 10%;
    border-radius: 4px;
}

.message {
    font-size: 14px;
}

.mg-text {
    color: rgb(0, 195, 255);
    font-weight: bolder;
}

.message-body input {
    width: 80%;
    border-radius: 4px;
    border: 1px solid rgb(156, 156, 156);
    height: 6vh;
    padding-left: 2px;
    padding-right: 2px;
}

.card {
    width: 100%;
    height: auto;
    margin: auto;
    margin-bottom: 5px;
    background-image: url(../assets/users/bg.jpg);
}

.card-body {
    min-height: 55vh;
    overflow-x: scroll;
}
</style>
