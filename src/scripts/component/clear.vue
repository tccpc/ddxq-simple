<template lang="html">
 <div class="clear-container">
   <header class="header">
     <div class="iconfont3" v-link="{path: '/index/service'}">&#xe611;</div>
     <h1>专业清洗</h1>
   </header>
   <div id="cleariscroll">
     <div class="top-bg">
       <img src="/android_asset/www/images/clearbg.png" alt="" />
     </div>
     <div class="clear-tit">
       <img src="/android_asset/www/images/daishop.png" alt="" />
     </div>
     <ul class="clearele">
       <li v-for='item in clearlist' v-show="item.src!=''">
         <img v-bind:src="item.src" alt="" />
         <div class="toptext">
           <i>{{item.tit}}</i>
           <em>{{item.discribe}}</em>
         </div>
       </li>
     </ul>
     <div class="clear-tit">
       <img src="/android_asset/www/images/daishop.png" alt="" />
     </div>
     <ul class="clearhome">
       <li v-for='item in clearlist2' v-show="item.src!=''">
         <img v-bind:src="item.src" alt="" />
         <div class="toptext">
           <i>{{item.tit}}</i>
           <em>{{item.discribe}}</em>
         </div>
       </li>
     </ul>
   </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clearlist:[],
      clearlist2:[]
    }
  },
  ready:function(){
    this.$http.get('./mock/clear1.json')
    .then((res)=>{
    var resData = "";
    try {
      resData = JSON.parse(res.data);
    }catch (e) {
      resData = res.data;
    }
      this.clearlist=resData;
    })
    this.$http.get('./mock/clear2.json')
    .then((res)=>{
    var resData = "";
    try {
      resData = JSON.parse(res.data);
    }catch (e) {
      resData = res.data;
    }
      this.clearlist2=resData;
    })
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
