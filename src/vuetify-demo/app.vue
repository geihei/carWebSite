<template>
    <v-app>
        <div class="app">
            <div class="item1">
                vuetify组件demo
                <div>
                    <router-link to="/demo/carousels">轮播</router-link>
                </div>
            </div>
            <div class="item">
                <router-view />
            </div>
        </div>
    </v-app>
</template>

<script>

export default {
    created() {
        console.log('进入app组件')
    }
}
</script>

<style scoped lang="less">
.app {
    display: flex;
    .item1 {
        width: 200px;
    }
    .item {
        flex:1
    }
}
</style>