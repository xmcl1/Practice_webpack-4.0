const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')//内存中生成 index 页面的插件

const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),//源文件（将要被生成在内存中的文件模板,相当于复制一份该模板放到内存中）
    filename: 'index.html'//定义生成再内存中的首页名称
})

module.exports = {
    // mode: 'development',//development（开发模式）  production（生成模式）
    plugins:[
        htmlPlugin
    ]
}