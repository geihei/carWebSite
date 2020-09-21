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
            <div class="item item-4">
                门店智能化<br>
                作业平台
            </div>
            <div class="item item-5">
                COP系统的<br>
                数据监控
            </div>
            <div class="item item-6">
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
        <div class="bussiness-container">
            <div class="item item-1">
                <div class="wrapper">广州</div>
            </div>
            <div class="item item-2">
                <div class="wrapper">长春</div>
            </div>
        </div>
        <div class="tips-container">
            <span class="circle"></span>
            <span>到2022年，一汽出行汽车服务预计加盟网点数将达到100家，年服务能力大于15万台</span>
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
    margin-top: 165px;
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
        flex: 1;
        height: 306/@rpx;
        max-height: 306px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        font-size: 42px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 1.2;
        text-align: center;
        // height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
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
    .item-4 {
        background-image: url(./assets/clfw-8.png);
    }
    .item-5 {
        background-image: url(./assets/clfw-9.png);
    }
    .item-6 {
        background-image: url(./assets/clfw-10.png);
    }
}
.bussiness-container {
    width: 100%;
    max-width: 1360px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    .item {
        flex: 1;
        max-width: 665px;
        height: 460/@rpx;
        max-height: 460px;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        position: relative;
        .wrapper {
            font-size: 49px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #FFFFFF;
            text-shadow: 1px 8px 16px rgba(0, 0, 0, 0.54);
            position: absolute;
            right: 46px;
            bottom: 34px;
        }
    }
    .item-1 {
        margin-right: 15px;
        background-image: url(./assets/clfw-11.png);
    }
    .item-2 {
        margin-left: 15px;
        background-image: url(./assets/clfw-12.png);
    }
}
.tips-container {
    font-size: 19px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #383838;
    line-height: 36px;
    margin-top: 33px;
    margin-bottom: 105px;
    display: flex;
    align-items: center;
    justify-content: center;
    .circle {
        width: 10px;
        height: 10px;
        background: #003A90;
        border-radius: 50%;
        display: inline-block;
        margin-right: 5px;
    }
}
</style>
