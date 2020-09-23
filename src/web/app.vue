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
        <ele-info-open></ele-info-open>
        <!-- footer组件 -->
    </v-app>
</template>

<script>
import EleHeader from '@/common/components/ele-header'
import EleInfoOpen from '@/common/components/ele-info-open'

export default {
    components: {
        EleHeader,
        EleInfoOpen,
    },
    created() {
        console.log('进入布局页面')
    },
}
</script>

<style scoped lang="less">
</style>
