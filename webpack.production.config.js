const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    devtool: "source-map",
    entry: __dirname + "/src/app/main.js",
    output: {
        path: __dirname + "/src/public", //打包后文件存放的地方
        filename : "bundle-[hash].js" //打包后输出的文件名称
    },
    devServer: {
        host:"0.0.0.0",
        contentBase: __dirname + "\\src\\public",
        historyApiFallback: true,
        inline: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader:MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            }
                        }
                    },
                    {
                        loader:"postcss-loader"
                    }
                ]
            }
        ]
    },
    plugins : [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin(
            {
                template: __dirname + '/src/app/index.tmpl.html'//new 这个插件实例，并传入相关参数。
            }
        ),
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        new MiniCssExtractPlugin({
            filename: "[name]-[hash].css",
          }),
        new CleanWebpackPlugin()
    ]
};


//注:__dirname是node.js中的一个全局变量,它指向当前执行脚本所在的目录