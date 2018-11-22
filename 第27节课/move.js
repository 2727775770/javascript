
/*
* 运动框架 （需要babel进行语法兼容处理）
* param:
*       node - object 必须 表示要进行运动的节点
*       css - string 必须 表示要改变的css属性
*       target - number 必须 表示属性的终点值
*       step - number 选填 表示运动速度的正数，默认5
* return:
*       undefined
*/
window.Move=(function () {
    //requestAnimationFrame兼容问题
    window.requestAnimationFrame=window.requestAnimationFrame||function(f){return setTimeout(f,1000/60)}
    window.cancelAnimationFrame=window.requestAnimationFrame||clearTimeout;

    return function(node,css,target,step=5) {
        //获取node结点所有的样式的对象
        let cssObj=node.currentStyle||getComputedStyle(node);//IE和其他浏览器的获取
        //存储对象的某样式的数据的变量
        let record=parseFloat(cssObj[css]);//字符串返回小数
        //特殊的属性
        if(record === "opacity"&& isNaN(record))record=1;
        //判断变化的量是增加还是减少
        // if(record<target){
        //     step=Math.abs(step);
        // }else{
        //     step=-Math.abs(step);
        // }

        // if(bool){
        //     step=-Math.abs(step);
        // }else{
        //     step=Math.abs(step);
        // }

        //不变
        if(record===target) return;
        //终点的值
        let bool= (record>target);
        //判断变化的量是增加还是减少
        step= bool? -Math.abs(step):Math.abs(step);

       //定义动画
        function f() {
            record +=step;//变化的量

            //变化过程
            // if(bool?  record<=target : record>=target){
            //     node.style[css]=target+"px";
            // }else{
            //     node.style[css]=record+"px";//
            //     requestAnimationFrame(f);//请求动画
            // }

            // let xbool=(bool?  record<=target : record>=target);
            // xbool? node.style[css]=target+"px": node.style[css]=record+"px",requestAnimationFrame(f);

            //变化过程
            let xbool=(bool?  record<=target : record>=target);
            let cssVal=(xbool? target:record);
                if(css==="opacity"){
                    node.style.opacity=cssVal;
                    node.style.filter="alpha(opacity="+cssVal*100+")";
                }else if(css==="zIndex"){
                    node.style.zIndex=cssVal;
                }else {
                    node.style[css]=cssVal+"px";
                }
                xbool||requestAnimationFrame(f);
        }
        //请求动画，得做requestAnimationFrame兼容
        requestAnimationFrame(f);
    }
})()
















