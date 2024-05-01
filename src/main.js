import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import vuetyped from 'vue3typed' 

const app = createApp(App)
app.use(router)
app.use(vuetyped)
app.use(ElementPlus)
app.mount('#app')
