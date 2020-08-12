import App from '@/h5/app.vue'
import router from '@/h5/router/index'
import vuetify from '@/plugins/vuetify'
import '@/common/css/base.css'
import '@/common/css/variable.less'

const Vue = require('Vue')

const app = new Vue({
    el: '#app',
    router,
    vuetify,
    render: h => h(App)
})

export default app
