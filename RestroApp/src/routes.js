import HomePage from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import LoginPage from './components/Login.vue'
import AddRestro from './components/Add.vue'
import UpdateRestro from './components/Update.vue'

import {createRouter,createWebHistory} from 'vue-router'

const routes=[
    {
        name:'HomePage',
        component:HomePage,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/signUp'
    },
    {
        name:'LoginPage',
        component:LoginPage,
        path:'/loginPage'
    },
    {
        name:'AddRestro',
        component:AddRestro,
        path:'/AddRestro'
    },
    {
        name:'UpdateRestro',
        component:UpdateRestro,
        path:'/UpdateRestro/:id'
    }
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router