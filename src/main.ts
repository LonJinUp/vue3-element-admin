import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// element icon
import * as Icons from '@element-plus/icons-vue'

import './assets/main.css'

const app = createApp(App)
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key as keyof typeof Icons])
})
app.use(createPinia())
app.use(router)

app.mount('#app')
