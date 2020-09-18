module.exports = {
    env: {
        es6: true,
        browser: true,
    },

    root: true,
    parser: 'vue-eslint-parser',
    parserOptions: {
        sourceType: 'module',
        parser: 'babel-eslint',
    },
    extends: 'airbnb-base',
    plugins: [
        'import',
    ],
    rules: {
        'import/no-dynamic-require': 'off',
        'no-console': 'off',
        'func-names': 'off',
        'no-underscore-dangle': 'off',
        eqeqeq: 'off',
        'no-lonely-if': 'off',
        'padded-blocks': 'off',
        'prefer-arrow-callback': 'off',
        camelcase: 'off',
        'no-unused-vars': [ // 定义了变量没有使用
            'error',
            {
                vars: 'all',
                args: 'none',
            },
        ],
        indent: [
            'error',
            4,
            { SwitchCase: 1 },
        ],
        semi: [
            'error',
            'never',
        ],
        'import/no-unresolved': 'off',
        'no-shadow': 'off',
        'import/no-extraneous-dependencies': 'off',
    },
}
