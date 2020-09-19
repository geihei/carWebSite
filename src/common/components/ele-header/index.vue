<template>
    <div class="header">
        <div class="top"></div>
        <div class="nav">
            <div class="nav-title">首页</div>
            <div class="nav-title">关于我们</div>
            <div class="nav-title">品牌资讯</div>
            <div class="nav-title">车型展厅</div>
            <div class="nav-title">运营合作</div>
            <div class="nav-title">一汽租车</div>
        </div>
    </div>
</template>

<script>
import menu from './components/menu.vue'

export default {
    components: {
        menu,
    },
}
</script>

<style lang="less" scoped>
.header {
    .top {
        background-color: @mainBg;
        width: 100;
        height: 20px;
    }
    .nav {
        height: 180px;
        width: 100%;
        display: flex;
        .nav-title {
            font-size: 20px;
            font-family: HYZongYiJ;
            font-weight: 400;
            color: #202020;
        }
    }
}
</style>
