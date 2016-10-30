import Vue from 'vue';
//import Iscroll from './iscroll-probe.js';
let commonUtil = {

  //判断图片加载完毕
   isAllLoaded(scope,cb){
     var img_t;  //设置定时器不断检查图片是否加载完成
     var isLoad = true;

     return isImgLoad(cb);//加载完执行回调

     function isImgLoad (callback){
         var dom = document.getElementById(scope).getElementsByTagName('IMG');
         var arr = [];
         for(var i=0;i<dom.length;i++){
             arr.push(dom[i]); 
         }
         arr.forEach(function(key,value) {
         //通过高度判断是否加载完毕
         if (key.height === 0){
           isLoad = false;
           return false;
         }
       });
       if (isLoad) {
           //console.log("success");
         clearTimeout(img_t);
         callback();
       } else {
         //进入else是因为找到未加载完成的图片
         isLoad = true;
         img_t = setInterval(function(){
           isImgLoad(callback);
         },500);
       }
     }
   },
   myScroll(){
     var that = this;
     Vue.directive('scroll',function(value) {
       // isAllLoaded
            console.log(value);
       if(value.artIds){
            console.log(value.artIds);
           console.log(value.fns);
        that.isAllLoaded(value.artIds, value.fns)
       }
      
     })
   }
}


export default commonUtil;
