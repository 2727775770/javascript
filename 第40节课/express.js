// 利用express框架搭建node服务器 提供数据接口
// 为了记录node项目所使用的依赖 npm init -y  文件夹名称不能是 含中文 大写
// 现在已经过时了
const express = require('express')
const app = express()

const http = require('http').Server(app)

app.get('/',function (req,res) {

    res.header('Access-Control-Allow-Origin','*');
    res.send('大家都想学习新技术，真好！！！');
})

http.listen(6061)