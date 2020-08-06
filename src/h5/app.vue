<template>
    <v-app>
        <div class="app">
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

            <span class="font">hello, world ！ my name is h5. hahhaha</span>
            

            <img class="img" src="@/common/assets/1.png" alt="">
        </div>
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
@rpx: 16rem;

.app {
    color: red;
    .font {
        font-size: 24/@rpx;
    }
    .img {
        width: 100px;
        height: 100px;
    }
}
</style>