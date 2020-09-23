<!--
 * @Descripttion: wnbm
 * @version: 3.5.1
 * @Author: maojike
 * @Date: 2020-09-18 22:51:43
 * @LastEditors: maojike
 * @LastEditTime: 2020-09-22 23:14:40
-->
<template>
    <v-app>
        <ele-header></ele-header>
        <router-view></router-view>
        <footer-pc></footer-pc>
    </v-app>
</template>

<script>
import EleHeader from '@/common/components/ele-header'
import FooterPc from '@/web/components/footer'

export default {
    components: {
        EleHeader,
        FooterPc
    },
    created() {
        console.log('进入布局页面')
    },
}
</script>

<style scoped lang="less">
</style>
