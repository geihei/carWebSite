<template>
    <div>
        <img style="width: 100%;" src="./assets/stcx-banner.png" alt="">
        <div class="title-container">
            <div class="title">一汽出行：布局出行全产业价值链，打造智慧出行生态圈</div>
            <div class="subtitle">一汽出行布局大出行体系，联合行业TOP公司合力共建智慧出行生态圈，致力于打造国内最具竞争力的汽车运营商。</div>
        </div>
        <div class="content-container">
            <template v-for="(item, index) in data">
                <div class="content-item" v-if="index % 2 == 0" :key="index">
                    <img class="item-img" :src="require(`./assets/stcx-${index + 1}.png`)" alt="">
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
                    <img class="item-img" :src="require(`./assets/stcx-${index + 1}.png`)" alt="">
                </div>
            </template>
        </div>
        <div class="foot-container">
            <div class="foot-content">
                <div class="foot-text">
                    一汽出行不断探索运营车辆全生命周期衍生业务，完善生态建设，融资租赁、充能、车服、大数据管理等项目已相继落地，未来以更加开放、合作的方式，全面布局智慧出行全产业价值链13个业务领域，构建大移动出行服务体系，筑造美妙出行新蓝图。
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [{
                title: '租赁公司',
                content: '一汽租车是一汽出行旗下租赁品牌，致力于为政府、企业及个人用户提供安全、高效、舒适且卫生的车辆使用体验及规范的定期维护保养服务，践行极致产品、极致服务、极致创新的发展理念，全面布局租车业务，构建出行生态圈。',
            }, {
                title: '线下运营公司',
                content: '一汽出行布局全国五大区域，开城48座，车辆规模近7万辆（截止2020年7月），建立成熟的合规车辆管理模式、完善的司机服务管理体系，打造高标准、规范化的专业出行服务队伍，为合作伙伴提供优质的服务。',
            }, {
                title: '线上平台公司',
                content: '一汽出行合资平台相继上线，T3出行整合政府、智能网联汽车及渠道等出行服务生态链优质资源，提升出行行业服务品质，树立移动出行安全新标杆，构建智慧城市交通体系，成为智慧出行引领者、旗妙出行打造中国式新高尚出行服务第一品牌，实现to C、to B、to G的全面布局。',
            }, {
                title: '融资租赁',
                content: '一汽智行国际租赁是一汽出行旗下融资租赁品牌，面向出行板块上车融资和下游融资两大场景，开发匹配出行运营特点的缓冲还款产品、限牌城市联合租赁产品、运力公司融资产品、网约司机运营车辆融资等多种产品，满足出行行业伙伴的资金及业务拓展需求。',
            }, {
                title: ' 充 能',
                content: '<span class="bont">撬装加油：</span>一汽出行所推出的撬装式加油站是一种集成式地面可移动加油站，具有占地小、投资少、建站快的优点，广泛用于各类大型车队用油场景，能够有效实现车辆快捷加油、用油成本降低和数据采集；<br><span class="bont>智能换电：</span>换电模式能够为定制换电版车辆提供快捷补电服务，是未来新能源车推广的重要配套生态。一汽出行首个换电项目已在长春落成，为换电版出租车示范运营提供服务。充能时间大幅缩减，适合出租、约场景，解决运营效率及里程焦虑问题，是新能源车辆进入寒区出行市场的重要解决方案；<br/><span class="bont">智能充电：</span>充电模式是如今广泛应用于新能源汽车的一种充能方式。一汽出行联合充电运营行业领先合作方，为新能源运营车辆提供服务配套，开发充电桩、移动充电车等多种充电模式，降低充电服务价格，降低运营成本。',
            }, {
                title: '车 服',
                content: '一汽出行实力打造快修连锁加盟品牌，为出行运营车辆定制开发维保服务，致力于实现0投入、0库存，轻资产、连锁化的管理。2020年6月，一汽出行已在广州、长春实现2家试运行网点，随着出行车辆规模提升，为新能源定制车辆销售服务一体化提前布局。到2022年，一汽出行汽车服务预计加盟网点数将达到100家，年服务能力大于15万台。',
            }, {
                title: '大数据',
                content: '将大数据等创新信息技术引入出行生态，是一汽出行的战略重点之一。已整合车辆管理系统、财务管理系统、短租平台、网约车平台等多个业务平台，面向出行全业态构建出行大数据中心，逐步探索从BI到AI的应用。具备平台研发、业务全量数据聚合、大数据分析等能力。',
            }, {
                title: '司 管',
                content: '司机运力是出行业务的核心，一汽出行顺应市场需求筹备组建更加品牌化、专业化的司机管理机构，致力于打造属于一汽出行的自有司管品牌，以期凭借逐步完善的司管管理支持体系，保障未来业务所需运力的持续健康发展。',
            }, {
                title: '保 险',
                content: '一汽出行针对保险业务开展合作，通过集采方式实现全国或区域范围的总对总合作，保险合作方为出行公司提供最优质、最优惠的服务，同时利用其业务优势，丰富出行公司在出行服务、维修保养等产业链的发展。',
            }, {
                title: '智慧停车',
                content: '智慧停车是未来智慧出行生态圈布局中的重要环节之一，一汽出行将逐步完成对停车基础设施的智能化升级，进一步改善并提升出行场景中停车过程的无人化、智慧化体验。',
            }, {
                title: '网络支付',
                content: '网络支付是目前国计民生发展的重要基础，也是出行行业数字化转型的可靠动力。为了更好推动出行行业的发展，一汽出行将不断推动网络支付在移动出行市场上的应用，方便支付端快捷支付，丰富运营端资金管理机制。',
            }, {
                title: '二手车',
                content: '一汽出行筹备建设集二手车内部资产管理及对外竞拍销售为一体的大数据系统平台，可实现内部电子化、信息化、智能化的二手车资产管理，及外部B2B/2C模式的竞价拍卖，从而助推运营资产的保值增值，有效提升出行运营车辆的有序流转，为出行运营车辆提供合规高效的处置渠道，保障运营利润持续上升。',
            }, {
                title: '回收再制造',
                content: '一汽出行坚持以供给侧结构性改革为主线，充分发挥市场配置资源的决定性作用，在行业启动初期主动探求行业发展之道，推动先进制造业和现代服务业相融相长、耦合共生。',
            }],
        }
    },
}
</script>

<style scoped lang="less">
.title-container {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 90px;
    margin-bottom: 86px;
    .title {
        font-size: 40px;
        font-family: HYZongYiJ;
        font-weight: 400;
        color: #343434;
    }
    .subtitle {
        font-size: 20px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #383838;
        line-height: 37px;
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
                    color: #383838;
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
            // &.right {
            //     padding: 48px 271px 0 53px;
            // }

        }
    }
}

.foot-container {
    background-image: url('./assets/stcx-foot.png');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 852/@rpx;
    .foot-content {
        width: 100%;
        height: 100%;
        max-height: 514px;
        max-width: 1378px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0,71,157, 0.5);

        .foot-text {
            max-width: 1147px;
            width: 100%;
            font-size: 36px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 72px;
        }
    }
}
</style>
