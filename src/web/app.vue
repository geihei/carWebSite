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
        <router-view></router-view>
    </v-app>
</template>

<script>

export default {
    data() {
        return {
            colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4',
            ],
            slides: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth',
            ],
        }
    },
    async created() {
        console.log('app.vue')

        const obj1 = {
            a: 1,
            b: 2,
        }

        const obj2 = {
            c: 3,
        }

        const obj3 = {
            ...obj1,
            ...obj2,
        }

        console.log(obj3)

    },
}
</script>

<style scoped lang="less">
// .app {
//     width: 300px;
//     height: 300px;
//     color: red;
//     display: flex;

//     .img {
//         width: 100px;
//         height: 100px;
//     }
// }
</style>
