const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

function resolve(dir) {
    return path.join(__dirname, '../', dir)
}

const isReport = process.argv.includes('--report')

let config = {
    entry: {
        web: './src/web/app.js',
        h5: './src/h5/app.js',
        demo: './src/vuetify-demo/app.js'
    },
    mode: 'development',
    output: {
        path: resolve('dist'),
        filename: '[name].[hash].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@': resolve('src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src')],
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    esModule: false,
                    name: '[name].[hash:7].[ext]'
                },
                include: [resolve('src')],
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    esModule: false,
                    name: '[name].[hash:7].[ext]'
                },
                include: [resolve('src')],
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    esModule: false,
                    name: '[name].[hash:7].[ext]'
                },
                include: [resolve('src')],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                include: [resolve('src')],
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader',"postcss-loader",'less-loader'],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ],
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin("styles.css"),
        new HtmlWebpackPlugin({
			filename:'../dist/web.html',
			template:'./src/index.template.html',
            chunks:['web'],
            minify:{
                removeRedundantAttributes:true, // 删除多余的属性
                collapseWhitespace:true, // 折叠空白区域
                removeAttributeQuotes: true, // 移除属性的引号
                collapseBooleanAttributes: true // 省略只有 boolean 值的属性值 例如：readonly checked
            },
        }),
        new HtmlWebpackPlugin({
			filename:'../dist/h5.html',
			template:'./src/index.template.html',
			chunks:['h5'],
            minify:{
                removeRedundantAttributes:true, // 删除多余的属性
                collapseWhitespace:true, // 折叠空白区域
                removeAttributeQuotes: true, // 移除属性的引号
                collapseBooleanAttributes: true // 省略只有 boolean 值的属性值 例如：readonly checked
            },
        }),
        new HtmlWebpackPlugin({
			filename:'../dist/demo.html',
			template:'./src/index.template.html',
			chunks:['demo'],
            minify:{
                removeRedundantAttributes:true, // 删除多余的属性
                collapseWhitespace:true, // 折叠空白区域
                removeAttributeQuotes: true, // 移除属性的引号
                collapseBooleanAttributes: true // 省略只有 boolean 值的属性值 例如：readonly checked
            },
        }),
    ],
    optimization: {
        splitChunks: {
            // 代码分割时默认对异步代码生效，all：所有代码有效，inital：同步代码有效
            chunks: 'all',
            // 代码分割最小的模块大小，引入的模块大于 20000B 才做代码分割
            minSize: 20000,
            // 代码分割最大的模块大小，大于这个值要进行代码分割，一般使用默认值
            maxSize: 0, 
            // 引入的次数大于等于1时才进行代码分割
            minChunks: 1,
            // 最大的异步请求数量,也就是同时加载的模块最大模块数量
            maxAsyncRequests: 30,
            // 入口文件做代码分割最多分成 30 个 js 文件
            maxInitialRequests: 30, 
            // 文件生成时的连接符
            automaticNameDelimiter: '~', 
            enforceSizeThreshold: 5000,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: 10,
                    name: 'vendors'
                },
                common: {
                    test: /[\\/]src[\\/]/,
                    priority: 5,
                    name: 'common'
                }
            }
        }
    },
    externals: {
        'Vue': 'Vue',
        'Vuetify': 'Vuetify',
        'VueRouter': 'VueRouter',
        'vuex': 'Vuex',
    }
}

if (isReport) {
    config.plugins.push(new BundleAnalyzerPlugin({
        //  可以是`server`，`static`或`disabled`。
        //  在`server`模式下，分析器将启动HTTP服务器来显示软件包报告。
        //  在“静态”模式下，会生成带有报告的单个HTML文件。
        //  在`disabled`模式下，你可以使用这个插件来将`generateStatsFile`设置为`true`来生成Webpack Stats JSON文件。
        analyzerMode: 'server',
        analyzerHost: '127.0.0.1',
        analyzerPort: 8888, 
        reportFilename: 'report.html',
        //  模块大小默认显示在报告中。
        //  应该是`stat`，`parsed`或者`gzip`中的一个。
        //  有关更多信息，请参见“定义”一节。
        defaultSizes: 'parsed',
        openAnalyzer: true,
        generateStatsFile: false, 
        statsFilename: 'stats.json',
        statsOptions: null,
        logLevel: 'info'
    }))
}



module.exports = config