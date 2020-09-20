/*
 * @Descripttion: wnbm
 * @version: 3.5.1
 * @Author: maojike
 * @Date: 2020-09-18 22:51:43
 * @LastEditors: maojike
 * @LastEditTime: 2020-09-20 20:35:09
 */
const Router = require('VueRouter')

const routes = new Router({
    mode: 'history',
    routes: [
        {
            path: '/web',
            name: 'App',
            meta: {
                title: 'app',
            },
            component: () => import('@/web/app.vue'),
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
    ],
})

export default routes
