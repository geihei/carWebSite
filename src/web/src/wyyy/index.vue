<!--
 * @Descripttion: wnbm
 * @version: 3.5.1
 * @Author: maojike
 * @Date: 2020-09-20 17:41:59
 * @LastEditors: maojike
 * @LastEditTime: 2020-09-20 18:36:41
-->
<template>
  <div>
    <div class="main-container">
      <img src="@/common/assets/wyyy/banner.png" class="banner" alt="">
      <img src="@/common/assets/wyyy/content1.png" class="content-1" alt="">
      <div class="content-2">
        <div class="content-text">一汽出行布局全国<span class="blue-text">五大战区</span></div>
        <div class="content-text"><span class="blue-text">48城</span>车辆规模近<span class="blue-text">7万辆</span>（2020年7月）</div>
        <div class="content-text">高效合规车辆管理模式</div>
        <div class="content-text">成熟司机服务管理体系</div>
        <div class="content-text"><span class="blue-text">高标准、规范化</span>专业出行服务队伍</div>
        <div class="content-text">为合作伙伴提供优质服务</div>
      </div>
      <div class="cell-container">
        <div class="title-container">
          <div class="title-ch">司机加盟</div>
          <div class="title-en">Drivers join in</div>
        </div>
        <img src="@/common/assets/wyyy/1.png" class="cell-img" alt="">
        <div class="blue-content">
          国企平台 品质车辆 合规运营 安全赚钱
        </div>
      </div>
      <div class="cell-container">
        <div class="title-container">
          <div class="title-ch">渠道合作</div>
          <div class="title-en">Channel cooperation</div>
        </div>
        <img src="@/common/assets/wyyy/2.png" class="cell-img" alt="">
        <div class="blue-content">
          定制车辆   专享服务   实力伙伴   共赢未来
        </div>
      </div>
      <div class="cell-container">
        <div class="title-container">
          <div class="title-ch">政企用车</div>
          <div class="title-en">Channel cooperation</div>
        </div>
        <img src="@/common/assets/wyyy/3.png" class="cell-img" alt="">
        <div class="blue-content">
          <div>成熟合作模式   专业服务团队   高效车队管理</div> 
          <div>一体化公务出行解决方案</div> 
        </div>
      </div>
      <div class="cell-container">
        <div class="title-container">
          <div class="title-ch">车队服务</div>
          <div class="title-en">Fleet service</div>
        </div>
        <img src="@/common/assets/wyyy/4.png" class="cell-img" alt="">
        <div class="blue-content">
          <div>会议会展  婚礼  旅游  活动赛事</div> 
          <div>日常生活等用车服务</div> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  computed: {

  },
  data(){
    return{

    }
  },
  methods:{

  },
  created(){

  },

  mounted(){

  }
};
</script>

<style lang="less" scoped>
  .banner{
    width: 100%;
    height: 915/@rpx;
    display: block;
    margin-bottom: 167/@rpx;
  }
  .content-1{
    width: 100%;
    height: 640/@rpx;
    display: block;
  }
  .content-2{
    background-image: url('@/common/assets/wyyy/content2.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 792/@rpx;
    background-position: center center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 43/@rpx;
  }
  .content-text{
    margin-bottom: 40/@rpx;
    font-size: 54/@rpx;
    color: #1A1818;
    line-height: 1;
  }
  .blue-text{
    font-size: 66/@rpx;
    color: #003A8F;
    font-weight: bold;
    line-height: 1;
  }
  .title-container {
      text-align: center;
      margin-top: 100/@rpx;
      margin-bottom: 80/@rpx;
      position: relative;
      .title-ch {
          font-size:50/@rpx;
          font-family: HYZongYiJ;
          font-weight: 400;
          color: #343434;
      }
      .title-en {
          font-size: 30/@rpx;
          font-family: Adobe Heiti Std;
          font-weight: 400;
          color: #666666;
      }
      &::before {
          content: '';
          width: 332/@rpx;
          height: 1/@rpx;
          background: #A0A0A0;
          position: absolute;
          bottom: 34/@rpx;
          right: 50%;
          margin-right: 160/@rpx;
      }
      &::after {
          content: '';
          width: 332/@rpx;
          height: 1/@rpx;
          background: #A0A0A0;
          position: absolute;
          bottom: 34/@rpx;
          left: 50%;
          margin-left: 160/@rpx;
      }
  }
  .cell-img{
    display: block;
    margin: 0 auto;
    width: 1411/@rpx;
    height: 668/@rpx;
    margin-top: 96/@rpx;
    margin-bottom: 56/@rpx;
  }
  .blue-content{
    background-image: url('@/common/assets/wyyy/blue.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    padding: 40/@rpx 0;
    background-position: center center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100/@rpx;
    font-size: 53/@rpx;
    line-height: 90/@rpx;
    color: white;
    font-weight: bold;
  }
  .blue-content:last-child{
    margin-bottom: 0;
  }
</style>