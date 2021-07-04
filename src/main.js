import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import rem from "./plugins/rem-plugin"
import JSUI from "./libs/JSUI"

createApp(App).use(store).use(router).use(rem).use(JSUI).mount('#app')
