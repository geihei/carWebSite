import Vue from 'vue'
import App from '@/vuetify-demo/app.vue'
import router from '@/vuetify-demo/router/index'
import vuetify from '@/plugins/vuetify'
import '@/common/css/base.css'

const app = new Vue({
    el: '#app',
    router,
    vuetify,
    render: h => h(App)
})

export default app
