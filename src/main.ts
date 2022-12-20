import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/**
 * general components import
 */
import BaseButton from '@/components/common/BaseButton.vue'

import './assets/main.css'

const app = createApp(App)

app.component('BaseButton', BaseButton)

app.use(createPinia())
app.use(router)

app.mount('#app')
