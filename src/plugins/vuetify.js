// const Vuetify = require('Vuetify')

// const opts = {}

// export default new Vuetify(opts)



function validata() {
    const res = validataMap('data').valiString({ maxLength: 6, minLength: 3 }).valiNumber()

    if (res) {
        console.log('校验通过')
    }
}

let validataMap = function(params) {
    let value = params
    return {
        valiString: function(rule = {}) {
            // 校验规则
            // maxLength: 规定最大长度 默认不做限制
            // minLength: 规定最小长度 默认不能为空

            // todo...  可以做一些健壮性的判断 如length的格式必须为数字等

            if (rule.minLength && rule.minLength !== 0 && (value.length < rule.minLength)) {
                throw new Error(`不能小于${rule.minLength}个字`)
            }
            if (rule.maxLength && rule.maxLength !== 0 && (value.length > rule.maxLength)) {
                throw new Error(`不能大于${rule.maxLength}个字`)
            }

            if (!rule.minLength && !value) {
                throw new Error('不能为空')
            }

            return this
        },
        valiNumber: function(
            rule = {
                maxLength: 10,
                hasPoint: true,
                fix: 2,
            }
        ) {
            // 校验规则
            // maxLength: 规定最大长度 默认最长10位数字
            // minLength: 规定最小长度 默认不能为空
            // hasPoint: 是否允许小数 默认允许小数
            // fix: 小数后允许几位 hasPoint必须为true 默认2位小数

            // todo...  可以做一些健壮性的判断 如length的格式必须为数字等

            if (rule.minLength && rule.minLength !== 0 && (value.length < rule.minLength)) {
                throw new Error(`不能小于${rule.minLength}位数`)
            }
            if (rule.maxLength && rule.maxLength !== 0 && (value.length > rule.maxLength)) {
                throw new Error(`不能大于${rule.maxLength}位数`)
            }
            if (!rule.hasPoint) {
                const reg = /^([^0][0-9]+|0)$/
                if (!reg.test(value)) {
                    throw new Error('格式不正确')
                }
            } else {
                const reg = /^(([^0][0-9]+|0)\.([0-9]{1,2}))$/
                if (!reg.test(value)) {
                    throw new Error('格式不正确')
                }
            }

            if (!rule.minLength && !value) {
                throw new Error('不能为空')
            }

            return this
        },
    }
}

validata()
