// 通过node的原生模块 http搭建数据接口

//改文件下 命令行内输入 node ./http.js

const http= require('http');

http.createServer(function (req,res) {
    res.writeHeader(200,{
        'Access-Control-Allow-Origin':'*'
    })
    res.end('hi-真好')
}).listen(6060);














