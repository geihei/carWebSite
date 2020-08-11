const Router = require('VueRouter')

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
        children: [
            {
                path: '/demo/carousels',
                name: 'carousels',
                meta: { title: '轮播图' },
                component: () => import('@/vuetify-demo/components/carousels.vue'),
            },
            {
                path: '/demo/alert',
                name: 'alert',
                meta: { title: '对话框' },
                component: () => import('@/vuetify-demo/components/alert.vue'),
            },
        ],
    },
]

const router = new Router({
    mode: 'history',
    routes,
})

export default router