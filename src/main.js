import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue3 from 'bootstrap-vue-3'
import '@/assets/scss/custom.scss'

createApp(App).use(store).use(router).use(BootstrapVue3).mount('#app')
