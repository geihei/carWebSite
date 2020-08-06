import Vue from 'vue'
import App from '@/h5/app.vue'
import router from '@/h5/router/index'
import '@/common/css/base.css'

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

export default app
