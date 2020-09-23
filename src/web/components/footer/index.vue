<!--
 * @Descripttion: wnbm
 * @version: 3.5.1
 * @Author: maojike
 * @Date: 2020-09-19 15:18:32
 * @LastEditors: maojike
 * @LastEditTime: 2020-09-22 23:20:53
-->
<template>
  <div class="main-container">
    <div class="logo-container">
      <div class="link-container">
        <div class="link-text">111111111</div>
      </div>
    </div>
    <div class="icon-container">
      <div class="wechat"></div>
      <div class="toutiao"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {  },
  props: {

  },
  data() {
    return {

      }
  },
  created() {

  },
  methods: {

  }
}
</script>
<style scoped lang="less">
  // <div class="main-container">
  //   <div class="logo-container">
  //     <div class="link-container">
  //       <div class="link-text">111111111</div>
  //     </div>
  //   </div>
  //   <div class="icon-container">
  //     <div class="wechat"></div>
  //     <div class="toutiao"></div>
  //   </div>
  .main-container{
    width: 100%;
    height: 264/@rpx;
    background-color: #002C6B;
    padding: 0 270/@rpx 0 16/@rpx;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo-container{
    width: 537/@rpx;
    height: 143/@rpx;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center center;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-image: url('@/common/assets/component-footer/footer-logo.png');
  }
  .link-text{
    font-size: 12/@rpx;
    color: white;
    line-height: 1;
    margin-bottom: 13/@rpx;
  }
  .icon-container{
    display: flex;
    align-items: center;
  }
  .wechat{
    width: 39/@rpx;
    height: 39/@rpx;
    margin-right: 17/@rpx;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center center;
    background-image: url('@/common/assets/component-footer/wechat.png');
  }
  .wechat:hover{
    background-image: url('@/common/assets/component-footer/wechat.png');
    width: 100/@rpx;
    height: 100/@rpx;
  }
  .toutiao{
    width: 39/@rpx;
    height: 39/@rpx;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center center;
    background-image: url('@/common/assets/component-footer/toutiao.png');
  }
  .toutiao:hover{
    background-image: url('@/common/assets/component-footer/toutiao.png');
    width: 100/@rpx;
    height: 100/@rpx;
  }
</style>