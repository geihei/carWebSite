// 关于我们模块
export default [
    {
        path: '/web/gywm',
        name: 'Gywm',
        meta: {
            title: '关于我们',
        },
        component: () => import('@/web/src/gywm/index.vue'),
    },
    {
        path: '/web/gywm/qyzr',
        name: 'Qyzr',
        meta: {
            title: '企业责任',
        },
        component: () => import('@/web/src/gywm/qyzr.vue'),
    },
    {
        path: '/web/gywm/jrwm',
        name: 'Jrwm',
        meta: {
            title: '加入我们',
        },
        component: () => import('@/web/src/gywm/jrwm.vue'),
    },
]
