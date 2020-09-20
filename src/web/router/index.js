/*
 * @Descripttion: wnbm
 * @version: 3.5.1
 * @Author: maojike
 * @Date: 2020-09-18 22:51:43
 * @LastEditors: maojike
 * @LastEditTime: 2020-09-19 13:09:11
 */
import yyhz from './modules/yyhz'
import yqzc from './modules/yqzc'

const Router = require('VueRouter')

const routes = [
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
    {
        path: '/web/cxzt',
        name: 'cxzt',
        meta: {
            title: '车型展厅',
        },
        component: () => import('@/web/src/cxzt/index.vue'),
    },
    ...yyhz,
    ...yqzc,
]

const router = new Router({
    mode: 'history',
    routes,
})

export default router
