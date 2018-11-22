// 新一代node 技术解决方案 新一代框架koa
// 学习koa2框架 必定要学好 es6
// 学习了es6 才能 学习H5 才能学习前端领域的新框架（核心底层的构架 都是es6处理的）
const Koa2 = require('koa')
const app = new Koa2()

app.use(ctx=>{
    ctx.set('Access-Control-Allow-Origin','*')
    ctx.body = '能坚持到现在同学，真棒！！！'
})

app.listen(6062)