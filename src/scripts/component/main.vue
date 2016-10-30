<template>
  <div class="box">
    <div class="main-container">
      <div class="top">
        <p>
            宝景苑
        </p>
        <image class="search" src="./images/search.png"></image>
      </div>

      <section id="main-scroll">
        <section>
          <div class="head">
            <image v-bind:class="{'up': isup}" src="./images/down.png" alt="" />
            <span>{{refreshtxt}}</span>
          </div>
          <nav>
            <ul>
              <li v-for="nav in navlist" v-link="{path:nav.path}">
                  <i class="{{nav.new}}">
                    <img v-bind:src="nav.img" alt="" />
                    <span v-if="nav.show"><image src="./images/new.png" alt="" /></image></span>
                  </i>
                  <b>{{nav.txt}}</b>
              </li>
            </ul>
          </nav>

          <div class="hot">
            <ul>
              <li v-for="hot in hotlist" v-link="{path:hot.path}">
                <section>
                  <b>{{hot.title}}</b>
                  <article>{{hot.txt}}</article>
                </section>
                <img v-bind:src="hot.img" alt="" />
              </li>
            </ul>

          </div>

          <div class="merchant">
            <div class="merchant-title">
              周边商家
            </div>
            <ul class="merchant-list">
              <li v-for="merchant in merchantList" v-link="{name: 'detail', params: {id:merchant.id}}">
                <img v-bind:src="merchant.merchantimg" alt="" />
                <section>
                  <b>
                    {{merchant.mername}}
                    <image v-if="merchant.isnew" src="./images/merchantnew.png" alt="" />
                  </b>
                  <i>{{merchant.time}} | 月售{{merchant.monthsale}}</i>
                  <span>{{merchant.pro}}</span>
                </section>
              </li>
            </ul>
          </div>


        </section>

      </section>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { changeIndex } from "../vuex/action";
  export default {
    vuex: {
      actions: {
       change: changeIndex
     }
    },
    data() {
      return {
        navlist:[],
        hotlist:[],
        merchantList:[],
        isup:false,
        refreshtxt:'下拉刷新'
      }
    },
    ready:function() {
      this.change(0);
      let that = this;
      this.$http.get('./mock/navlist.json')
        .then((res) => {
          try{
            this.navlist = JSON.parse(res.data);
          }catch(e){
            this.navlist = res.data;
          }
        });
      this.$http.get('./mock/hot.json')
        .then((res) => {
          try{
            this.hotlist = JSON.parse(res.data);
          }catch(e){
            this.hotlist = res.data;
          }
        });
      this.$http.get('./mock/merchantlist.json')
        .then((res) => {
          try{
            this.merchantList = JSON.parse(res.data);
          }catch(e){
            this.merchantList = res.data;
          }
          Vue.nextTick(function() {
            // commonUtil.isAllLoaded('#main-scroll',function(){
              var myScroll = new IScroll('#main-scroll',{
                click:true,
                mouseWheel:true,
                probeType: 3
              });
              myScroll.scrollTo(0,-80);

              var head = document.querySelector('.head img');
              myScroll.on('scroll',function(){
                let y = this.y,//当前位置
                  maxY = this.maxScrollY - y;
                if (y >= 0){
                  that.isup = true;
                  that.refreshtxt = '松开后刷新';
                  return '';
                }
                myScroll.on('scrollEnd', function() {
                    if (this.y >= -80 && this.y < 0) {
                        myScroll.scrollTo(0, -80);
                        that.isup = false;
                    } else if (this.y >= 0) {
                        that.isup = true;
                        that.refreshtxt = '下拉刷新';
                    //     // ajax下拉刷新数据
                    if(this.y = -80){
                      that.$http.get('./mock/refresh.json')
                      .then((res) => {
                        try{
                          that.merchantList = JSON.parse(res.data);
                        }catch(e){
                          that.merchantList = res.data;
                        }
                        myScroll.scrollTo(0, -80);
                        that.isup = false;
                        Vue.nextTick(function() {
                          myScroll.refresh();
                        });
                      })
                    }
                    }
              });

            })
          })

        });

    }
  }

</script>
