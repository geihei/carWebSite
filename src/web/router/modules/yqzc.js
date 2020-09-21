// 一汽租车模块
export default [
    {
        path: '/web/yqzc',
        name: 'Yqzc',
        meta: {
            title: '一汽租车',
        },
        component: () => import('@/web/src/yqzc/index.vue'),
    },
]
