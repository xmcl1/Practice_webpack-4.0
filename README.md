# webpack 4.0构建步骤笔记
---
克隆代码到本地后执行以下代码
1. 安装依赖
```
cnpm install
```
2. 运行项目
```
npm run serve
```
---
### 目录结构
```
src
    index.html    (手动创建)
    index.js     （手动创建）
package.json     （npm init -y）
webpack.config.js (手动创建)
```
### 徒手构建 webpack 简易项目
1. 创建 src 目录
```
**手动创建**

index.html 网站首页文件
index.js   项目入口文件（webpack打包入口文件）
```
2. 创建 package.json
```
npm init
或
npm init -y
```
3. 安装依赖
```
cnpm i webpack -D   (--save-dev)
cnpm i webpack-cli -D   (--save-dev)
cnpm i webpack-dev-server -D   (--save-dev)
cnpm i html-webpack-plugin -D   (--save-dev)
```
4. 配置 webpack.config.js 文件
```js
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
```
5. 配置 package.json 文件
```json

  "scripts": {
    "build": "webpack",
    "serve": "webpack-dev-server --open --hot --host 127.0.0.1 --port 3000"
  }
```
### 配置已完成
- 运行项目
```
npm run serve
```
- 打包项目
```
npm run build
```
