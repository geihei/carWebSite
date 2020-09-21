<!--
 * @Descripttion: wnbm
 * @version: 3.5.1
 * @Author: maojike
 * @Date: 2020-09-18 22:51:43
 * @LastEditors: maojike
 * @LastEditTime: 2020-09-19 12:32:34
-->
<template>
    <v-app>
        <ele-header></ele-header>
        <router-view></router-view>
        <!-- footer组件 -->
    </v-app>
</template>

<script>
import EleHeader from '@/common/components/ele-header'

export default {
    components: {
        EleHeader,
    },
    created() {
        console.log('进入布局页面')
    },
}
</script>

<style scoped lang="less">
</style>
