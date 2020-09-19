<!--
 * @Descripttion: wnbm
 * @version: 3.5.1
 * @Author: maojike
 * @Date: 2020-09-18 22:59:39
 * @LastEditors: maojike
 * @LastEditTime: 2020-09-19 14:05:11
-->
<template>
    <div>
        <img class="banner-img" src="@/common/assets/cxzt/cxzt-banner.png" alt="">
        <div class="content-container">
            <div class="cell-container">
                <img src="@/common/assets/cxzt/cxzt-car1.png" alt="">
                <div class="right-container">
                    <div class="cell-title">红旗H7</div>
                    <div class="cell-describe">高端专车膺选，专属国车典范</div>
                    <div class="cell-tips">1、U形前格栅搭配直瀑式中网（或超强科技配置）， 尽显东方豪华.</div>
                    <div class="cell-tips">2、欧洲五星安全品质，重新定义“中国安全”， 司乘无忧.</div>
                </div>
            </div>
        </div>
        <img src="@/common/assets/cxzt/cxzt-trangle.png" alt="">
    </div>
</template>

<script>
export default {
    created() {
        console.log('我是红旗页面')
    },
}
</script>

<style scoped lang="less">
    .banner-img{
        display: block;
        height: 915/@rpx;
    }
</style>
