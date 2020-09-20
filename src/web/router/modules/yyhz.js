// 运营合作模块
export default [
    {
        path: '/web/yyhz',
        name: 'Yyhz',
        meta: {
            title: '运营合作',
        },
        component: () => import('@/web/src/yyhz/index.vue'),
    },
    {
        path: '/web/yyhz/stcx',
        name: 'Stcx',
        meta: {
            title: '生态出行',
        },
        component: () => import('@/web/src/yyhz/stcx.vue'),
    },
    {
        path: '/web/yyhz/jrfw',
        name: 'Jrfw',
        meta: {
            title: '金融服务',
        },
        component: () => import('@/web/src/yyhz/jrfw.vue'),
    },
]
