// webpack是基于nodejs开发的，所以可以使用nodejs的语法
// 引入path模块
const path = require('path')
// 引入html打包的plugin插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 引入css打包插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 引入vue-loader的插件
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    // 单入口的配置
    entry: './src/main.js',

    // 输出的配置
    output: {
        // path表示打包之后所在的位置
        // __dirname表示这个文件所在目录的绝对路径
        path: path.resolve(__dirname, 'dist'),
        // 通过filename指定打包之后的文件名
        // filename: '[name].js'
    },
    // loader的配置，处理非js资源，如css,img,less,sass
    module: {
        rules: [
            {
                // test：用正则检查以.css结尾的文件
                test: /\.css$/,
                // MiniCssExtractPlugin.loader将css打包成单独的文件，并以link的形式加载
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                // 处理字体图标
                test:/\.ttf|woff|woff2|eot|svg$/,
                use:'url-loader'
            },
            {
                // 匹配以.vue结尾的文件
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]

    },
    // plugins插件的配置
    plugins: [
        // 不指定template的话默认生成一个引入了资源的空html
        new HtmlWebpackPlugin({
            // 生成./src/index.html并且自动引入所有外部资源
            template: './src/index.html',
            // 可以通过filename修改打包后的文件名
            // filename:'demo.html',
            // 通过minify压缩html代码，webpack5不添加minify属性的话，默认是清除空格和注释
            minify: {
                // 是否清除空格
                collapseWhitespace: true,
                // 是否清除注释
                removeComments: true
            }
        }),
        // 将css抽离为单独的.css文件
        new MiniCssExtractPlugin({
        }),
        // vue-loader的插件
        new VueLoaderPlugin({
        })
    ],
    // 通过mode指定打包的模式
    mode: 'production'//生产模式
    // mode:'development'//开发模式
}