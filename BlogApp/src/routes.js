import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './components/home.vue'
import profilePage from './components/profile.vue';
import PageNotFound from './components/pageNotFound.vue';

const routes = [
    {
        path: '/home',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/profile/:name',
        name: 'profilePage',
        component: profilePage
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'PageNotFound',
        component: PageNotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;