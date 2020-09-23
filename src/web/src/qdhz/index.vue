<template>
  <div>
    <div class="main-container">
      <img src="@/common/assets/qdhz/banner.png" class="banner" alt="">
      <div class="content-container">
        <div class="title-container">
          <div class="title-ch">选择一汽出行</div>
          <div class="title-en">Choose FAWM</div>
        </div>
        <div class="group-container">
          <div class="group-cell">
            <img src="@/common/assets/qdhz/group1.png" class="group-img" alt="">
            <div class="group-title">品牌支持</div>
            <div class="group-text">一汽集团全资子公司</div>
            <div class="group-text">红旗品牌热销车型</div>
            <div class="group-text">厂家支持宣传推广</div>
          </div>
          <div class="group-cell">
            <img src="@/common/assets/qdhz/group2.png" class="group-img" alt="">
            <div class="group-title">产品支持</div>
            <div class="group-text">厂家直接供货专属</div>
            <div class="group-text">定制车型 价格低</div>
            <div class="group-text">品质保障</div>
          </div>
          <div class="group-cell">
            <img src="@/common/assets/qdhz/group3.png" class="group-img" alt="">
            <div class="group-title">政策支持</div>
            <div class="group-text">超高返佣 金融支持</div>
            <div class="group-text">带你实现创意梦想</div>
          </div>
          <div class="group-cell">
            <img src="@/common/assets/qdhz/group4.png" class="group-img" alt="">
            <div class="group-title">业务支持</div>
            <div class="group-text">正规网约车授权合作商</div>
            <div class="group-text">精英运营团队</div>
            <div class="group-text">提供司机运营管理</div>
          </div>
        </div>
        <div class="title-container">
          <div class="title-ch">加盟条件</div>
          <div class="title-en">Terms of admission</div>
        </div>
        <div class="info-container">
          <div class="info-cell">
            <span class="cell-title">准入基本条件</span>
            <div class="cell-text">1.场地：具备50平方米以上办公场地或门店展厅；</div>
            <div class="cell-text">2.资质：工商注册登记营业执照，注册资金不少于100万，营业执照经营范围需包含“汽车租赁”或“网络预约出租汽车”， <br>可开具咨询</div>
            <div class="cell-text">3.人员：负责人从事汽车行业工作三年以上，内勤1名，熟悉业务的团队业务人员5名以上。</div>
          </div>
          <div class="info-cell">
            <span class="cell-title">合作伙伴需提供的资质材料</span>
            <div class="cell-text">1.营业执照扫描件（加盖公章）；</div>
            <div class="cell-text">2.开户许可证扫描件（加盖公章）;</div>
            <div class="cell-text">3.提供“国家企业信用信息公示系统”公司名录打印件及网页截图<br>（网址：http://www.qdcredit.gov.cn/？</div>
            <div class="cell-text">4.公司法人身份证正反面复印件；</div>
            <div class="cell-text">5.合作伙伴办公场地/门店租用或购买证明</div>
            <div class="cell-text">6.合作伙伴办公场地/门店门头照、前台、办公区/门店展厅实景照片</div>
          </div>
          <div class="info-cell">
            <span class="cell-title">驾驶证初次领证(日期驾龄)</span>
            <div class="cell-text">3年及以上</div>
            <div class="cell-text">无暴力犯罪记录，无交通肇事罪、危险驾驶犯罪记录、无吸毒记录、无饮酒后驾驶记录</div>
          </div>
        </div>
      </div>
      <Form type="1" title="渠道合作"/>

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
    width: 200/@rpx;
    height: 200/@rpx;
  }
  .group-title{
    font-size: 32/@rpx;
    color:#343434;
    line-height: 1;
    margin-top: 24/@rpx;
    margin-bottom: 35/@rpx;
  }
  .group-text{
    font-size:18/@rpx;
    color:#343434;
    line-height: 32/@rpx;
    // margin-top: 17/@rpx;
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
    // line-height: 1;
    margin-top: 24/@rpx;

  }
  .cell-text:nth-child(2){
    margin-top: 63/@rpx;
  }

</style>