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
            component: () => import('@/web/app.vue')
        },
    ]
})

export default routes