<template>
    <div>
        <ele-header></ele-header>
        <router-link to="/web/news">我是布局页面</router-link>
        <router-view></router-view>
        <!-- footer组件 -->
    </div>
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
