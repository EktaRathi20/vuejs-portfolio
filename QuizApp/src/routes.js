import quesThird from './components/quesThird.vue'
import totalResult from './components/result.vue'

import {createRouter,createWebHistory} from 'vue-router'
const routes=[
    {
        name:'quesThird',
        component:quesThird,
        path:'/'
    },
    {
        name:'totalResult',
        component:totalResult,
        path:'/totalResult/:marks'
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router