//改文件下 命令行内输入 nmp i koa
//改文件下 命令行内输入 node ./koa.js

const Koa2=require('koa')
const app=new Koa2()

app.use(ctx=>{
    ctx.set('Access-Control-Allow-Origin','*')
    ctx.body='真棒'
})

app.listen(6062)















