<template>
    <v-app>
        <div class="d-flex flex-row">
            <div>
                vuetify组件demo
                <div class="d-flex flex-column">
                    <router-link to="/demo/carousels">轮播</router-link>
                    <router-link to="/demo/alert">普通对话框</router-link>
                </div>
            </div>
            <div class="flex-grow-1">
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
</style>