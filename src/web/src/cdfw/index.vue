<template>
  <div>
    <div class="main-container">
      <img src="@/common/assets/hqcd/banner1.png" class="banner-img" alt="">
      <div class="content-container">
        <div class="title-container">
          <div class="title-ch">车队服务</div>
          <div class="title-en">Fleet service</div>
        </div>
        <div class="cell-container">
          <div class="cell-item">
            <img src="@/common/assets/cdfw/1.png" class="cell-img" alt="">
            <div class="cell-text">会议会展</div>
          </div>
          <div class="cell-item">
            <img src="@/common/assets/cdfw/2.png" class="cell-img" alt="">
            <div class="cell-text">婚礼</div>
          </div>
          <div class="cell-item">
            <img src="@/common/assets/cdfw/3.png" class="cell-img" alt="">
            <div class="cell-text">旅游</div>
          </div>
          <div class="cell-item">
            <img src="@/common/assets/cdfw/4.png" class="cell-img" alt="">
            <div class="cell-text">活动赛事</div>
          </div>
        </div>
      </div>
      <Form type="1" title="车队服务"/>
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
  .banner-img{
    display: block;
    height: 915/@rpx;
    width: 100%;
    margin-bottom: 131/@rpx;
  }
  .content-container{
    max-width: 1370/@rpx;
    margin: 0 auto;
    margin-top: 80/@rpx;
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
          font-family: Arial;
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
  .cell-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 38/@rpx;
  }
  .cell-item{
    margin-bottom: 60/@rpx;
  }
  .cell-img{
    width: 660/@rpx;
    height: 395/@rpx;
  }
  .cell-text{
    text-align: center;
    font-size: 32/@rpx;
    color: #343434;
    margin-top: 30/@rpx;
    line-height: 1;
  }
</style>
