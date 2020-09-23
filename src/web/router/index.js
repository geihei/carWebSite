/*
 * @Descripttion: wnbm
 * @version: 3.5.1
 * @Author: maojike
 * @Date: 2020-09-18 22:51:43
 * @LastEditors: maojike
 * @LastEditTime: 2020-09-22 23:06:11
 */
import yyhz from './modules/yyhz'
import yqzc from './modules/yqzc'
import gywm from './modules/gywm'

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
        path: '/web/index/yssm',
        name: 'Yssm',
        meta: {
            title: '隐私声明',
        },
        component: () => import('@/web/src/index/yssm.vue'),
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
        component: () => import('@/web/src/hqcd/index.vue'),
    },
    {
        path: '/web/hqcd',
        name: 'hqcd',
        meta: {
            title: '红旗车队',
        },
        component: () => import('@/web/src/hqcd/index.vue'),
    },
    {
        path: '/web/ppzx',
        name: 'ppzx',
        meta: {
            title: '品牌资讯',
        },
        component: () => import('@/web/src/ppzx/index.vue'),
    },
    {
        path: '/web/wyyy',
        name: 'wyyy',
        meta: {
            title: '网约运营',
        },
        component: () => import('@/web/src/wyyy/index.vue'),
    },
    {
        path: '/web/sjjm',
        name: 'sjjm',
        meta: {
            title: '司机加盟',
        },
        component: () => import('@/web/src/sjjm/index.vue'),
    },
    {
        path: '/web/qdhz',
        name: 'qdhz',
        meta: {
            title: '渠道合作',
        },
        component: () => import('@/web/src/qdhz/index.vue'),
    },
    {
        path: '/web/cdfw',
        name: 'cdfw',
        meta: {
            title: '车队服务',
        },
        component: () => import('@/web/src/cdfw/index.vue'),
    },
    ...yyhz,
    ...yqzc,
    ...gywm,
]
const router = new Router({
    mode: 'history',
    routes,
})

export default router
