<template>
    <div>
        <!-- header组件 -->
        <router-link to="/web/news">我是布局页面</router-link>
        <router-view></router-view>
        <!-- footer组件 -->
    </div>
</template>

<script>
export default {
    created() {
        console.log('进入布局页面')
    },
}
</script>

<style scoped lang="less">

</style>
