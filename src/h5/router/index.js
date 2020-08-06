import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = new Router({
    mode: 'history',
    routes: [
        // ...
        {
            path: '/',
            name: 'App',
            meta: {
                title: 'aaa'
            },
            component: () => import('@/h5/app.vue')
        },
    ]
})

export default routes