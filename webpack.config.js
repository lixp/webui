module.exports = {
    devtool: "source-map",
    entry: __dirname + "/src/app/main.js",
    output: {
        path: __dirname + "/src/public", //打包后文件存放的地方
        filename : "bundle.js" //打包后输出的文件名称
    },
    devServer: {
        contentBase: __dirname + "\\src\\public",
        historyApiFallback: true,
        inline: true
    }

};
//注:__dirname是node.js中的一个全局变量,它指向当前执行脚本所在的目录