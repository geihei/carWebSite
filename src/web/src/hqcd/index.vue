<!--
 * @Descripttion: wnbm
 * @version: 3.5.1
 * @Author: maojike
 * @Date: 2020-09-20 10:39:33
 * @LastEditors: maojike
 * @LastEditTime: 2020-09-20 13:13:51
-->
<template>
    <div>
      <img src="@/common/assets/hqcd/banner1.png" class="banner-img" alt="">
      <span class="title margin-left270">红旗车队服务核心</span>
      <img src="@/common/assets/hqcd/banner2.png" class="banner-img1" alt="">
      <div class="content-container">
        <span class="title">红旗车队服务标准</span>
        <div class="icon-container">
          <div class="icon-cell">
            <img src="@/common/assets/hqcd/icon1.png" class="icon-img" alt="">
            <div class="icon-text">1个理念</div>
            <div class="icon-point">...</div>
          </div>
          <div class="icon-cell">
            <img src="@/common/assets/hqcd/icon2.png" class="icon-img" alt="">
            <div class="icon-text">2个重点</div>
            <div class="icon-point">...</div>
          </div>
          <div class="icon-cell">
            <img src="@/common/assets/hqcd/icon3.png" class="icon-img" alt="">
            <div class="icon-text">4项要求</div>
            <div class="icon-point">...</div>
          </div>
        </div>
        <div class="detail-container">
          <div class="detail-left detail-img1">
            <div class="img-text">1个理念</div>
            <div class="img-text1">AN IDEA</div>
          </div>
          <div class="detail-right">
            <div class="detail-cell margin-bottom20">
              <div class="detail-title">等候多一分钟</div>
              <div class="detail-text">提前抵达、礼貌恭送，让用户时刻感受陪伴。</div>
            </div>
            <div class="detail-cell margin-bottom20">
              <div class="detail-title">清洁多一分钟</div>
              <div class="detail-text">形象管理、车辆清洁、备品整备、让用户体验舒适环境。</div>
            </div>
            <div class="detail-cell">
              <div class="detail-title">关怀多一分钟</div>
              <div class="detail-text">主动为老人、小孩、孕妇等特殊人群提供服务，让用户感受暖心</div>
            </div>
            <div class="detail-cell">
              <div class="detail-title">沟通多一分钟</div>
              <div class="detail-text">订单确认、服务提示、下车提醒、让用户更舒心更信赖。</div>
            </div>
          </div>
        </div>
        <div class="detail-container">
          <div class="detail-left detail-img2">
            <div class="img-text">2个重点</div>
            <div class="img-text1">TWO THINGS</div>
          </div>
          <div class="detail-right margin-left40">
            <div class="detail-cell" style="flex:0.5">
              <div class="detail-title">安全抵达</div>
              <div class="detail-text">时刻谨记“乘客安全第一”</div>
            </div>
            <div class="detail-cell">
              <div class="detail-title">尊享体验</div>
              <div class="detail-text">时刻保持“乘客保持愉悦”</div>
            </div>
          </div>
        </div>
        <div class="detail-container">
          <div class="detail-left detail-img3">
            <div class="img-text">4项要求</div>
            <div class="img-text1">FOUR REQUIREMENTS</div>
          </div>
          <div class="detail-right" style="text-align:center;">
            <div class="detail-cell" style="flex:0.25;">
              <div class="detail-title">三言</div>
              <div class="detail-text">“请”字开头</div>
              <div class="detail-text">“谢”字随后</div>
              <div class="detail-text">“您”不离口</div>
            </div>
            <div class="detail-cell" style="flex:0.25">
              <div class="detail-title">三行</div>
              <div class="detail-text">提拿行李</div>
              <div class="detail-text">主动开门</div>
              <div class="detail-text">平稳驾驶</div>
            </div>
            <div class="detail-cell" style="flex:0.25">
              <div class="detail-title">三净</div>
              <div class="detail-text">车身干净</div>
              <div class="detail-text">内饰干净</div>
              <div class="detail-text">着装干净</div>
            </div>
            <div class="detail-cell" style="flex:0.25">
              <div class="detail-title">三行</div>
              <div class="detail-text">不接打电话</div>
              <div class="detail-text">不主动攀谈</div>
              <div class="detail-text">不准有异味</div>
            </div>
          </div>
        </div>
        <span class="title margin-top90">红旗车队服务标准</span>
        <div class="standard-container">
          <div class="standard-cell">
            <img src="@/common/assets/hqcd/chedui1.png" class="standard-img" alt="">
            <div class="standard-title">车辆整备</div>
            <div class="standard-text">Vehicle servicing</div>
          </div>
          <div class="standard-cell">
            <img src="@/common/assets/hqcd/chedui2.png" class="standard-img" alt="">
            <div class="standard-title">司机形象</div>
            <div class="standard-text">Driver image</div>
          </div>
          <div class="standard-cell">
            <img src="@/common/assets/hqcd/chedui3.png" class="standard-img" alt="">
            <div class="standard-title">服务流程</div>
            <div class="standard-text">Service process</div>
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
  .banner-img{
    display: block;
    height: 833/@rpx;
    width: 100%;
    margin-bottom: 70/@rpx;
  }
  .banner-img1{
    display: block;
    width: 100%;
    height: 675/@rpx;
    margin-top:50/@rpx;
    margin-bottom: 77/@rpx;
  }
  .title{
    font-size: 42/@rpx;
    color: #383838;
    line-height: 1;
    position: relative;
  }
  .margin-left270{
    margin-left: 270/@rpx;
  }
  .title::after{
    content: '';
    position: absolute;
    left: 0;
    bottom: -10/@rpx;
    width: 100%;
    height: 8/@rpx;
    background-color: #003A8F;
  }
  .content-container{
    max-width: 1370/@rpx;
    margin: 0 auto;    
  }
  .icon-container{
    display: flex;
    justify-content: space-between;
    padding: 100/@rpx 90/@rpx 60/@rpx 90/@rpx;
    box-sizing: border-box;
  }
  .icon-cell{
    text-align: center;
  }
  .icon-img{
    width: 152/@rpx;
    height: 152/@rpx;
  }
  .icon-text{
    font-size: 30/@rpx;
    color: #343434;
    line-height: 1;
    margin-top: 35/@rpx;
  }
  .icon-point{
    font-size: 28/@rpx;
    color: #064094;
    line-height: 1;
    margin-top: 23/@rpx;
  }
  .detail-container{
    background-color: #F2F5F8;
    padding: 20/@rpx 32/@rpx 20/@rpx 32/@rpx;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-bottom: 40/@rpx;
    flex-wrap: wrap;
  }
  .detail-left{
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 408/@rpx;
    height: 254/@rpx;
    background-position: center center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .detail-img1{
    background-image: url('@/common/assets/hqcd/biaozhun1.png');
  }
  .detail-img2{
    background-image: url('@/common/assets/hqcd/biaozhun2.png');
  }
  .detail-img3{
    background-image: url('@/common/assets/hqcd/biaozhun3.png');
  }
  .img-text{
    font-size: 30/@rpx;
    color:white;
    line-height: 1;
  }
  .img-text1{
    font-size: 20/@rpx;
    color:white;
    line-height: 1;
    margin-top: 20/@rpx;
  }
  .detail-right{
    margin-left: 65/@rpx;
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    justify-content: space-around;
    align-content: center;
  }
  .detail-cell{
    max-width: 360/@rpx;
  }
  .margin-bottom20{
    margin-bottom: 20/@rpx;
  }
  .detail-title{
    font-size: 22/@rpx;
    color:#003A90;
    line-height: 1;
  }
  .detail-text{
    font-size: 18/@rpx;
    line-height: 26/@rpx;
    color:#808080;
    margin-top: 11/@rpx;
    word-break:break-all;
  }
  .margin-top90{
    margin-top: 90/@rpx;
  }
  .margin-left40{
    margin-left: 0;
  }
  .standard-container{
    margin-top: 94/@rpx;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .standard-cell{
    text-align: center;
  }
  .standard-img{
    width: 437/@rpx;
    height: 452/@rpx;
  }
  .standard-title{
    font-size: 46/@rpx;
    color:#343434;
    line-height: 1;
    margin-top: 26/@rpx;
  }
  .standard-text{
    font-size:22/@rpx;
    color:#343434;
    line-height: 1;
    margin-top: 10/@rpx;
  }
</style>
