<!--
 * @Descripttion: wnbm
 * @version: 3.5.1
 * @Author: maojike
 * @Date: 2020-09-18 22:59:39
 * @LastEditors: maojike
 * @LastEditTime: 2020-09-19 20:25:23
-->
<template>
    <div>
        <img class="banner-img" src="@/common/assets/cxzt/cxzt-banner.png" alt="">
        <div class="content-container">
            <div class="cell-container">
                <img class="cell-img" src="@/common/assets/cxzt/cxzt-car1.png" alt="">
                <div class="right-container">
                    <span class="cell-title">红旗H7</span>
                    <div class="cell-describe">高端专车膺选，专属国车典范</div>
                    <div class="cell-tips">1、U形前格栅搭配直瀑式中网（或超强科技配置）， 尽显东方豪华.</div>
                    <div class="cell-tips">2、欧洲五星安全品质，重新定义“中国安全”， 司乘无忧.</div>
                </div>
            </div>
            <div class="cell-container double-container">
                <div class="right-container">
                    <span class="cell-title">红旗H7</span>
                    <div class="cell-describe">高端专车膺选，专属国车典范</div>
                    <div class="cell-tips">1、U形前格栅搭配直瀑式中网（或超强科技配置）， 尽显东方豪华.</div>
                    <div class="cell-tips">2、欧洲五星安全品质，重新定义“中国安全”， 司乘无忧.</div>
                </div>
                <img class="cell-img double-img" src="@/common/assets/cxzt/cxzt-car1.png" alt="">
            </div>
        </div>
        <img class="trangle-img" src="@/common/assets/cxzt/cxzt-tuijian.png" alt="">
        <Form type="2" title="司机联盟"/>
    </div>
</template>

<script>
import Form from '@/web/components/message-board'
export default {
    components:{
        Form
    },
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
    .content-container{
        margin-top: 106/@rpx;
        margin-bottom: 89/@rpx;
        position: relative;
    }
    .cell-container{
        display: flex;
        align-items: center;
        position: relative;
    }
    .cell-container:not(:first-child){
        top: -120/@rpx;
    }
    .double-container{
        justify-content: flex-end;
    }
    .cell-img{
        width: 960/@rpx;
        margin-right: 52/@rpx;
    }

    .double-img{
        margin-right: 0;
        margin-left: 52/@rpx;
    }
    .cell-title{
        font-size: 42/@rpx;
        color: #383838;
        line-height: 1;
        position: relative;
    }
    .cell-title::after{
        content: '';
        position: absolute;
        left: 0;
        bottom: -10/@rpx;
        width: 100%;
        height: 8/@rpx;
        background-color: #003A8F;
    }
    .cell-describe{
        margin-top: 24/@rpx;
        font-size: 48/@rpx;
        color: #383838;
        line-height: 1;
        margin-bottom: 88/@rpx;
    }
    .cell-tips{
        font-size: 24/@rpx;
        color: #383838;
    }
    .trangle-img{
        width: 765/@rpx;
        height: 434/@rpx;
        display: block;
        margin: 0 auto;
    }
</style>
