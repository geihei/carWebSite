import Vue from 'vue'
import App from '@/web/app.vue'
import router from '@/web/router/index'

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

export default app
