// 通过 node的原生模块 http 搭建服务器 提供数据接口
const http = require('http');

http.createServer(function (req,res) {
    res.writeHeader(200,{
        'Access-Control-Allow-Origin':'*',
        'Content-Type':'text/plain;charset=utf8'
    })
    res.end('hi~大家晚上好，真好！！！');
}).listen(6060);