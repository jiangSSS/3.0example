import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import rem from "./plugins/rem-plugin"

createApp(App).use(store).use(router).use(rem).mount('#app')
