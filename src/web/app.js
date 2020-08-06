import Vue from 'vue'
import App from '@/web/app.vue'
import router from '@/web/router/index'
import '@/common/css/base.css'

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

export default app
