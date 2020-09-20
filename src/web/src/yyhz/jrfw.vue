<template>
    <div>
        <div class="banner-container">
            <img style="width: 100%;" src="./assets/jrfw-banner-1.png" alt="">
        </div>
        <div class="title-container">
            <div class="title-ch">两大领域</div>
            <div class="title-en">Two areas</div>
        </div>
        <div class="areas-container">
            <div class="area-1">大出行</div>
            <div class="area-2">新融租</div>
        </div>
        <div class="title-container">
            <div class="title-ch">三大业务</div>
            <div class="title-en">Three major businesses</div>
        </div>
        <div class="subtitle">一汽出行定制融租业务</div>
        <div class="major-container-1">
            <div class="major-1">出行运营融资</div>
            <div class="major-2">出行生态融资</div>
        </div>
        <div class="gray-container">
            <div class="subtitle">市场化出行融租业务</div>
            <div class="major-container-2">
                <div class="inner-container">
                    <div class="major major-1">网约车<br/>融租</div>
                    <div class="major major-2">经营租赁<br/>融租</div>
                    <div class="major major-3" style="margin-right: 12px;">出租驾校<br/>融租</div>
                </div>
                <div class="inner-container">
                    <div class="major major-4">供应链<br/>融租</div>
                    <div class="major major-5">消费购车<br/>融租</div>
                    <div class="major major-6">公务用车<br/>融租</div>
                </div>
            </div>
        </div>
        <div class="subtitle">经销商新融租业务</div>
        <div class="major-container-3" style="margin-bottom: 100px;">
            <div class="major-1">新零售</div>
            <div class="major-2">经销商融资</div>
        </div>
        <div class="banner-container">
            <img style="width: 100%;" src="./assets/jrfw-banner-2.png" alt="">
        </div>
        <div class="text-container">
            <div class="inner-container">
                一汽智行国际租赁与一汽集团各品牌千余家经销商实现业务合作，
                业务分布全国<span>29</span>个省级行政区
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">.title-container {
    text-align: center;
    margin-top: 100px;
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
.areas-container {
    max-width: 1377px;
    width: 100%;
    height: 436/@rpx;
    max-height: 436px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    text-align: center;
    .area-1 {
        width: 100%;
        max-width: 626px;
        height: 100%;
        background-image: url(./assets/jrfw-1.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 57px;
    }
    .area-2 {
        width: 100%;
        max-width: 626px;
        height: 100%;
        background-image: url(./assets/jrfw-2.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 57px;
    }
}
.subtitle {
    width: 500px;
    height: 70px;
    background: #003A90;
    line-height: 70px;
    font-size: 32px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #FFFFFF;
    text-align: center;
    margin: 0 auto 40px auto;
}
.major-container-1, .major-container-3 {
    width: 100%;
    max-width: 876px;
    margin: 0 auto 66px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .major-1, .major-2 {
        width: 358px;
        height: 251px;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        text-align: center;
        line-height: 251px;
        font-size: 33px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #FFFFFF;
    }
    .major-1 {
        background-image: url(./assets/jrfw-3.png);
    }
    .major-2 {
        background-image: url(./assets/jrfw-4.png);
    }
}
.major-container-3 {
    .major-1 {
        background-image: url(./assets/jrfw-11.png);
    }
    .major-2 {
        background-image: url(./assets/jrfw-12.png);
    }
}
.gray-container {
    background: #F9FAFC;
    padding: 80px 0;
    margin-bottom: 80px;
}
.major-container-2 {
    width: 100%;
    max-width: 1395px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    .inner-container {
        width: 695px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .major {
        width: 220px;
        height: 239px;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        text-align: center;
        // line-height: 239px;
        font-size: 33px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 39px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .major-1 {
        background-image: url(./assets/jrfw-5.png);
    }
    .major-2 {
        background-image: url(./assets/jrfw-6.png);
    }
    .major-3 {
        background-image: url(./assets/jrfw-7.png);
    }
    .major-4 {
        background-image: url(./assets/jrfw-8.png);
    }
    .major-5 {
        background-image: url(./assets/jrfw-9.png);
    }
    .major-6 {
        background-image: url(./assets/jrfw-10.png);
    }
}
.text-container {
    width: 100%;
    height: 400px;
    background: #003A90;
    padding: 140px 0;
    .inner-container {
        width: 100%;
        max-width: 995px;
        font-size: 32px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 54px;
        margin: 0 auto;
        text-align: center;
        span {
            font-size: 70px;
        }
    }
}
</style>
