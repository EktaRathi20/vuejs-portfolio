import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes.js'
import Dropdown from 'hsy-vue-dropdown'
createApp(App).use(Dropdown).use(routes).mount('#app')
