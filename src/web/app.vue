<template>
    <v-app>
        <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
        >
            <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
            >
                <v-sheet
                :color="colors[i]"
                height="100%"
                >
                    <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                    >
                        <div class="display-3">{{ slide }} Slide</div>
                    </v-row>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
        <div class="app">
            hello, world ！ my name is web, 热更新啦哈哈哈哈. 再次更新啦哈哈
            hello, world ！ my name is web, 热更新啦哈哈哈哈. 再次更新啦哈哈

            <img class="img" src="@/common/assets/1.png" alt="">
        </div>
        我是app页面
        <router-view></router-view>
    </v-app>
    <!-- <v-app>
    </v-app> -->
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
.app {
    width: 300px;
    height: 300px;
    color: red;
    display: flex;

    .img {
        width: 100px;
        height: 100px;
    }
}
</style>
