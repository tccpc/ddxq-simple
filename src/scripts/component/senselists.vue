<template lang="html">
<div class="senselistscon">
  <header class="header">
    <div class="iconfont3" v-on:click="back">&#xe611;</div>
    <h1>{{senseobj.tag}}</h1>
  </header>
  <div class="numtop">
    <ul class="topbar">
      <li v-on:click="showorder">{{order.tit}}<span></span>
      </li>
      <li  v-on:click="showfilter">{{filter.tit}}<span></span>
      </li>
    </ul>
    <ul class="orderlist" v-if="showtopbarl">
      <li v-for="item in orderlist">{{item}}</li>
    </ul>
    <ul class="filterlist" v-if="showtopbarr">
      <li v-for="item in filterlist">{{item}}</li>
    </ul>
  </div>
  <div id="numlist-iscroll">
    <div class="scrollcon">
    <div>
      <div class="side" id="side-iscroll">
        <ul>
          <li v-on:click="switchNumpage($index)"  v-bind:class="numcur == $index ? 'active' : ''"  v-for="item in sidenav">{{item.tag}}</li>
        </ul>
      </div>
  </div>
    <div class="nummain" id="senselist-iscroll">
      <ul>
        <div class="head">
          <image v-bind:class="{'up': isup}" src="./images/down.png" alt="" />
          <span>{{refreshtxt}}</span>
        </div>
          <li v-for="item in senselist" track-by="$index" v-link="{name: 'sensedetail', params:{id:item.id}}">
            <i>{{item.merchantName}}</i>
            <b>*****</b>
            <em>{{item.address}}</em>
            <span v-if="item.homeServiceSupport">{{homeServiceSupport}}</span>
          </li>
      </ul>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import Vue from 'vue';
var VueResource = require('../libs/vue-resource.js');
Vue.use(VueResource);
var VueRouter = require('../libs/vue-router.js');
Vue.use(VueRouter);
import  {getIndex}  from '../vuex/getters'



export default {
  data () {
    return {
      isup:false,
      refreshtxt:'下拉刷新',
      numcur:0,
      showtopbarl:false,
      showtopbarr:false,
      senseobj:{},
      senselist:[],
      senselistall:[],
      convinince:{},
      sidenav:[],
      order:{
        tit:"排序"
      },
      orderlist:["靠谱指数","距离"],
      filter:{
        tit:"筛选"
      },
      filterlist:["显示全部","支持快递","支持代办","支持上门服务"]
    }
  },
  vuex: {
    getters: {
      // 注意在这里你需要 `getCount` 函数本身而不是它的执行结果 'getCount()'
      cur: getIndex
    }
  },
  ready:function(){
    var that=this;
    this.$http.get('./mock/senselist1.json')
        .then((res) => {
        var resData = "";
        try {
          resData = JSON.parse(res.data);
        }catch (e) {
          resData = res.data;
        }
          this.senseobj = resData;
          console.log(resData.result[1].num);
          this.senselistall = resData.result;
          for(var j=0;j<this.senselistall.length;j++){
            this.senselist.push(this.senselistall[j]);
          }
        })
    this.$http.get('./mock/numsidenav.json')
        .then((res) => {
        var resData = "";
        try {
          resData = JSON.parse(res.data);
        }catch (e) {
          resData = res.data;
        }
          this.sidenav = resData;
          setTimeout(function(){
            new IScroll('#side-iscroll',{
              click:true
            });
            var myScroll=new IScroll('#senselist-iscroll',{
              click:true
            });
            myScroll.scrollTo(0,-80);
            // myScroll.on('scroll',function () {
            //   console.log(that.maxScrollY);
            //   console.log(that.y);
            //   var y=that.y;
            //   if(y>=-70){
            //     myScroll.scrollTo(0,-80);
            //   }
            // })
          },500);
        })
  },
  computed: {},
  mounted () {},
  methods: {
    back:function(){
      window.history.go(-1);
    },
    switchNumpage:function(index){
      this.numcur = index;
      for(var j=0;j<this.senselistall.length;j++){
        this.senselist.push(this.senselistall[j]);
      for(var i=0;i<this.senselist.length;i++){
        if(this.senselist[i].id<this.numcur*1000+2500){
          this.senselist.splice(i,1);
        }
      }
    }
  },
  showorder:function () {
    this.showtopbarl=!this.showtopbarl;
    this.showtopbarr=false;
  },
  showfilter:function () {
    this.showtopbarl=false;
    this.showtopbarr=!this.showtopbarr;
  }
},

  components: {}
}

</script>
