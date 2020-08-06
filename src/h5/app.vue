<template>
    <div class="app">
        hello, world ！ my name is h5. hahhaha

        <img class="img" src="@/common/assets/1.png" alt="">
    </div>
</template>

<script>

export default {
    data() {
        return {}
    },
    async created() {
        console.log('app.vue')
        let obj = [1, 2]

        let obj1 = {
            a: 1,
            b: 2,
        }

        let obj2 = {
            c: 3
        }

        let obj3 = {
            ...obj1,
            ...obj2,
        }

        console.log(obj3)

    },
}
</script>

<style scoped lang="less">
.app {
    width: 300px;
    height: 300px;
    color: red;
    .img {
        width: 100px;
        height: 100px;
    }
}
</style>