import App from '@/web/app.vue'
import router from '@/web/router/index'
import vuetify from '@/plugins/vuetify'
import '@/common/css/base.css'
const Vue = require('Vue')

const app = new Vue({
    el: '#app',
    router,
    vuetify,
    render: h => h(App)
})

export default app
