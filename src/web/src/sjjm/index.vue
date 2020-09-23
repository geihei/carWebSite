<template>
  <div>
    <div class="main-container">
      <img src="@/common/assets/sjjm/banner.png" class="banner" alt="">
      <div class="content-container">
        <div class="title-container">
          <div class="title-ch">我们的优势</div>
          <div class="title-en">Our advantage</div>
        </div>
        <div class="group-container">
          <div class="group-cell">
            <img src="@/common/assets/sjjm/group1.png" class="group-img" alt="">
            <div class="group-title">放心车源</div>
            <div class="group-text">厂家直供，验车轻松</div>
          </div>
          <div class="group-cell">
            <img src="@/common/assets/sjjm/group2.png" class="group-img" alt="">
            <div class="group-title">代办手续</div>
            <div class="group-text">专人提供上牌、</div>
            <div class="group-text">保险、合约等手续服务，</div>
            <div class="group-text">安心无忧</div>
          </div>
          <div class="group-cell">
            <img src="@/common/assets/sjjm/group3.png" class="group-img" alt="">
            <div class="group-title">超低价格</div>
            <div class="group-text">厂家直供，超低价格，</div>
            <div class="group-text">量产车租金，豪华车享受</div>
          </div>
          <div class="group-cell">
            <img src="@/common/assets/sjjm/group4.png" class="group-img" alt="">
            <div class="group-title">售后保障</div>
            <div class="group-text">4S店贴心服务，安心保障</div>
          </div>
          <div class="group-cell">
            <img src="@/common/assets/sjjm/group5.png" class="group-img" alt="">
            <div class="group-title">运营支持</div>
            <div class="group-text">正规网约车授权合作商</div>
            <div class="group-text">提供运营、数据分析、</div>
            <div class="group-text">司机培训一站式管理</div>
          </div>
        </div>
        <div class="title-container">
          <div class="title-ch">申请流程</div>
          <div class="title-en">Application process</div>
        </div>
        <div class="icon-container">
          <div class="icon-cell">
            <div class="icon-step"><span class="step-center">step1</span></div>
            <img src="@/common/assets/sjjm/icon1.png" class="icon-img" alt="">
            <div class="icon-text">官网</div>
            <div class="icon-text">在线留档</div>
          </div>
          <img src="@/common/assets/sjjm/icon1.png" class="icon-arrow" alt="">
          <div class="icon-cell">
            <div class="icon-step"><span class="step-center">step2</span></div>
            <img src="@/common/assets/sjjm/icon1.png" class="icon-img" alt="">
            <div class="icon-text">线下体验</div>
            <div class="icon-text">提交申请</div>
          </div>
          <img src="@/common/assets/sjjm/icon1.png" class="icon-arrow" alt="">
          <div class="icon-cell">
            <div class="icon-step"><span class="step-center">step3</span></div>
            <img src="@/common/assets/sjjm/icon1.png" class="icon-img" alt="">
            <div class="icon-text">签约取车</div>
          </div>
          <img src="@/common/assets/sjjm/icon1.png" class="icon-arrow" alt="">
          <div class="icon-cell">
            <div class="icon-step"><span class="step-center">step4</span></div>
            <img src="@/common/assets/sjjm/icon1.png" class="icon-img" alt="">
            <div class="icon-text">上路赚钱</div>
          </div>
        </div>
        <div class="title-container">
          <div class="title-ch">招募要求</div>
          <div class="title-en">Recruitment requirements</div>
        </div>
        <div class="info-container">
          <div class="info-cell">
            <span class="cell-title">年龄</span>
            <div class="cell-text">男21-60周岁 女21-55周岁</div>
          </div>
          <div class="info-cell">
            <span class="cell-title">驾驶证准驾类型</span>
            <div class="cell-text">至少包含A1、A2、B1、B2、C1、C2</div>
          </div>
          <div class="info-cell">
            <span class="cell-title">驾驶证初次领证(日期驾龄)</span>
            <div class="cell-text">3年及以上</div>
            <div class="cell-text">无暴力犯罪记录，无交通肇事罪、危险驾驶犯罪记录、无吸毒记录、无饮酒后驾驶记录</div>
          </div>
        </div>
      </div>
      <Form type="1" title="司机加盟"/>

    </div>
  </div>
</template>

<script>

import Form from '@/web/components/message-board'
export default {
    components:{
        Form
    },
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
    margin-bottom: 103/@rpx;
  }
  .content-container{
    max-width: 1360/@rpx;
    margin: 0 auto;
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
  .group-container{
    margin-top: 87/@rpx;
    margin-bottom: 100/@rpx;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .group-cell{
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 92/@rpx;
  }
  .group-img{
    width: 160/@rpx;
    height: 160/@rpx;
  }
  .group-title{
    font-size: 30/@rpx;
    color:#343434;
    line-height: 1;
    margin-top: 34/@rpx;
  }
  .group-text{
    font-size:18/@rpx;
    color:#343434;
    line-height: 32/@rpx;
    margin-top: 17/@rpx;
  }
  .icon-container{
    margin-top: 80/@rpx;
    margin-bottom: 107/@rpx;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    // align-items: center;
  }
  .icon-cell{
    text-align: center;
    margin-bottom: 78/@rpx;
  }
  .icon-arrow{
    width: 56/@rpx;
    height: 30/@rpx;
    position: relative;
    top: 200/@rpx;
  }
  .icon-step{
    margin: 0 auto;
    width: 171/@rpx;
    height: 76/@rpx;
    background-image: url('@/common/assets/sjjm/talk.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center center;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    
    line-height: 1;
    color: white;
    margin-bottom: 30/@rpx;
  }
  .step-center{
    position: relative;
    // transform: translateY(50%);
    top: 18/@rpx;
    font-size: 24/@rpx;
  }
  .icon-img{
    width: 197/@rpx;
    height: 197/@rpx;
    margin-bottom: 34/@rpx;
  }
  .icon-text{
    font-size:30/@rpx;
    color:#343434;
    line-height: 1;
    margin-bottom: 26/@rpx;
  }
  .info-container{
    margin-top: 74/@rpx;
    margin-bottom: 84/@rpx;
  }
  .info-cell{
    margin-bottom: 40/@rpx;
  }
  .cell-title{
    font-size: 30/@rpx;
    color: #2A2D34;
    line-height: 1;
    // margin-bottom: 36/@rpx;
    // margin-bottom: 63/@rpx;
    position: relative;
  }
  .cell-title::after{
    content: '';
    position: absolute;
    left: 0;
    bottom: -30/@rpx;
    width: 100%;
    height: 4/@rpx;
    background-color: #003A8F;
  }
  .cell-text{
    font-size: 20/@rpx;
    color: #343434;
    line-height: 1;
    margin-top: 27/@rpx;

  }
  .cell-text:nth-child(2){
    margin-top: 63/@rpx;
  }

</style>