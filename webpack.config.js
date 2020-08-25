/*
 * @Descripttion: wnbm
 * @version: 3.5.1
 * @Author: maojike
 * @Date: 2020-08-10 22:36:49
 * @LastEditors: maojike
 * @LastEditTime: 2020-08-17 21:56:32
 */
const path = require("path");//nodejs里面的基本包，用来处理路径
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const ExtractTextPlugin =require ('extract-text-webpack-plugin') ;
const webpack = require('webpack');
// const packagejson = require('./package.json')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const {AutoWebPlugin} =require ('web-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const ComrnonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const isDev = process.env.NODE_ENV === 'development';

// const autoWebPlugin =new AutoWebPlugin ('./src',{ 
//   template: './src/index.template.html', // HTML 模板文件所在的文件路径
//   postEntrys: ['/common.css'],//所有页面都依赖这份通用的 css 样式文件
//   //提取出所有页面的公共代码
//   commonsChunk: { 
//     name:'common',//提取出公共代码 Chunk 的名称
//   }
// });
module.exports ={
  // entry: path.join(__dirname, 'src/web/entry-client.js'),
  entry:{
    pc:'./src/web/entry-client.js',
    h5:'./src/h5/entry-client.js',
    // vendor:Object.keys(packagejson.dependencies)
  },
  output: {
    path:path.resolve(__dirname,'dist'),
    filename:'[name].js',
    // publicPath:'https://cdn.example.com/assets/',
    // crossOriginloading: anonymous //（默认），在加载此脚本资源时不会带上用户的 cookies
                        // use-credentials ，在加载此脚本资源时会带上用户的 Cookies
  },
  plugins: [
    // make sure to include the plugin for the magic
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    // new UglifyJsPlugin({
    //   // 多嵌套了一层
    //   uglifyOptions: {
    //     compress: {
    //       // 在UglifyJs删除没有用到的代码时不输出警告
    //       // warnings: false,
    //       // 删除所有的 `console` 语句，可以兼容ie浏览器
    //       drop_console: true,
    //       // 内嵌定义了但是只用到一次的变量
    //       collapse_vars: true,
    //       // 提取出出现多次但是没有定义成变量去引用的静态值
    //       reduce_vars: true,
    //     },
    //     output: {
    //       // 最紧凑的输出
    //       beautify: false,
    //       // 删除所有的注释
    //       comments: false,
    //     }
    //   }
    // }),
    // autoWebPlugin,
    // new ExtractTextPlugin({ 
    //   //从. js 文件中提取出来的 .css 文件的名称
    //   filename:`［ name]_[contenthash:8].css`,
    // }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: "h5.html",
      title: "h5",
      chunks: ['h5'],  // 按需引入对应名字的js文件
      template: "./src/index.template.html"
    }),
    new HtmlWebpackPlugin({
        chunks: ['pc'],
        filename: "pc.html",
        title: "pc",
        template: "./src/index.template.html"
    }),
    // new ComrnonsChunkPlugin({
    //   name:['vendor','runtime'],
    //   filename:'[name].js',
    //   minChunks:Infinity
    // }),
    // new ComrnonsChunkPlugin({
    //   name:['common'],
    //   filename:'[name].js',
    //   chunks:['pc','h5']
    // })
    new MiniCssExtractPlugin({
      filename:`[name]_[contenthash:8].css`,
      // chunkFilename: "assets/css/[name].[hash:5].css",
    }),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      // cssProcessorOptions: cssnanoOptions,
      cssProcessorPluginOptions: {
      preset: ['default', {
            discardComments: {
                removeAll: true,
            },
            normalizeUnicode: false
        }]
      },
      canPrint: true
    })
],
  mode:'none',
  devServer:{ 
    open:true,
    port:8080
  },
  module: {
    rules: [
      {//通过vue-loader来识别以vue结尾的文件,正则表达式中的点需要转义
        test: /\.vue$/, 
        loader: 'vue-loader'
      },
      // {
      //   //用正则去匹配要用该 loader 转换的 css
      //   test: /\.css$/ , 
      //   loaders: ExtractTextPlugin.extract({ 
      //   //转换 .c ss 文件需要使用的 Loader
      //   use: ['css-loader'], 
      //   }),
      // },
      {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
                loader: 'postcss-loader',
                options: {
                    plugins: [
                        require('postcss-import')(),
                        require('autoprefixer')()
                    ]
                }
            }
        ]
      },
      {//处理图片文件
        test: /\.(gif|jpg|jpeg|png|svg)$/ ,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 20, //将所有小于20kb的图片都转为base64形式
              name: '[name]-aaa.[ext]',
              fallback :'file-loader',//否则采用 file-loader ，默认值是 file -loader
            }
          },
        ]
      },
      {
        test: /\.js$/, 
        use : ['babel-loader'],
        exclude:/node_modules/
      },
      {
        test: /\.scss/, 
        use : ['style-loader','css-loader'],
      },
      {
        test: /\.css/, 
        use : ['style-loader','css-loader','postcss-loader'],
      },
      {
        test: /\.png$/, 
        use : ['file-loader'],
      }
    ]
  },
  node:{
    fs: 'empty'
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
    splitChunks: {
      cacheGroups: {
        // 注意: priority属性
        // 其次: 打包业务中公共代码
        common: {
          name: "common",
          chunks: "all",
          minSize: 1,
          priority: 0
        },
        // 首先: 打包node_modules中的文件
        vendor: {
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          priority: 10
        },
        styles: {
          name: 'style',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  devtool:'source-map'
}
