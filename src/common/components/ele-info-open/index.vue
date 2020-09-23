<template>
    <v-dialog class="dialog" v-model="dialog" persistent max-width="700px">
        <div class="header-container">
            留言板
        </div>
        <div class="inner-container">
            <div class="tip-container">
                <p>尊敬的用户：</p>
                <p style="text-indent: 2em">
                    感谢您对一汽出行的关注与信任，为了更好地为您服务，本网开辟了“留言板”栏目，在这里您可以写下对一汽出行产品和服务的咨询反馈意见、对网站建设以及网站应用方面的意见和建议，请如实填写个人信息和联系方式以便我们尽快联系到您并解决您的问题。
                </p>
            </div>
            <div class="form-container">
                <div class="require-text">带“<span class="red-tip">*</span>”的为必填项</div>
                <div class="input-container">
                    <div class="label"><span class="red-tip">*</span>姓名</div>
                    <input class="input" type="text" v-model="form.name">
                </div>
                <div class="input-container">
                    <div class="label"><span class="red-tip">*</span>所在地区</div>
                    <input class="input" type="text" v-model="form.area">
                </div>
                <div class="input-container">
                    <div class="label"><span class="red-tip">*</span>联系电话</div>
                    <input class="input" type="text" v-model="form.phone">
                </div>
                <div class="input-container">
                    <div class="label"><span class="red-tip">*</span>主题</div>
                    <input class="input" type="text" v-model="form.theme">
                </div>
                <div class="input-container">
                    <div class="label"><span class="red-tip">*</span>信息内容</div>
                    <input class="input" type="textarea" v-model="form.info">
                </div>
            </div>
            <div class="btn-container">
                <div class="btn btn-1" @click="dialog = false">确定</div>
                <div class="btn btn-2" @click="dialog = false">取消</div>
            </div>
        </div>
    </v-dialog>
</template>

<script>
export default {
    data() {
        return {
            dialog: true,
            form: {},
        }
    },
}
</script>

<style lang="less" scoped>
/deep/ .v-dialog {
    background-color: #FFF;
}
.header-container {
    font-size: 18px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #333333;
    line-height: 1;
    padding: 17px 54px;
    border-bottom: solid 3px #1D2088;
}
.inner-container {
    padding: 0 50px;
}
.tip-container {
    background: rgba(220, 236, 255, 0.6);
    border-radius: 15px;
    margin: 15px 0;
    padding: 17px 25px;
    p {
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #373737;
        line-height: 35px;
        margin-bottom: 0;
    }
}
.form-container {
    .require-text {
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #373737;
        line-height: 35px;
        margin-bottom: 23px;
    }
    .red-tip {
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        line-height: 35px;
        color: #FF3D3D;
    }
    .input-container {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        .label {
            width: 80px;
            margin-right: 13px;
            text-align: right;
        }
        .input {
            height: 34px;
            background: #FFFFFF;
            border: 1px solid #CCCCCC;
            border-radius: 3px;
            flex: 1;
        }
    }
}
.btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 28px 0;
    .btn {
        width: 90px;
        height: 37px;
        background: #1D2088;
        border-radius: 2px;
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 37px;
        text-align: center;
    }
    .btn-1 {
        margin-right: 10px;
    }
    .btn-2 {
        margin-left: 10px;
    }
}
</style>
