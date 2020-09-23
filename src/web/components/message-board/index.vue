<!--
 * @Descripttion: wnbm
 * @version: 3.5.1
 * @Author: maojike
 * @Date: 2020-09-19 15:18:32
 * @LastEditors: maojike
 * @LastEditTime: 2020-09-20 10:34:47
-->
<template>
  <div class="main-container">
    <div class="content-container">
      <img src="@/common/assets/component-message/message-board-logo.png" class="logo-img" alt="">
      <div class="item-container">
        <div class="item-title">{{title}}</div>
        <div class="item-cell">
          <img src="@/common/assets/component-message/message-board-name.png" class="item-img1" alt="">
          <input type="text" maxlength="20" placeholder="联系人姓名" class="item-input">
        </div>
        <div class="item-cell">
          <img src="@/common/assets/component-message/message-board-phone.png" class="item-img2" alt="">
          <input type="number" maxlength="20" placeholder="联系人电话" class="item-input">
        </div>
        <div class="item-cell">
          <img src="@/common/assets/component-message/message-board-location.png" class="item-img3" alt="">
          <div class="item-input">
            <Area @province="getProvince"></Area>
          </div>
          <img src="@/common/assets/component-message/message-board-trangle.png" class="trangle-img" alt="">
        </div>
        <div class="submit-btn">确认提交</div>
      </div>
      <div class="item-container item-container1" v-if="type == 2">
        <div class="item-title">渠道合作</div>
        <div class="item-cell1">
          <img src="@/common/assets/component-message/message-board-company.png" class="item-img0" alt="">
          <input type="text" maxlength="20" placeholder="单位名称" class="item-input">
        </div>
        <div class="item-cell1">
          <img src="@/common/assets/component-message/message-board-name.png" class="item-img1" alt="">
          <input type="text" maxlength="20" placeholder="联系人姓名" class="item-input">
        </div>
        <div class="item-cell1">
          <img src="@/common/assets/component-message/message-board-phone.png" class="item-img2" alt="">
          <input type="number" maxlength="20" placeholder="联系人电话" class="item-input">
        </div>
        <div class="item-cell1">
          <img src="@/common/assets/component-message/message-board-location.png" class="item-img3" alt="">
          <div class="item-input">
            <Area @province="getProvince"></Area>
          </div>
          <img src="@/common/assets/component-message/message-board-trangle.png" class="trangle-img" alt="">
        </div>
        <div class="submit-btn">确认提交</div>
      </div>
    </div>
  </div>
</template>

<script>
import Area from '@/web/components/area'
export default {
  components: { Area },
  props: {
    type:{
      type: Number,
      default: 1,
    },
    title:{
      title: String,
      default: '司机加盟',
    }
  },
  data() {
    return {

      }
  },
  created() {

  },
  methods: {
    pageRouterSign(str) {
      // 页签跳转
      this.$router.push({name:str}) 
    },	
    getProvince(province){      
	    console.log(province);	  			
    }
  }
}
</script>
<style scoped lang="less">
  .main-container{
    background-image: url('@/common/assets/component-message/message-board-bg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 637/@rpx;
    background-position: center center;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content-container{
    background-color: white;
    padding: 48/@rpx 130/@rpx 40/@rpx 130/@rpx;
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: center;
    overflow:hidden;
    max-width: 1374/@rpx;
  }
  .logo-img{
    width: 115/@rpx;
    height: 47/@rpx;
    position: absolute;
    top: 26/@rpx;
    left: 40/@rpx;
  }
  .item-container{
    padding: 0 120/@rpx;
    box-sizing: border-box;
  }
  .item-container1{
    padding: 0;
    padding-left: 64/@rpx;
    box-sizing: border-box;
  }
  .item-title{
    font-size: 30/@rpx;
    color: #222222;
    line-height: 1;
    text-align: center;
    margin-bottom: 28/@rpx;
    font-weight: bold;
  }
  .item-cell{
    width: 404/@rpx;
    height: 65/@rpx;
    margin-bottom: 21/@rpx;
    padding: 0 30/@rpx;
    box-sizing: border-box;
    background-color: #E5F0FF;
    border-radius: 27/@rpx;
    display: flex;
    align-items: center;
    position: relative;
  }
  .item-cell1{
    width: 404/@rpx;
    height: 48/@rpx;
    margin-bottom: 15/@rpx;
    padding: 0 30/@rpx;
    box-sizing: border-box;
    background-color: #E5F0FF;
    border-radius: 27/@rpx;
    display: flex;
    align-items: center;
    position: relative;
  }
  .item-img0{
    width: 30/@rpx;
    height: 26/@rpx;
    margin-right: 29/@rpx;
  }
  .item-img1{
    width: 25/@rpx;
    height: 29/@rpx;
    margin-right: 24/@rpx;
  }
  .item-img2{
    width: 28/@rpx;
    height: 34/@rpx;
    margin-right: 21/@rpx;
  }
  .item-img3{
    width: 24/@rpx;
    height: 34/@rpx;
    margin-right: 25/@rpx;
  }
  .item-input{
    width: 100%;
    height: 30/@rpx;
    color: #222222;
    line-height: 1;
    font-size: 26/@rpx;
  }
  input::-webkit-input-placeholder{ /*WebKit browsers*/
    color: #9A9A9A;
  }

  input::-moz-input-placeholder{ /*Mozilla Firefox*/
    color: #9A9A9A;
  }

  input::-ms-input-placeholder{ /*Internet Explorer*/ 
    color: #9A9A9A;
  }
  .trangle-img{
    width: 21/@rpx;
    height: 14/@rpx;
    position: absolute;
    right: 26/@rpx;
  }
  .submit-btn{
    width: 206/@rpx;
    height: 60/@rpx;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30/@rpx;
    color: white;
    margin-top: 46/@rpx;
    background-color: #003A90;
    cursor: pointer;
  }
</style>