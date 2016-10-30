<template lang="html">
  <div class="marketbox">

    <header>
      <div class="iconfont3" v-link="{path: '/index/neighbor'}">&#xe611;</div>
      <div>二手市场</div>
      <div class="iconfont3">&#xe61d;</div>
      <div class="iconfont3">&#xe603;</div>
    </header>

    <div class="marketcontains">
      <section id="market-index-scroll" v-scroll="{artIds:artId,fns:fn}">
        <div>
          <div class="head">
            <img v-bind:class="{'up': isup}" src="/android_asset/www/images/xlistview_arrow.png"/>
            <span>{{refreshtxt}}...</span>
          </div>

          <ul>
            <li v-for="listitem in list">
              <div class="iconfont4">&#xf0005;</div>
              <div>
                <p>{{listitem.usename}}<span>23小时前</span></p>
                <p>{{listitem.space}}</p>
                <p>{{listitem.name}}</p>
                <div class="imgdiv">
                  <img v-show="$index<3" v-for="imglist in listitem.img" v-bind:src="imglist" alt="tupian"/>
                  <!--<img src="http://ddimg.ddxq.mobi/f130b7ad1476006687439.jpg" alt="tupian"/>-->
                </div>
                <div>{{listitem.price}}</div>
              </div>
            </li>
          </ul>

          <div class="foot">
            <img src="/android_asset/www/images/ajax-loader.gif"/>
            <span>{{moretxt}}...</span>
          </div>


        </div>

      </section>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue';
  import commonUtil from '../common/common.js';
  import Iscroll from '../libs/libs/iscroll-probe.js';

  export default {
    data () {
      return {
        list: [],
        refreshtxt:"下拉刷新",
        moretxt:"加载更多",
        artId: '',
        fn: function(){},
        isup:false
      }
    },
    ready: function() {
      var that = this;
      this.$http.get('./mock/marketlist.json').then( (res) => {    //ajax 的URL
          try {
            this.list = JSON.parse(res.data).data;
          }catch (e) {
            this.list = res.data.data;
          }
          Vue.nextTick(function(){
            that.artId = "market-index-scroll";
            that.fn = function() {
              console.log(that.artId);
              var myScroll=new Iscroll('#'+that.artId,{
                click:true,
                mouseWheel: true,
                probeType: 3
              });
              myScroll.scrollTo(0,-35);

              var head = document.querySelector('.head img');
              myScroll.on('scroll',function(){
                let y = this.y,//当前位置
                        maxY = this.maxScrollY - y;
                if (y >= 0){
                  that.isup = true;
                  that.refreshtxt = '松开后刷新…';
                  return '';
                }
                /*if (y >= 0){
                  that.isup = true;
                  that.refreshtxt = '下拉刷新';
                  return '';
                }*/
              })

              myScroll.on('scrollEnd', function() {
                /*console.log('scrollEnd');*/
                if (this.y >= -35 && this.y < 0) {
                  myScroll.scrollTo(0, -35);
                  that.isup = false;
                } else if (this.y >= 0) {
                  that.isup = true;
                  that.refreshtxt = '正在加载…';
                  //     // ajax下拉刷新数据
                  that.$http.get('./mock/marketlist2.json')
                          .then((res) => {
                    try{
                      this.list = JSON.parse(res.data).data;
                    }catch(e){
                      that.list = res.data.data;
                    }
                    myScroll.scrollTo(0, -35);
                    that.refreshtxt = '下拉刷新';
                    that.isup = false;
                    Vue.nextTick(function() {
                      myScroll.refresh();
                    });
                  })
                }

                /*上拉加载*/
                var self = this;
                // maxScrollY为负值，-box高度
                var maxY = this.maxScrollY - this.y;
                if (maxY > -35 && maxY < 0) {
                  myScroll.scrollTo(0, self.maxScrollY + 35);
                  console.log('小于');
                } else if (maxY >= 0) {
                  //ajax上拉加载数据
                  console.log(maxY);
                  that.$http.get('./mock/marketlistmore.json')
                          .then((res) => {
                    try {
                      this.list = that.list.concat(JSON.parse(res.data).data);
                    }catch (e) {
                      that.list = that.list.concat(res.data.data);
                    }
                    that.moretxt = '加载完成';
                    Vue.nextTick(function() {
                      myScroll.refresh();
                      myScroll.scrollTo(0, self.maxScrollY + 35);
                      that.moretxt = '更多加载';
                    });
                  });
                }



                /**/
              })

            }

          });
      })
    },
    computed: {},
    mounted () {},
    methods: {},
    components: {}
  }
</script>

