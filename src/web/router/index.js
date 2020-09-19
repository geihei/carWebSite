const Router = require('VueRouter')

const routes = new Router({
    mode: 'history',
    routes: [
        {
            path: '/web',
            redirect: '/web/index',
        },
        {
            path: '/web/index',
            name: 'Index',
            meta: {
                title: 'index',
            },
            component: () => import('@/web/src/index.vue'),
        },
        {
            path: '/web/news',
            name: 'News',
            meta: {
                title: 'news',
            },
            component: () => import('@/web/src/news/index.vue'),
        },
    ],
})

console.log(routes)

export default routes
