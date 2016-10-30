<template lang="html">
<div class="aunt-container">
  <header class="header">
    <div class="iconfont3" v-link="{path: '/index/service'}">&#xe611;</div>
    <h1>周边商家</h1>
  </header>
  <div class="topbar">
    <div class="topleft">
      <i></i>
      <span>洗衣</span>
    </div>
    <div class="topright">
      <i></i>
      <span>分类</span>
    </div>
  </div>
  <div id="auntiscroll">
    <ul class="aunt-list">
      <li v-for="item in auntList" v-link="{name: 'detail', params: {id:item.id}}">
        <img v-bind:src="item.merchantimg" alt=" " />
        <section>
          <b>
            {{item.mername}}
            <image v-if="item.isnew" src="./images/merchantnew.png" alt="" />
          </b>
          <i>{{item.time}} | 月售{{item.monthsale}}</i>
          <span>{{item.pro}}</span>
        </section>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
import { changeIndex } from "../vuex/action";
export default {
  data () {
    return {
      auntList:[]
    }
  },
  ready:function(){
    this.$http.get('./mock/merchantlist.json')
      .then((res) => {
        var resData = "";
        try {
          resData = JSON.parse(res.data);
        }catch (e) {
          resData = res.data;
        }
        for(var i=0;i<resData.length;i++){
          if(resData[i].id==1001||resData[i].id==1002){
            this.auntList.push(resData[i]);
          }
        }
        // this.auntList = res.data;
        Vue.nextTick(function() {
            var myScroll = new IScroll('#auntiscroll',{
              click:true,
              mouseWheel:true,
              probeType: 3
            });
        //
        //     var head = document.querySelector('.head img');
        //     var topImgHasClass = head.classList.contains('up');
        //     myScroll.on('scroll',function(){
        //       let y = this.y,//当前位置
        //         maxY = this.maxScrollY - y;
        //       if (y >= 0){
        //         that.isup = true;
        //         return '';
        //       }
        //       myScroll.on('scrollEnd', function() {
        //           if (this.y >= -80 && this.y < 0) {
        //               myScroll.scrollTo(0, -80);
        //               that.isup = true;
        //           } else if (this.y >= 0) {
        //               that.isup = true;
        //           //
        //           //     // ajax下拉刷新数据
        //               that.$http.get('/mock/refresh.json')
        //                   .then((res) => {
        //                     that.merchantList = res.data;
        //                     myScroll.scrollTo(0, -80);
        //                     that.isup = false;
        //                     Vue.nextTick(function() {
        //                       myScroll.refresh();
        //                     });
        //                   })
        //           }
        //     });
        //   })
        })
      });
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
