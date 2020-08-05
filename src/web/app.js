import Vue from 'vue'
import App from './app.vue'
import router from './router'

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

export default app
