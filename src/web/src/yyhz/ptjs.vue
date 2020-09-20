<template>
    <div>
        <img style="width: 100%;" src="./assets/ptjs-banner.png" alt="">
        <div class="title-container">
            <div class="title-ch">平台技术</div>
            <div class="title-en">Platform technology</div>
        </div>
        <div class="tech-container">
            <div class="tech tech-1">
                <img src="./assets/ptjs-tech-1.png" alt="">
                <div class="tech-title">技术中台</div>
                <img src="./assets/ptjs-tech-4.png" alt="">
                <div class="tech-content">实现研发流程、研发工具等的标准化，提高交付效率和交付质量。</div>
            </div>
            <div class="tech tech-2">
                <img src="./assets/ptjs-tech-2.png" alt="">
                <div class="tech-title">业务中台</div>
                <img src="./assets/ptjs-tech-4.png" alt="">
                <div class="tech-content">减少业务聚合复杂度，快速实现业务需求。</div>
            </div>
            <div class="tech tech-3">
                <img src="./assets/ptjs-tech-3.png" alt="">
                <div class="tech-title">数据中台</div>
                <img src="./assets/ptjs-tech-4.png" alt="">
                <div class="tech-content">对业务系统数据进行统一存储、治理，为业务开展、分析决策提供依据。</div>
            </div>
        </div>
        <div class="content-container">
            <template v-for="(item, index) in data">
                <div class="content-item" v-if="index % 2 != 0" :key="index">
                    <img class="item-img" :src="require(`./assets/ptjs-${index + 1}.png`)" alt="">
                    <div class="text-container">
                        <div class="inner-container">
                            <div class="text-title">{{item.title}}</div>
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
                    <img class="item-img" :src="require(`./assets/ptjs-${index + 1}.png`)" alt="">
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
                title: '短租平台',
                content: '自主租车平台，对标主流租车平台，支撑一汽出行租车领域业务开展，实现头部平台对接，数据导流。目前已实施2家公司。',
            }, {
                title: 'COP（车辆公司运营管理）平台',
                content: '服务线下车辆运营公司，覆盖资产、销售、合作伙伴等核心管理业务，是车辆公司的ERP系统。目前已实施63家公司。',
            }, {
                title: '业财一体化平台',
                content: '与COP平台打通，实现业财一体化应用，支撑各项业务开展。目前已实施47家公司。',
            }, {
                title: '大数据平台',
                content: '通过大数据应用，将出行全域数据统一存放、处理，提升决策水平，助力业务发展。目前已实施1家公司。',
            }, {
                title: '非出行平台服务商',
                content: '提供SaaS服务的网约车平台，而非出行服务平台，与滴滴、首约定位不同。支持分子公司对企业、政府提供公务用车服务、会议用车服务。在政府公务用车领域更深入。目前已实施2家公司。',
            }, {
                title: '二手车平台',
                content: '构建健全的二手车管理及处置的业务体系，建立数字化、信息化、智能化的二手车业务模式。',
            }, {
                title: '分时租赁平台',
                content: '以用户的多种租车需求集B2B、B2C、O2O模式于一体的网络化、信息化、智能化的开放式服务平台。',
            }],
        }
    },
}
</script>

<style scoped lang="less">
.title-container {
    text-align: center;
    margin-top: 100px;
    margin-bottom: 80px;
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
}
.tech-container {
    margin: 0 auto;
    margin-bottom: 120px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    max-width: 1295px;
    .tech {
        max-width: 322px;
        flex: 1;
        .tech-title {
            text-align: center;
            font-size: 30px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #343434;
            margin: 40px 0 10px 0;
        }
        .tech-content {
            text-align: center;
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #343434;
            line-height: 32px;
            margin-top: 30px;
        }
        img {
            display: block;
            margin: 0 auto;
        }
    }
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
