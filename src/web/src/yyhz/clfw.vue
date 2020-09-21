<template>
    <div>
        <img src="./assets/clfw-banner.png" alt="">
        <div class="title-container">
            <div class="inner-container">
                <div>
                    <div class="title-ch">售后服务管理体系</div>
                    <div class="title-en">After-sales service management system</div>
                </div>
            </div>
        </div>
        <div class="system-container">
            <div class="inner-container">
                <div class="item item-1">
                    <div class="ch">高效率</div>
                    <div class="en">High efficiency</div>
                </div>
                <div class="item item-2" style="margin-right: 18px;">
                    <div class="ch">低成本</div>
                    <div class="en">Low cost</div>
                </div>
            </div>
            <div class="inner-container">
                <div class="item item-3">
                    <div class="ch">有保障</div>
                    <div class="en">Guaranteed</div>
                </div>
                <div class="item item-4">
                    <div class="ch">专属化</div>
                    <div class="en">Exclusion</div>
                </div>
            </div>
        </div>
        <div class="title-container">
            <div class="inner-container">
                <div>
                    <div class="title-ch">管理理念</div>
                    <div class="title-en">Management philosophy</div>
                </div>
            </div>
        </div>
        <div class="manage-container">
            <div class="item item-1">连锁化经营</div>
            <div class="item item-2">数字化管理</div>
            <div class="item item-3">业务迭代化</div>
        </div>
        <div class="title-container">
            <div class="inner-container">
                <div>
                    <div class="title-ch">车辆维修管理系统搭建</div>
                    <div class="title-en">Construction of Vehicle</div>
                    <div class="title-en">Maintenance Management System</div>
                </div>
            </div>
        </div>
        <div class="manage-container">
            <div class="item item-1">
                门店智能化
                作业平台
            </div>
            <div class="item item-2">
                COP系统的
                数据监控
            </div>
            <div class="item item-3">
                分析平台
            </div>
        </div>
        <div class="text-container">
            <div class="inner-container">
                实现透明可追溯的车辆维修管理系统为运营车辆全生命周期衍生业务创造更多的价值
            </div>
        </div>
        <div class="title-container">
            <div class="inner-container">
                <div>
                    <div class="title-ch">试运营网点</div>
                    <div class="title-en">Trial operation network</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">

.title-container {
    text-align: center;
    margin-top: 58px;
    margin-bottom: 80px;
    position: relative;
    .inner-container {
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &::before {
            content: '';
            flex: 1;
            height: 1px;
            background: #A0A0A0;
        }
        &::after {
            content: '';
            flex: 1;
            height: 1px;
            background: #A0A0A0;
        }
    }
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
.text-container {
    width: 100%;
    background: #003A90;
    padding: 88px 0 80px 0;
    .inner-container {
        width: 100%;
        max-width: 829px;
        font-size: 37px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 60px;
        text-shadow: 1px 3px 7px rgba(0, 0, 0, 0.57);
        margin: 0 auto;
        text-align: center;
    }
}
.system-container {
    width: 100%;
    max-width: 1334px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
    .inner-container {
        width: 667px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
        .item {
            width: 318px;
            height: 342px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            .ch {
                font-size: 47px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 56px;
            }
            .en {
                font-size: 21px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 25px;
            }
        }
        .item-1 {
            background-image: url('./assets/clfw-1.png');
        }
        .item-2 {
            background-image: url('./assets/clfw-2.png');
        }
        .item-3 {
            background-image: url('./assets/clfw-3.png');
        }
        .item-4 {
            background-image: url('./assets/clfw-4.png');
        }
    }
}
.manage-container {
    width: 100%;
    max-width: 1369px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    .item {
        width: 443/@rpx;
        height: 306/@rpx;
        min-width: 242px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        font-size: 42px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 306/@rpx;
        text-align: center;
        &:nth-child(2) {
            margin: 0 20px;
        }
    }
    .item-1 {
        background-image: url(./assets/clfw-5.png);
    }
    .item-2 {
        background-image: url(./assets/clfw-6.png);
    }
    .item-3 {
        background-image: url(./assets/clfw-6.png);
    }
}
</style>
