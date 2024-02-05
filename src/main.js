
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import './style.css'
import App from './App.vue'
import routes from './routes/index.js'

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.use(Toast, {})
app.mount('#app')
