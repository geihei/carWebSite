<!--
 * @Descripttion: wnbm
 * @version: 3.5.1
 * @Author: maojike
 * @Date: 2020-09-21 10:22:54
 * @LastEditors: maojike
 * @LastEditTime: 2020-09-22 23:13:43
-->
<template>
    <div>
        <ele-header></ele-header>
        <router-link to="/web/news">我是布局页面</router-link>
        <router-view></router-view>
        <footer-pc></footer-pc>
    </div>
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
