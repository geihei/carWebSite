<!--
 * @Descripttion: wnbm
 * @version: 3.5.1
 * @Author: maojike
 * @Date: 2020-04-26 14:52:39
 * @LastEditors: maojike
 * @LastEditTime: 2020-09-22 23:39:00
--> 
<template>
  <div>
    <div class="main-container">
      <div class="banner">
        <img src="@/common/assets/ppzx/banner-text.png" class="banner-text" alt="">
      </div>
      <div class="title-container">
        <div class="title-ch">品牌资讯</div>
        <div class="title-en">Brand information</div>
      </div>
      <div class="content-container">
        <div class="item-cell">
          <img src="@/common/assets/ppzx/item.png" class="item-img" alt="">
          <div class="item-text">111</div>
        </div>
        <div class="item-cell">
          <img src="@/common/assets/ppzx/item.png" class="item-img" alt="">
          <div class="item-text">111</div>
        </div>
        <div class="item-cell">
          <img src="@/common/assets/ppzx/item.png" class="item-img" alt="">
          <div class="item-text">111</div>
        </div>
        <div class="item-cell">
          <img src="@/common/assets/ppzx/item.png" class="item-img" alt="">
          <div class="item-text">111</div>
        </div>
      </div>
      <v-pagination
        v-model="pagination.page"
        :length="pagination.total / 5"
        :total-visible="pagination.visible"
        color="#002C6B"
        light="true"
      ></v-pagination>
    </div>
  </div>
</template>

<script>

export default {
  computed: {

  },
  data(){
    return{
      pagination: {
        page: 1,
        total: 100,
        perPage: 10,
        visible: 4
      }
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
  .main-container{
    padding-bottom: 100/@rpx;
  }
  .banner{
    height: 915/@rpx;
    margin-bottom: 62/@rpx;
    position: relative;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center center;
    background-image: url('@/common/assets/ppzx/banner.png');
  }
  .banner-text{
    position: absolute;
    top: 155/@rpx;
    left: 244/@rpx;
    width: 1276/@rpx;
    height: 283/@rpx;
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
  .content-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1341/@rpx;
    margin: 0 auto;
    position: relative;
    margin-bottom: 24/@rpx;
  }
  .item-img{
    width: 437/@rpx;
    height: 420/@rpx;
  }
  .item-text{
    width: 437/@rpx;
    height: 100/@rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    font-size: 22/@rpx;
    // color: #343434;
    line-height: 1;
    margin-bottom: 30/@rpx;
    box-sizing: border-box;
    box-shadow: 0px 1px 28px 0px rgba(52, 68, 92, 0.18);
    position: relative;
  }
  .item-cell{
    position: relative;
  }
  .item-cell:hover{
    color: #003A90;
    cursor: pointer;
    // border-bottom: 1px/@rpx solid #003A90;
  }
  .item-cell:hover::after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 26/@rpx;
    width: 100%;
    height: 1px;
    background-color: #003A90;
  }
</style>