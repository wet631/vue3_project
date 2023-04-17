import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from 'pinia';
//routes
import router from "./routes/index";
// 数据持久化
import piniaPersist from 'pinia-plugin-persist'


const pinia = createPinia()

const app = createApp(App)

pinia.use(piniaPersist)
app.use(router)
app.use(pinia)
app.mount('#app')
