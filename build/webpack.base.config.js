const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function resolve(dir) {
    return path.join(__dirname, '../', dir)
}

module.exports = {
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
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    esModule: false,
                    name: '[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    esModule: false,
                    name: '[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    esModule: false,
                    name: '[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader',"postcss-loader",'less-loader']
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
			chunks:['web']
        }),
        new HtmlWebpackPlugin({
			filename:'../dist/h5.html',
			template:'./src/index.template.html',
			chunks:['h5']
        }),
        new HtmlWebpackPlugin({
			filename:'../dist/demo.html',
			template:'./src/index.template.html',
			chunks:['demo']
        }),
    ]
}