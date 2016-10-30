<template lang="html">
  <div class="number-container">
    <!-- <h1 class="numberh1">应急号码通</h1> -->
    <header class="header">
      <div class="iconfont3" v-on:click="back">&#xe611;</div>
      <h1>应急号码通</h1>
    </header>
    <div id="numcontainer">
      <div id="num-scroll">
        <ul class="numclass">
          <li v-for="item in classnum" v-link="{name: 'senselists', params:{id:item.id}}">
            <b>{{item.tag}}</b>
            <i>{{item.direction}}</i>
          </li>
        </ul>
        <div class="hottit">{{hottit}}</div>
        <ul class="hotnum">
          <li v-for="hotnum in hotlist"  track-by="$index" v-link="{name: 'sensedetail', params:{id:hotnum.id}}">
            <i>{{hotnum.merchantName}}</i>
            <b>*****</b>
            <em>{{hotnum.address}}</em>
            <span v-if="hotnum.homeServiceSupport">{{homeServiceSupport}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
//引入Vue
import Vue from 'vue';
var VueResource = require('../libs/vue-resource.js');
Vue.use(VueResource);
var VueRouter = require('../libs/vue-router.js');
Vue.use(VueRouter);


export default {
  data () {
    return {
      hottit:"热门号码",
      classnum:[],
      hotlist:[],
      homeServiceSupport:"可以上门"
    }
  },
    ready:function() {
      this.$http.get('./mock/classnum.json')
        .then((res) => {
        var resData = "";
        try {
          resData = JSON.parse(res.data);
        }catch (e) {
          resData = res.data;
        }
          this.classnum = resData;
        });
      this.$http.get('./mock/hotnum.json')
        .then((res) => {
        var resData = "";
        try {
          resData = JSON.parse(res.data);
        }catch (e) {
          resData = res.data;
        }
          this.hotlist = resData;
          setTimeout(function(){
            new IScroll('#numcontainer',{
              click:true
            });
          },500);
      });
  },
  methods:{
    back:function(){
      window.history.go(-1);
      }
    },
  computed: {},
  mounted () {},
  components: {}
}
</script>
