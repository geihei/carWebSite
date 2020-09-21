<template>
    <div>
        <img style="width: 100%;" src="./assets/yqzc-banner.png" alt="">
        <div class="title-container">
            <div class="title-ch">一汽租车</div>
            <div class="title-en">FAW car rental</div>
        </div>
        <div class="tip-container">
            一汽租车是一汽出行旗下品牌，业务覆盖个人自驾、商务用车、企业用车等。聚焦品牌、产品、服务三大要素，全面布局租车业务生态，意在为用户提供安全高效舒适的用车服务，截至目前一汽租车已在海口、三亚、成都、昆明、西安全面上线。
        </div>
        <div class="content-container">
            <template v-for="(item, index) in data">
                <div class="content-item" v-if="index % 2 == 0" :key="index">
                    <img class="item-img" :src="require(`./assets/yqzc-${index + 1}.png`)" alt="">
                    <div class="text-container">
                        <div class="inner-container">
                            <div class="wrapper">
                                <div class="text-title">{{item.title}}</div>
                            </div>
                            <div class="text-content" v-html="item.content"></div>
                        </div>
                    </div>
                </div>
                <div class="content-item" v-else :key="index">
                    <div class="text-container">
                        <div class="inner-container left">
                            <div class="wrapper">
                                <div class="text-title">{{item.title}}</div>
                            </div>
                            <div class="text-content" v-html="item.content"></div>
                        </div>
                    </div>
                    <img class="item-img" :src="require(`./assets/yqzc-${index + 1}.png`)" alt="">
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [{
                title: '多样产品',
                content: '日租、周租、月租等多种产品组合满足您的出行需求',
            }, {
                title: '多种车型',
                content: '宝来、高尔夫、嘉旅、速腾、迈腾、探歌、探岳、奥迪A4L、奥迪Q3、红旗H5、别克GL8等多种车型供您选择。',
            }, {
                title: '优质服务',
                content: '1、门店自营、 1年内新车、车况良好，保障您的用车安全。<br>2、APP、小程序一键下单，线下一站式手续办理，快速取还车，享受安全高效舒适的用车体验。<br>3、7x24h客服在线为您服务，客服热线：400-022-0186<br>欢迎下载一汽租车APP，享受安全高效舒适的用车服务。',
            }],
        }
    },
}
</script>

<style scoped lang="less">
.title-container {
    text-align: center;
    margin-top: 58px;
    margin-bottom: 80px;
    position: relative;
    .title-ch {
        font-size:50px;
        font-family: HYZongYiJ;
        font-weight: 400;
        color: #343434;
    }
    .title-en {
        font-size: 30px;
        font-family: Arial;
        font-weight: 400;
        color: #666666;
    }
    &::before {
        content: '';
        width: 332/@rpx;
        height: 1px;
        background: #A0A0A0;
        position: absolute;
        bottom: 34px;
        right: 50%;
        margin-right: 160px;
    }
    &::after {
        content: '';
        width: 332/@rpx;
        height: 1px;
        background: #A0A0A0;
        position: absolute;
        bottom: 34px;
        left: 50%;
        margin-left: 160px;
    }
}
.tip-container {
    width: 100%;
    max-width: 1375px;
    font-size: 20px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #383838;
    line-height: 37px;
    margin: 0 auto;
    margin-bottom: 100px;
}
.content-container {
    .content-item {
        display: flex;
        width: 100%;
        .item-img {
            width: 50%;
        }
        .text-container {
            width: 50%;
            display: flex;
            justify-content: center;
            .inner-container {
                max-width: 870px;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                .text-title {
                    font-size: 43px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #383838;
                    border-bottom: solid 8px #003A8F;
                    margin-bottom: 32px;
                    display: inline-block;
                }
                .wrapper {
                    max-width: 637px;
                    width: 100%;
                }
                .text-content {
                    font-size: 20px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #343434;
                    line-height: 37px;
                    max-width: 637px;
                    width: 100%;
                }
                &.left {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                }
            }
        }
    }
}
</style>
