import { createRouter, createWebHistory } from 'vue-router'

import loginPage from './components/loginPage'
import chatRoom from './components/chatRoom'
import usersList from './components/usersList'
const routes = [
    {
        name:'loginPage',
        component:loginPage,
        path:'/'
    },
    {
        name:'chatRoom',
        component:chatRoom,
        path:'/chatRoom'
    },
    {
        name:'usersList',
        component:usersList,
        path:'/usersList'
    }


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router