import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes = [
    {
        path: '/',
        redirect: '/demo',
    },
    {
        path: '/demo',
        name: 'demo',
        meta: { title: 'demo' },
        component: () => import('@/vuetify-demo/components/index.vue'),
        // children: [
        //     {
        //         path: '/demo/carousels',
        //         name: 'carousels',
        //         meta: { title: '轮播图' },
        //         component: () => import('@/vuetify-demo/components/carousels.vue'),
        //     },
        // ],
    },
    {
        path: '/demo/carousels',
        name: 'carousels',
        meta: { title: '轮播图' },
        component: () => import('@/vuetify-demo/components/carousels.vue'),
    },
]

const router = new Router({
    mode: 'history',
    routes,
})

export default router