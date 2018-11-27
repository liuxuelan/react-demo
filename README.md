# react-demo
第一步：创建package.json文件，命令：npm init
基本配置文件：
{
"name": "react-demo”,                             //   项目名称
"version": "1.0.0”,                                    //    项目版本号
"description": "react project",                 //     项目简介
"main": "index.js",                                  //      主要入口文件
"scripts": {
"start": "webpack-dev-server --hot --inline --colors",        // 开发环境启动命令
"build": "webpack --progress --colors"                              //   发布环境命令
},
"author": "liuliu",                             // 作者  
"license": "ISC"
}
第二步：安装各种依赖
1.安装react                                           命令： npm i —save react
2.安装react-dom                                   命令：npm i —save react-dom
3.安装webpack                                     命令：npm i —save-dev webpack
4.webpack官网出的一个小型express服务器，主要特性是支持热加载    命令：npm install —save-dev webpack-dev-server      
5.安装Babel，主要把ES6转换成ES5      命令：npm i —save-dev babel-core
6.webpack中要用的loader                      命令：npm i —save-dev  babel-loader
7.npm install —save babel-polyfill
8.npm inatall —save babel-runtime
9.npm install —save-dev babel-plugin-transform-runtime
10.npm install —save-dev babel-preset-es2015
11.npm install —save-dev babel-preset-stage-2

第三步：创建webpack.config.js文件

var webpack = require('webpack’);
 module.exports = { 
    entry: './src/app.js’,                       // 打包的入口文件
    output: {                                       // 配置打包的结果
        path: __dirname + '/build’,       // 定义输出文件路径
        filename: “index.js”                  // 定义输出文件名
    }, 
    module: {                                      // 对模块的处理逻辑
         rules: [{                                    // 定义一系列的加载器
                 test: /\.js$/,                      //  用于匹配的文件
                 exclude: /node_modules/,   // 排除的文件夹
                 loader: 'babel-loader’,       //  制定模块加载器
                 query: {                              // 定义需要的插件
                       plugins: ['transform-runtime'], 
                        presets: ['es2015', 'react', 'stage-2']
                  } 
             }, {
                    test: /\.css$/,
                    loader: "style-loader!css-loader" 
             }]
      } 
}

第四步：启动项目配置
在package.json中添加：
"scripts": {
"start": "webpack-dev-server --hot --inline --colors”,   //  开发环境启动项目命令
"build": "webpack --progress —colors”                        // 发布项目执行命令
},


第五步：完整的package.json,后续还需要更多其他的依赖，比如：less,sass,gulp等
{
"name": "react-demo",
"version": "1.0.0",
"description": "react project",
"main": "index.js",
"scripts": {
"start": "webpack-dev-server --hot --inline --colors",
"build": "webpack --progress --colors"
},
"author": "xuelan.liu",
"license": "ISC",
"dependencies": {
"babel-polyfill": "^6.26.0",
"babel-runtime": "^6.26.0",
"react": "^16.6.3",
"react-dom": "^16.6.3"
},
"devDependencies": {
"babel-core": "^6.26.3",
"babel-loader": "^7.1.5",
"babel-plugin-transform-runtime": "^6.23.0",
"babel-preset-es2015": "^6.24.1",
"babel-preset-react": "^6.24.1",
"babel-preset-stage-2": "^6.24.1",
"webpack": "^4.26.0",
"webpack-cli": "^3.1.2",
"webpack-dev-server": "^3.1.10"
}
}

项目目录：


Build:打包后的目录
Src:项目源码目录
        Components: 项目相关组件
         App.js:   入口文件
Index.html: 项目入口页面
