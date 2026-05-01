import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { registerPlugins } from './plugins'
import './assets/main.css'

const app = createApp(App)

registerPlugins(app)
app.use(router)

app.mount('#app')
