const Router = require('VueRouter')

const routes = new Router({
    mode: 'history',
    routes: [
        // ...
        {
            path: '/',
            name: 'App',
            meta: {
                title: 'aaa',
            },
            component: () => import('@/h5/app.vue'),
        },
    ],
})

export default routes
