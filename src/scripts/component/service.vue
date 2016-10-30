<template lang="html">
  <div class="service-container">
    <h1 class="serviceh1">生活服务</h1>
     <ul class="servicelist">
       <li v-for="item in servicelist" v-link="{path:item.path}">
         <img v-bind:src="item.src"/>
         <div class="litext">
           <i>{{item.tit}}</i>
           <b>{{item.direction}}</b>
         </div>
       </li>
     </ul>
  </div>
</template>

<script>
import { changeIndex } from "../vuex/action"

export default {
  data () {
    return {
      servicelist:[
        {src:"./images/untitled0.png",tit:"应急号码通",direction:"开锁送水，周边便利",path:"/numbersense"},
        {src:"./images/untitled1.png",tit:"专业清洗",direction:"深度清洁，全新净界",path:"/clear"},
        {src:"./images/untitled2.png",tit:"代办事",direction:"急速响应，安全放心",path:"/commission"},
        {src:"./images/untitled3.png",tit:"洗衣",direction:"上门取送",path:"/aunt"},
        {src:"./images/untitled4.png",tit:"家政阿姨",direction:"找阿姨上叮咚，无需中介费",path:"/aunt"}
      ]
    }
  },
  vuex: {
    actions: {
     change: changeIndex
    }
   },
   ready:function(){
     this.change(1);
   },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>
