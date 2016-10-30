<template lang="html">
  <div class="neicircledetailbox">

    <header>
      <div class="iconfont3" v-link="{path: '/neicircle'}">&#xe611;</div>
      <div v-show="isshow" class="iconfont3">&#xe603;</div>
      <div>团购详情</div>
      <div class="iconfont3">&#xe61d;</div>
    </header>

    <div class="neicircledetailcontains">
      <section v-scroll="{artIds:artId,fns:fn}" id="neicircle-index-scroll">
        <div class="neicircledetailbox2">

          <div>
            <img src="/android_asset/www/images/babimantou.png" alt=""/>
            <div>
              <p>叮咚趣玩dg <!--<img src="/images/right.png" alt=""/>--></p>
              <p>有家的地方就有叮咚小区</p>
            </div>
            <img src="/android_asset/www/images/right.png" alt=""/>
          </div>

          <img :src="list[0].detail_url" alt=""/>

          <div class="jianjie">
            <p v-if="list[0].title">{{list[0].title}}</p>
            <p>
              <span>45人参团</span>
              <span>距离团购结束仅剩<span>4天</span></span>
            </p>
          </div>

          <div class="secime">团购说明</div>

          <div class="secimeimg" v-if="list[0].description">
            {{{list[0].description}}}
          </div>

          <div class="tungou">团购商品</div>

          <div v-if="list[0].products" class="tungou2">
            <div>
              <div><img :src="list[0].products[0].image_url" alt=""/></div>
              <div class="tungou2div2">
                <p>{{list[0].products[0].product_name}}</p>
                <p>￥{{list[0].products[0].group_price}}</p>
                <p>已售46份，库存充足</p>
              </div>
              <div><img src="/android_asset/www/images/add_label.png" alt="jin"/></div>
            </div>
            <p>{{list[0].products[0].description}}</p>
          </div>

          <div class="people">团购商品</div>

          <div class="people2">
            <div v-for="list in list[0].orders">
              <div>
                <img v-if="list.user_avatar" :src="list.user_avatar" alt=""/>
                <img v-else src="/android_asset/www/images/my.png" alt="jin"/>
              </div>
              <p class="peopleusername">{{list.user_name}}</p>
              <p><!--new Date(DATE.now()-{{list.create_time}})-->24分钟前团了A1份</p>
            </div>
          </div>

        </div>

      </section>
    </div>

    <footer>
      <div>
        <img src="/android_asset/www/images/ic_merchant_call.png" alt=""/>
        <p>联系团长</p>
      </div>
      <div class="footercler"></div>
      <div>立即参团</div>
    </footer>

  </div>
</template>

<script>
  import Vue from 'vue';
  import Iscroll from '../libs/libs/iscroll-probe.js';
  export default {
    data () {
    return {
      isshow:false,
      list: [{}],
      artId: '',
      fn: function(){},
      refreshtxt:"下拉刷新",
      moretxt:"加载更多",
      isup:false
    }
  },
  ready: function() {
    console.log(Vue);
    var that = this;
    console.log(this.$route.params);
    this.$http.get('./mock/'+this.$route.params.id+'.json').then( (res) => {    //ajax 的URL
      try {
          this.list = JSON.parse(res.data).data;
      }catch (e) {
          this.list = res.data.data;
      }
      Vue.nextTick(function(){          //当artId改变时自动传值#content
        that.artId = "neicircle-index-scroll";
        that.fn = function() {
              console.log(that.artId);
              var myScroll=new Iscroll('#'+that.artId,{
                click:true,
                mouseWheel: true,
                probeType: 3
              });
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

<style lang="css">
</style>
