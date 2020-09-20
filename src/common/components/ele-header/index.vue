<template>
    <div class="header">
        <div class="top"></div>
        <div class="logo-container">
            <div class="inner-container">
                <img class="logo" src="@/common/assets/component-header/logo.png" alt="">
            </div>
        </div>
        <div class="nav">
            <div class="first-menu">
                <div class="inner-container">
                    <div
                        @mouseover="setData(1, item.title)"
                        class="nav-title"
                        v-for="item in data"
                        :key="item.name"
                    >{{item.title}}</div>
                </div>
            </div>
            <div class="second-menu" v-show="secondData.length > 0">
                <div class="inner-container">
                    <div
                        @mouseover="setData(2, item.title)"
                        class="nav-title"
                        v-for="item in secondData"
                        :key="item.name"
                    >{{item.title}}</div>
                </div>
            </div>
            <div class="third-menu" v-if="thirdData.length > 0">
                <div class="inner-container">
                    <div
                        class="nav-title"
                        v-for="item in thirdData"
                        :key="item.name"
                    >{{item.title}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import menu from './components/menu.vue'
import data from './config'

export default {
    components: {
        menu,
    },
    data() {
        return {
            data,
            secondData: [],
            thirdData: [],
        }
    },
    methods: {
        setData(type, title) {
            if (type == 1) {
                this.secondData = this.data.find((v) => v.title == title).children || []
                this.thirdData = []
                return
            }
            if (type == 2) {
                this.thirdData = this.secondData.find((v) => v.title == title).children || []
            }
        },
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
    .logo-container {
        height: 100px;
        display: flex;
        justify-content: center;
        .inner-container {
            max-width: 1372px;
            display: flex;
            width: 100%;
            z-index: 2;
            padding-top: 57px;
            .logo {
                width: 120px;
                height: 32px;
            }
        }
    }
    .nav {
        height: 80px;
        width: 100%;
        .nav-title {
            font-size: 20px;
            font-family: HYZongYiJ;
            font-weight: 400;
            color: #202020;
            height: 80px;
            width: 122px;
            line-height: 80px;
            &:hover {
                color: #003A90;
                position: relative;
                &::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 75px;
                    height: 3px;
                    background: #023A80;
                }
            }
        }
        .first-menu, .second-menu, .third-menu {
            position: relative;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            cursor: pointer;
            background-color: #FFF;
            .inner-container {
                max-width: 1372px;
                display: flex;
                width: 100%;
                z-index: 2;
            }
            &::after {
                content: '';
                width: 100%;
                height: 3px;
                background-color: #EBEBEB;
                position: absolute;
                bottom: 0;
                left: 0;
            }
        }
        .second-menu {
            height: 80px;
        }
        .third-menu {
            height: 80px;
        }
    }
}
</style>
